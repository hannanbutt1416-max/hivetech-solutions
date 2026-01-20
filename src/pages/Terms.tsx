import { motion } from 'motion/react';

export function Terms() {
  return (
    <main className="pt-32">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="mb-6">Terms of Service</h1>
          <p className="text-[var(--text-secondary)] mb-8">Last updated: November 10, 2025</p>

          <div className="space-y-8 text-[var(--text-neutral)]">
            <section>
              <h2 className="mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using the hive tech solutions website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily access the materials on hive tech solutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to decompile or reverse engineer any software on our website</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">Services</h2>
              <p className="mb-4">hive tech solutions provides the following services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Local and Technical SEO services</li>
                <li>Workflow automation solutions</li>
                <li>Web application development</li>
                <li>SaaS platform development</li>
                <li>Digital marketing consultation</li>
                <li>Google My Business optimization</li>
              </ul>
              <p className="mt-4">
                The specific terms of service delivery, including timelines, deliverables, and pricing, will be outlined in individual service agreements or statements of work.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Payment Terms</h2>
              <p className="mb-4">
                Payment terms will be specified in your service agreement. Generally:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Monthly services are billed in advance at the beginning of each billing cycle</li>
                <li>Annual plans receive a 10% discount and are billed annually</li>
                <li>Custom projects may require a deposit before work begins</li>
                <li>Late payments may result in service suspension</li>
                <li>Refunds are provided according to our refund policy</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">Intellectual Property</h2>
              <p>
                All materials on this website, including but not limited to text, graphics, logos, images, and software, are the property of hive tech solutions or its content suppliers and are protected by international copyright laws.
              </p>
              <p className="mt-4">
                For custom development work, intellectual property ownership will be specified in the service agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Disclaimer</h2>
              <p className="mb-4">
                The materials on hive tech solutions' website are provided on an 'as is' basis. hive tech solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Further, hive tech solutions does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Limitations of Liability</h2>
              <p>
                In no event shall hive tech solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on hive tech solutions' website, even if hive tech solutions or a hive tech solutions authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Service Level Agreement</h2>
              <p className="mb-4">
                For paid services, we commit to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>99.9% uptime for hosted applications (excluding scheduled maintenance)</li>
                <li>Response to support requests within specified timeframes based on your plan</li>
                <li>Regular reporting and performance tracking</li>
                <li>Transparent communication about any service disruptions</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">Termination</h2>
              <p>
                Either party may terminate services with 30 days written notice. Upon termination, you will be responsible for payment of all services rendered up to the termination date. hive tech solutions reserves the right to terminate services immediately in case of breach of these terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any proprietary information shared during the course of the business relationship. This obligation survives the termination of services.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of California, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Changes to Terms</h2>
              <p>
                hive tech solutions reserves the right to revise these terms of service at any time. By using this website and our services, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="mt-4 space-y-2">
                <li>Email: <a href="mailto:legal@hivetechsolutions.com" className="text-[var(--accent-cyan)] hover:text-[var(--accent-lime)]">legal@hivetechsolutions.com</a></li>
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
