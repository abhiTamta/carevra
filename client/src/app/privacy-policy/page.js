import { ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex justify-center px-4 py-10">
      <Card className="max-w-5xl w-full rounded-2xl shadow-md">
        <CardContent className="p-8 space-y-6 text-gray-800">

          <h1 className="text-3xl font-extrabold text-teal-600 flex items-center gap-2">
            <ShieldCheck className="w-7 h-7"/> Privacy Policy
          </h1>

          <p className="text-sm text-gray-600">
            <strong>Effective Date:</strong> 04 January 2026 <br/>
            <strong>Platform:</strong> Carevra (Animal Care & Service Marketplace)
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">1. Introduction</h2>
            <p className="text-sm leading-relaxed">
              Carevra respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, store, and safeguard your information when you access our platform or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">2. Information We Collect</h2>

            <h3 className="font-semibold text-teal-700 text-sm mt-2">A. From Pet Owners / Users</h3>
            <ul className="list-disc pl-5 text-sm">
              <li>Name, email, phone number</li>
              <li>Location and service address for doorstep services</li>
              <li>Booking details and preferences</li>
              <li>Payment data (processed securely via third-party gateways)</li>
              <li>Chat and support communication within the app</li>
            </ul>

            <h3 className="font-semibold text-teal-700 text-sm mt-4">B. From Service Providers</h3>
            <ul className="list-disc pl-5 text-sm">
              <li>Full name, contact details, service location</li>
              <li>Professional documents (Vet license, training, grooming, boarding certificates)</li>
              <li>ID proof (Aadhar, PAN, Passport, etc.)</li>
              <li>Portfolio media submitted by providers</li>
              <li>Ratings, reviews, verification status</li>
              <li>Device and activity logs for fraud prevention</li>
            </ul>

            <h3 className="font-semibold text-teal-700 text-sm mt-4">C. Automatically Collected</h3>
            <ul className="list-disc pl-5 text-sm">
              <li>IP address, device info, browser type</li>
              <li>Cookies and analytics data</li>
              <li>Performance and security logs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">3. How We Use Your Data</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Enable bookings and provider matching</li>
              <li>Verify and onboard professionals</li>
              <li>Process payments securely</li>
              <li>Provide 24/7 in-app support</li>
              <li>Improve platform safety and detect fraud or abuse</li>
              <li>Send reminders, alerts, and service updates</li>
              <li>Comply with legal requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">4. Data Security & Storage</h2>
            <p className="text-sm leading-relaxed">
              We use encryption, secure servers, firewalls, and restricted access to protect your data. Passwords are securely hashed. Payments are handled by PCI-compliant gateways. We do not sell personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">5. Data Sharing</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Booking details may be shared with verified providers</li>
              <li>Third-party partners (payment, storage, analytics) under confidentiality</li>
              <li>Legal authorities if required by court order or investigation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">6. Cookies</h2>
            <p className="text-sm">
              Cookies are used to maintain login sessions, analyze traffic, and block harmful bots. Users can change cookie settings in their browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">7. Provider Compliance</h2>
            <p className="text-sm leading-relaxed">
              Providers undergo verification. Fraudulent or misleading document submissions lead to suspension or permanent removal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">8. Your Rights</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Access your stored data</li>
              <li>Request corrections</li>
              <li>Request account deletion (except retained legal records)</li>
              <li>Opt-out of marketing communication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">9. Data Retention</h2>
            <p className="text-sm">
              Data is retained as long as needed for services, legal compliance, fraud prevention, or dispute resolution. Provider verification documents may be retained for safety audits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">10. Updates</h2>
            <p className="text-sm">
              This policy may be updated periodically. Changes will be posted with a revised effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">11. Contact</h2>
            <p className="text-sm">
              For privacy concerns, contact us through in-app support or official Carevra communication channels.
            </p>
          </section>

          <footer className="text-xs text-gray-500 text-center pt-4">
            Carevra is committed to ethical animal care, transparent onboarding, and secure data protection.
          </footer>

        </CardContent>
      </Card>
    </main>
  );
}
