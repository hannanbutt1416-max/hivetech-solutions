import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner@2.0.3';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyArrowSidebar } from './components/StickyArrowSidebar';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Chatbot } from './components/Chatbot';
import { ScrollToTop } from './components/ScrollToTop';
import { SEOHead, pageSEO } from './components/SEOHead';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Work } from './pages/Work';
import { Pricing } from './pages/Pricing';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Demo } from './pages/Demo';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';
import { Admin } from './pages/Admin';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <Header />
        <StickyArrowSidebar />
        <WhatsAppFloat />
        <Chatbot />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
          <Route path="/work" element={<Work />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'var(--bg-surface)',
              color: 'var(--text-primary)',
              border: '1px solid var(--accent-blue)',
            },
          }}
        />
      </div>
    </Router>
  );
}
export default App;

