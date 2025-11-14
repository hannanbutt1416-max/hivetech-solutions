import { useState, useEffect } from 'react';
import { Search, Filter, Eye, Trash2, RefreshCw, LogOut, Mail, Phone, Building2, DollarSign, Calendar, MessageSquare, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase } from '../utils/supabase/client';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { toast } from 'sonner@2.0.3';
import { Logo } from '../components/Logo';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  createdAt: string;
  status?: string;
}

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [accessToken, setAccessToken] = useState('');
  
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginLoading, setLoginLoading] = useState(false);

  const itemsPerPage = 10;

  // Check auth status
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.access_token) {
        setAccessToken(session.access_token);
        setIsAuthenticated(true);
        fetchContacts(session.access_token);
      } else {
        setIsAuthenticated(false);
        setLoading(false);
      }
    } catch (error) {
      console.error('Auth check error:', error);
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginForm.email,
        password: loginForm.password,
      });

      if (error) {
        toast.error('Login failed: ' + error.message);
        setLoginLoading(false);
        return;
      }

      if (data.session?.access_token) {
        setAccessToken(data.session.access_token);
        setIsAuthenticated(true);
        toast.success('Welcome back!');
        fetchContacts(data.session.access_token);
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  const fetchContacts = async (token: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7a8487cf/admin/contacts`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setContacts(data.contacts || []);
        setFilteredContacts(data.contacts || []);
        toast.success(`Loaded ${data.contacts?.length || 0} contacts`);
      } else {
        toast.error(data.error || 'Failed to fetch contacts');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setAccessToken('');
    setContacts([]);
    toast.success('Logged out successfully');
  };

  const handleDelete = async (contactId: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7a8487cf/admin/contacts/${contactId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        setContacts(contacts.filter(c => c.id !== contactId));
        setFilteredContacts(filteredContacts.filter(c => c.id !== contactId));
        toast.success('Contact deleted');
      } else {
        toast.error('Failed to delete contact');
      }
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete contact');
    }
  };

  // Filter and search
  useEffect(() => {
    let filtered = contacts;

    if (searchTerm) {
      filtered = filtered.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.company?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(contact => contact.status === statusFilter);
    }

    setFilteredContacts(filtered);
    setCurrentPage(1);
  }, [searchTerm, statusFilter, contacts]);

  // Pagination
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border-4 border-[#FFD700]"
        >
          <div className="text-center mb-8">
            <Logo className="h-16 w-auto mx-auto mb-4" />
            <h2 className="text-[#1A1A1A] mb-2">Admin Panel</h2>
            <p className="text-[#4A4A4A]">Sign in to manage contacts</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#F5F5F5] border-2 border-[#E0E0E0] rounded-lg text-[#1A1A1A] focus:border-[#FFD700] focus:outline-none transition-colors"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full px-4 py-3 bg-[#F5F5F5] border-2 border-[#E0E0E0] rounded-lg text-[#1A1A1A] focus:border-[#FFD700] focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full px-6 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#1A1A1A] rounded-lg hover:shadow-xl transition-all duration-300 glow-yellow disabled:opacity-50 font-semibold"
            >
              {loginLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-32">
      <div className="container mx-auto px-6 pb-20">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-[#FFD700]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Logo className="h-12 w-auto" />
              <div>
                <h1 className="text-[#1A1A1A]">Contact Management</h1>
                <p className="text-[#4A4A4A] text-sm">Total: {contacts.length} contacts</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => fetchContacts(accessToken)}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F5] hover:bg-[#FFD700]/20 border-2 border-[#E0E0E0] hover:border-[#FFD700] rounded-lg transition-all font-semibold text-[#1A1A1A]"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] hover:bg-[#2D2D2D] text-white rounded-lg transition-all font-semibold"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-[#E0E0E0]">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#808080]" />
              <input
                type="text"
                placeholder="Search by name, email, or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#F5F5F5] border-2 border-[#E0E0E0] rounded-lg text-[#1A1A1A] focus:border-[#FFD700] focus:outline-none transition-colors"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#808080]" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#F5F5F5] border-2 border-[#E0E0E0] rounded-lg text-[#1A1A1A] focus:border-[#FFD700] focus:outline-none transition-colors appearance-none"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#E0E0E0]">
          {loading ? (
            <div className="p-12 text-center">
              <RefreshCw className="w-8 h-8 animate-spin text-[#FFD700] mx-auto mb-4" />
              <p className="text-[#4A4A4A]">Loading contacts...</p>
            </div>
          ) : paginatedContacts.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-[#4A4A4A]">No contacts found</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#1A1A1A] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Name</th>
                      <th className="px-6 py-4 text-left font-semibold">Email</th>
                      <th className="px-6 py-4 text-left font-semibold">Company</th>
                      <th className="px-6 py-4 text-left font-semibold">Service</th>
                      <th className="px-6 py-4 text-left font-semibold">Date</th>
                      <th className="px-6 py-4 text-center font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E0E0E0]">
                    {paginatedContacts.map((contact) => (
                      <motion.tr
                        key={contact.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="hover:bg-[#F5F5F5] transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFC000] flex items-center justify-center text-[#1A1A1A] font-semibold">
                              {contact.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="font-medium text-[#1A1A1A]">{contact.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[#4A4A4A]">{contact.email}</td>
                        <td className="px-6 py-4 text-[#4A4A4A]">{contact.company || '-'}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-[#FFD700]/20 text-[#1A1A1A] rounded-full text-sm font-medium">
                            {contact.service || 'General'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-[#4A4A4A] text-sm">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => setSelectedContact(contact)}
                              className="p-2 bg-[#FFD700]/20 hover:bg-[#FFD700] text-[#1A1A1A] rounded-lg transition-all"
                              title="View details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(contact.id)}
                              className="p-2 bg-red-100 hover:bg-red-500 text-red-600 hover:text-white rounded-lg transition-all"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 bg-[#F5F5F5] border-t border-[#E0E0E0] flex items-center justify-between">
                <p className="text-sm text-[#4A4A4A]">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredContacts.length)} of {filteredContacts.length} contacts
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white border-2 border-[#E0E0E0] hover:border-[#FFD700] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-[#1A1A1A]"
                  >
                    Previous
                  </button>
                  <span className="px-4 py-2 bg-[#FFD700] text-[#1A1A1A] rounded-lg font-semibold">
                    {currentPage} / {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white border-2 border-[#E0E0E0] hover:border-[#FFD700] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-[#1A1A1A]"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Contact Detail Modal */}
      <AnimatePresence>
        {selectedContact && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedContact(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto border-4 border-[#FFD700]">
                <div className="sticky top-0 bg-gradient-to-r from-[#1A1A1A] to-[#2D2D2D] text-white p-6 rounded-t-xl flex items-center justify-between border-b-4 border-[#FFD700]">
                  <h3 className="text-white">Contact Details</h3>
                  <button
                    onClick={() => setSelectedContact(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    ×
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-lg">
                    <User className="w-5 h-5 text-[#FFD700]" />
                    <div>
                      <p className="text-sm text-[#808080]">Name</p>
                      <p className="font-semibold text-[#1A1A1A]">{selectedContact.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-lg">
                    <Mail className="w-5 h-5 text-[#FFD700]" />
                    <div>
                      <p className="text-sm text-[#808080]">Email</p>
                      <p className="font-semibold text-[#1A1A1A]">{selectedContact.email}</p>
                    </div>
                  </div>
                  {selectedContact.phone && (
                    <div className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-lg">
                      <Phone className="w-5 h-5 text-[#FFD700]" />
                      <div>
                        <p className="text-sm text-[#808080]">Phone</p>
                        <p className="font-semibold text-[#1A1A1A]">{selectedContact.phone}</p>
                      </div>
                    </div>
                  )}
                  {selectedContact.company && (
                    <div className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-lg">
                      <Building2 className="w-5 h-5 text-[#FFD700]" />
                      <div>
                        <p className="text-sm text-[#808080]">Company</p>
                        <p className="font-semibold text-[#1A1A1A]">{selectedContact.company}</p>
                      </div>
                    </div>
                  )}
                  {selectedContact.service && (
                    <div className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-lg">
                      <Building2 className="w-5 h-5 text-[#FFD700]" />
                      <div>
                        <p className="text-sm text-[#808080]">Service</p>
                        <p className="font-semibold text-[#1A1A1A]">{selectedContact.service}</p>
                      </div>
                    </div>
                  )}
                  {selectedContact.budget && (
                    <div className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-lg">
                      <DollarSign className="w-5 h-5 text-[#FFD700]" />
                      <div>
                        <p className="text-sm text-[#808080]">Budget</p>
                        <p className="font-semibold text-[#1A1A1A]">{selectedContact.budget}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3 p-4 bg-[#F5F5F5] rounded-lg">
                    <Calendar className="w-5 h-5 text-[#FFD700] mt-1" />
                    <div>
                      <p className="text-sm text-[#808080]">Submitted</p>
                      <p className="font-semibold text-[#1A1A1A]">
                        {new Date(selectedContact.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-[#F5F5F5] rounded-lg">
                    <p className="text-sm text-[#808080] mb-2">Message</p>
                    <p className="text-[#1A1A1A] whitespace-pre-wrap">{selectedContact.message}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}