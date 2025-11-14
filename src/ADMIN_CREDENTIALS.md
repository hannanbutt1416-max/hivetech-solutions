# Admin Panel Access - Hive Tech Solutions

## Admin Panel URL
`/admin`

## Creating Your Admin Account

Since this is a fresh installation, you'll need to create your admin account first.

### Method 1: Using Curl (Command Line)

```bash
curl -X POST https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-7a8487cf/admin/signup \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -d '{
    "email": "admin@hivetechsolutions.com",
    "password": "HiveTech2024!Secure",
    "name": "Admin User"
  }'
```

### Method 2: Using Browser Console

1. Open your website in the browser
2. Press F12 to open Developer Tools
3. Go to the Console tab
4. Paste and run this code:

```javascript
fetch('https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-7a8487cf/admin/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ANON_KEY'
  },
  body: JSON.stringify({
    email: 'admin@hivetechsolutions.com',
    password: 'HiveTech2024!Secure',
    name: 'Admin User'
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

### Method 3: Using Supabase Dashboard

1. Go to your Supabase project dashboard
2. Click on "Authentication" in the left sidebar
3. Click "Add User" button
4. Enter:
   - Email: `admin@hivetechsolutions.com`
   - Password: `HiveTech2024!Secure`
   - Confirm Password: `HiveTech2024!Secure`
   - Auto Confirm User: YES (check this box)
5. Click "Create User"

## Default Admin Credentials (after setup)

**Email:** `admin@hivetechsolutions.com`  
**Password:** `HiveTech2024!Secure`

## Login Instructions

1. Navigate to `/admin` on your website
2. Enter your email and password
3. Click "Sign In"
4. You'll be redirected to the admin dashboard

## Features Available in Admin Panel

- ✅ View all contact form submissions
- ✅ Search contacts by name, email, or company
- ✅ Filter by status (New, Contacted, Qualified)
- ✅ Paginated list (10 per page)
- ✅ View detailed contact information
- ✅ Delete contacts
- ✅ Real-time data sync with Supabase
- ✅ Manual refresh button
- ✅ Responsive design for all devices

## Security Notes

- All admin endpoints require authentication
- Passwords are securely hashed by Supabase
- Access tokens are validated on every request
- Please change the default password after first login

## Troubleshooting

### Can't Log In?
- Make sure you've created the admin account first
- Check that email confirmation is enabled in Supabase
- Verify the password is correct (case-sensitive)

### Logo Not Showing?
- The logo uses `figma:asset` import which works in Figma Make
- For production, replace with your actual logo URL
- Check browser console for any import errors

### Data Not Loading?
- Click the "Refresh" button
- Check browser console for errors
- Verify Supabase connection is active
- Make sure contact forms have been submitted

## Support

For any issues, check the browser console (F12) for error messages.
