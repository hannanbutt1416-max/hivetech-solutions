# 🔒 ADMIN PANEL SETUP - Hive Tech Solutions

## **CREDENTIALS TO CREATE**

```
Email: admin@hivetechsolutions.com
Password: HiveTech2024!Secure
```

---

## **METHOD 1: Via Supabase Dashboard (RECOMMENDED)**

### Steps:
1. Open your **Supabase Dashboard**
2. Go to **Authentication** → **Users**
3. Click the **"Add User"** or **"Invite User"** button
4. Fill in the form:
   - **Email**: `admin@hivetechsolutions.com`
   - **Password**: `HiveTech2024!Secure`
   - **✅ IMPORTANT**: Check the box **"Auto Confirm User"**
5. Click **"Create User"** or **"Send Invitation"**

---

## **METHOD 2: Via Browser Console (Alternative)**

### Steps:
1. Go to your website (any page)
2. Open **Browser DevTools** (F12 or Right-click → Inspect)
3. Go to the **Console** tab
4. Paste this code and press Enter:

```javascript
fetch('YOUR_SUPABASE_URL/auth/v1/admin/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_SUPABASE_SERVICE_ROLE_KEY',
    'apikey': 'YOUR_SUPABASE_ANON_KEY'
  },
  body: JSON.stringify({
    email: 'admin@hivetechsolutions.com',
    password: 'HiveTech2024!Secure',
    email_confirm: true,
    user_metadata: {
      name: 'Admin',
      role: 'admin'
    }
  })
})
.then(res => res.json())
.then(data => {
  console.log('✅ Admin user created successfully:', data);
})
.catch(err => {
  console.error('❌ Error creating admin user:', err);
});
```

**Replace**:
- `YOUR_SUPABASE_URL` with your actual Supabase project URL
- `YOUR_SUPABASE_SERVICE_ROLE_KEY` with your service role key
- `YOUR_SUPABASE_ANON_KEY` with your anon key

---

## **METHOD 3: Using Supabase SQL Editor**

### Steps:
1. Go to **Supabase Dashboard**
2. Navigate to **SQL Editor**
3. Click **"New Query"**
4. Paste this SQL:

```sql
-- This will insert a user directly into auth.users table
-- Note: You'll still need to set a password via Supabase Auth Admin API

INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  invited_at,
  confirmation_token,
  confirmation_sent_at,
  recovery_token,
  recovery_sent_at,
  email_change_token_new,
  email_change,
  email_change_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  created_at,
  updated_at,
  phone,
  phone_confirmed_at,
  phone_change,
  phone_change_token,
  phone_change_sent_at,
  email_change_token_current,
  email_change_confirm_status,
  banned_until,
  reauthentication_token,
  reauthentication_sent_at
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@hivetechsolutions.com',
  crypt('HiveTech2024!Secure', gen_salt('bf')),
  NOW(),
  NULL,
  '',
  NULL,
  '',
  NULL,
  '',
  '',
  NULL,
  NULL,
  '{"provider":"email","providers":["email"]}',
  '{"name":"Admin","role":"admin"}',
  NULL,
  NOW(),
  NOW(),
  NULL,
  NULL,
  '',
  '',
  NULL,
  '',
  0,
  NULL,
  '',
  NULL
);
```

5. Click **"Run"**

⚠️ **Warning**: This is advanced and may not work if your Supabase configuration restricts direct auth table access. Use Method 1 instead.

---

## **VERIFY ADMIN ACCOUNT**

### Test Login:
1. Go to `/admin` on your website
2. Enter:
   - **Email**: `admin@hivetechsolutions.com`
   - **Password**: `HiveTech2024!Secure`
3. Click **"Sign In"**
4. You should be redirected to the admin dashboard!

---

## **SECURITY NOTES**

✅ **Password Requirements**:
- Minimum 12 characters
- Contains uppercase, lowercase, numbers, special characters
- Current password: `HiveTech2024!Secure`

✅ **Best Practices**:
- Change the default password after first login
- Enable 2FA if Supabase supports it
- Use a password manager
- Don't share credentials via insecure channels

✅ **Environment Variables** (Already configured):
- `SUPABASE_URL` - Your project URL
- `SUPABASE_ANON_KEY` - Public anon key
- `SUPABASE_SERVICE_ROLE_KEY` - Private service role key (server-side only)

---

## **TROUBLESHOOTING**

### Problem: "Invalid login credentials"
**Solution**: 
- Make sure `email_confirmed_at` is set (check "Auto Confirm User")
- Verify the password matches exactly
- Check if the user exists in Auth > Users

### Problem: "User already exists"
**Solution**:
- Good news! The user is already created
- Try logging in with the credentials
- Reset password if forgotten

### Problem: "Access denied"
**Solution**:
- Verify your Supabase service role key is correct
- Check that Auth is enabled in your Supabase project
- Ensure RLS policies allow admin access

---

## **ADMIN PANEL FEATURES**

Once logged in, you'll have access to:
- 📊 Dashboard with statistics
- 📋 All contact form submissions
- 🔍 Search and filter contacts
- 👁️ View detailed contact information
- 🗑️ Delete contact entries
- 📈 Export data (coming soon)
- ⚙️ Settings (coming soon)

---

## **NEXT STEPS AFTER LOGIN**

1. ✅ Change default password
2. ✅ Test all admin features
3. ✅ Verify contact form submissions are saving
4. ✅ Check consultation modal submissions
5. ✅ Test search and filter functionality

---

**Need Help?** Contact your development team or check Supabase documentation at https://supabase.com/docs/guides/auth

**Status**: ✅ Admin panel is fully functional and ready to use!
