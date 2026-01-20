import { motion } from 'motion/react';

export function Privacy() {
  return (
    <main className="pt-32">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="mb-6">Privacy Policy</h1>
          <p className="text-[var(--text-secondary)] mb-8">Last updated: November 10, 2025</p>

          <div className="space-y-8 text-[var(--text-neutral)]">
            <section>
              <h2 className="mb-4">Introduction</h2>
              <p>
                At hive tech solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Information We Collect</h2>
              <h3 className="mb-3 text-[var(--accent-cyan)]">Personal Information</h3>
              <p className="mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fill out a contact form</li>
                <li>Schedule a consultation</li>
                <li>Subscribe to our newsletter</li>
                <li>Use our services</li>
              </ul>
              <p className="mt-4">
                This information may include your name, email address, phone number, company name, and any other information you choose to provide.
              </p>

              <h3 className="mt-6 mb-3 text-[var(--accent-cyan)]">Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device.
              </p>
            </section>

            <section>
              <h2 className="mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service, updates, and marketing purposes</li>
                <li>Send you emails and newsletters</li>
                <li>Find and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Third-Party Services</h2>
              <p>
                We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, perform service-related activities, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Your Data Protection Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The right to access – You have the right to request copies of your personal data</li>
                <li>The right to rectification – You have the right to request correction of inaccurate information</li>
                <li>The right to erasure – You have the right to request deletion of your personal data</li>
                <li>The right to restrict processing – You have the right to request restriction of processing</li>
                <li>The right to object to processing – You have the right to object to our processing</li>
                <li>The right to data portability – You have the right to request transfer of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="mt-4 space-y-2">
                <li>Email: <a href="mailto:privacy@hivetechsolutions.com" className="text-[var(--accent-cyan)] hover:text-[var(--accent-lime)]">privacy@hivetechsolutions.com</a></li>
                <li>Phone: <a href="tel:+18178866699" className="text-[var(--accent-cyan)] hover:text-[var(--accent-lime)]">+1 (817) 886-6699</a></li>
                <li>Address: 2833 Crockett Street Ste 1113, Fort Worth, TX, USA</li>
                <li>Office Address: 7838 Malton Lane, Appt 22, Worthington, Columbus, Ohio 43085</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
