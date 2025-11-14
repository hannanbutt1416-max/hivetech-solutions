import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

// CORS middleware
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

// Logger middleware
app.use('*', logger(console.log));

// Create Supabase client for service role operations
const getSupabaseClient = () => {
  return createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  );
};

// Health check endpoint
app.get('/make-server-7a8487cf/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Submit contact form
app.post('/make-server-7a8487cf/contact', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, company, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ error: 'Name, email, and message are required' }, 400);
    }

    // Save to KV store with timestamp
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const contactData = {
      id: contactId,
      name,
      email,
      phone: phone || '',
      company: company || '',
      service: service || '',
      budget: budget || '',
      message,
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    await kv.set(contactId, contactData);

    console.log('Contact form submitted successfully:', contactId);
    return c.json({ success: true, id: contactId, message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return c.json({ error: 'Failed to submit contact form', details: error.message }, 500);
  }
});

// Get all contact submissions (admin only)
app.get('/make-server-7a8487cf/admin/contacts', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'Unauthorized - No token provided' }, 401);
    }

    // Verify user with Supabase
    const supabase = getSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      console.error('Authorization error while fetching contacts:', authError);
      return c.json({ error: 'Unauthorized - Invalid token' }, 401);
    }

    // Get all contacts from KV store
    const allContacts = await kv.getByPrefix('contact_');
    
    // Sort by createdAt descending (newest first)
    const sortedContacts = allContacts.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    console.log(`Admin fetched ${sortedContacts.length} contacts`);
    return c.json({ success: true, contacts: sortedContacts, total: sortedContacts.length });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return c.json({ error: 'Failed to fetch contacts', details: error.message }, 500);
  }
});

// Update contact status (admin only)
app.put('/make-server-7a8487cf/admin/contacts/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const supabase = getSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const contactId = c.req.param('id');
    const body = await c.req.json();
    const { status } = body;

    // Get existing contact
    const existingContact = await kv.get(contactId);
    if (!existingContact) {
      return c.json({ error: 'Contact not found' }, 404);
    }

    // Update contact
    const updatedContact = {
      ...existingContact,
      status: status || existingContact.status,
      updatedAt: new Date().toISOString(),
    };

    await kv.set(contactId, updatedContact);

    return c.json({ success: true, contact: updatedContact });
  } catch (error) {
    console.error('Error updating contact:', error);
    return c.json({ error: 'Failed to update contact', details: error.message }, 500);
  }
});

// Delete contact (admin only)
app.delete('/make-server-7a8487cf/admin/contacts/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const supabase = getSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const contactId = c.req.param('id');
    await kv.del(contactId);

    return c.json({ success: true, message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return c.json({ error: 'Failed to delete contact', details: error.message }, 500);
  }
});

// Admin signup endpoint
app.post('/make-server-7a8487cf/admin/signup', async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return c.json({ error: 'Email and password are required' }, 400);
    }

    const supabase = getSupabaseClient();
    
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name: name || 'Admin' },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.error('Signup error:', error);
      return c.json({ error: 'Failed to create admin user', details: error.message }, 500);
    }

    return c.json({ success: true, user: data.user });
  } catch (error) {
    console.error('Error during admin signup:', error);
    return c.json({ error: 'Failed to create admin user', details: error.message }, 500);
  }
});

Deno.serve(app.fetch);
