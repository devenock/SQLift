export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="mb-4">Last updated: December 23, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using SQLMaster, you accept and agree to be bound
              by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. User Account</h2>
            <p className="mb-4">
              To access certain features of the platform, you must register for
              an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate information</li>
              <li>Maintain the security of your account</li>
              <li>Promptly update any changes to your information</li>
              <li>
                Accept responsibility for all activities under your account
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              3. Intellectual Property
            </h2>
            <p className="mb-4">
              The platform and its original content, features, and functionality
              are owned by SQLMaster and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. User Content</h2>
            <p className="mb-4">
              By submitting solutions to SQL challenges, you grant us the right
              to use, modify, publicly perform, publicly display, reproduce, and
              distribute such content on and through the platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account and bar access to the
              platform immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              6. Limitation of Liability
            </h2>
            <p className="mb-4">
              In no event shall SQLMaster, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify or replace these Terms at any time.
              It is your responsibility to review these Terms periodically for
              changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mb-4">Email: terms@sqlmaster.com</p>
          </section>
        </div>
      </main>
    </div>
  );
}
