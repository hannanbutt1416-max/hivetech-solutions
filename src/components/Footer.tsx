import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { LogoImage } from './LogoImage';

export function Footer() {
  const footerLinks = {
    Services: [
      { label: 'Local SEO', path: '/service/local-seo' },
      { label: 'Web Applications', path: '/service/webapps' },
      { label: 'Automation', path: '/service/automations' },
      { label: 'Technical SEO', path: '/service/technical-seo' },
    ],
    Resources: [
      { label: 'Case Studies', path: '/work' },
      { label: 'Blog', path: '/blog' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Schedule Demo', path: '/demo' },
    ],
    Company: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Careers', path: '/about#careers' },
    ],
    Legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@hivetechsolutions.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#1A1A1A] border-t-4 border-[#FFD700] mt-32">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
          {/* Logo Section */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <LogoImage className="h-12 w-auto" />
            </Link>
            <p className="text-[#D3D3D3] text-sm mb-6">
              Algorithmic growth partner for local businesses. Premium Web Apps, Automated Workflows & Local SEO Excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#2D2D2D] hover:bg-[#FFD700] text-[#D3D3D3] hover:text-[#1A1A1A] flex items-center justify-center rounded-lg transition-all duration-200 border border-[#FFD700]/30 hover:border-[#FFD700]"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#FFD700] mb-4 font-semibold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-[#D3D3D3] hover:text-[#FFD700] transition-colors duration-200 text-sm block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#2D2D2D]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#808080] text-sm">
              © {new Date().getFullYear()} Hive Tech Solutions. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}