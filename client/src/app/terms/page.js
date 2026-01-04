import { ShieldCheck, Users, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen flex justify-center px-4 py-10">
      <Card className="max-w-5xl w-full rounded-2xl shadow-md">
        <CardContent className="p-8 space-y-6 text-gray-800">

          <h1 className="text-3xl font-extrabold text-teal-600 flex items-center gap-2">
            <ShieldCheck className="w-7 h-7"/> Terms & Conditions
          </h1>

          <p className="text-sm text-gray-600">
            <strong>Effective Date:</strong> 04 January 2026 <br/>
            <strong>Platform:</strong> Carevra (Animal Care & Service Marketplace)
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">1. Introduction</h2>
            <p className="text-sm leading-relaxed">
              These Terms and Conditions govern your use of Carevra’s platform, services, and provider marketplace.
              By accessing or using Carevra, you agree to comply with these terms.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">2. Eligibility</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Users must be at least 18 years old to register or book services.</li>
              <li>Providers must submit valid identity proof and relevant professional certificates for verification.</li>
              <li>Carevra reserves the right to approve or reject registrations based on verification results.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">3. Account Responsibilities</h2>
            <h3 className="font-semibold text-teal-700 text-sm mt-2 flex items-center gap-1">
              <Users className="w-4 h-4"/> For Pet Owners / Users
            </h3>
            <ul className="list-disc pl-5 text-sm">
              <li>You must provide accurate contact and location details for bookings.</li>
              <li>You are responsible for maintaining pet vaccination and health records where applicable.</li>
              <li>Misuse, harassment, or false complaints against providers may result in account suspension.</li>
            </ul>

            <h3 className="font-semibold text-teal-700 text-sm mt-4 flex items-center gap-1">
              <FileCheck className="w-4 h-4"/> For Providers
            </h3>
            <ul className="list-disc pl-5 text-sm">
              <li>You must keep login credentials secure and confidential.</li>
              <li>You agree not to submit forged, altered, or misleading documents.</li>
              <li>Approved providers must maintain ethical standards and animal safety protocols.</li>
              <li>Verification badges may be revoked if compliance issues are detected later.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">4. Service & Marketplace Rules</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Carevra only acts as a **service marketplace**, not a hospital or permanent care facility.</li>
              <li>Providers deliver services based on bookings, availability, and verified skill category.</li>
              <li>Carevra is not liable for offline agreements or payments made outside the platform.</li>
              <li>Service pricing, time, and execution may vary by provider category and location.</li>
              <li>Any abuse, harm, or negligence toward animals must be reported and may lead to provider removal.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">5. Payments & Refunds</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Payments are processed via secure third-party gateways.</li>
              <li>Refunds, if applicable, depend on provider acceptance and service status.</li>
              <li>Completed services are generally **non-refundable**, unless proven misconduct is verified.</li>
              <li>Carevra does not guarantee refunds for delays caused by weather, traffic, or owner unavailability.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">6. Provider Verification & Conduct</h2>
            <p className="text-sm leading-relaxed mb-2">
              To ensure a proactive and secure ecosystem:
            </p>
            <ul className="list-disc pl-5 text-sm">
              <li>Providers must submit government ID and professional certificates.</li>
              <li>Carevra may conduct background checks using authorized partners.</li>
              <li>Fake submissions lead to **immediate rejection or permanent ban**.</li>
              <li>Harassment, hate speech, illegal activity, or animal cruelty = strict account termination.</li>
              <li>Service quality is monitored through ratings, audits, and user feedback.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">7. Legal & Safety Compliance</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>We comply with Indian IT laws, payment regulations, and animal welfare guidelines.</li>
              <li>User and provider data is logged for fraud prevention and dispute resolution.</li>
              <li>Any attempt to exploit the platform using bots, spam, or cyber attacks is strictly prohibited.</li>
              <li>Carevra may restrict access using rate limiting, monitoring, or automated security systems.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">8. Liability Disclaimer</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Carevra connects pet owners with verified providers, but **does not guarantee medical outcomes**.</li>
              <li>We are not liable for allergic reactions, injuries, or unforeseen health issues during service.</li>
              <li>Emergency medical decisions taken by providers are based on professional judgment.</li>
              <li>Owners must disclose pet health conditions before booking services.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">9. Account Termination</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Carevra may suspend or terminate accounts violating any terms.</li>
              <li>Users filing false legal or harassment complaints may lose access permanently.</li>
              <li>Providers found breaching ethical or safety standards will be removed from the marketplace.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">10. Amendments</h2>
            <p className="text-sm">
              Carevra may update these terms at any time. Continued use after updates means you accept the revised policy.
            </p>
          </section>

          <footer className="text-xs text-gray-500 text-center pt-4">
            Carevra is committed to ethical animal care, verified provider onboarding, and proactive cybersecurity protection.
          </footer>

        </CardContent>
      </Card>
    </main>
  );
}
