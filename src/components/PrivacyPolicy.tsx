import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="pt-24 flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last Updated: {currentDate}</p>

            <div className="prose prose-lg max-w-none">
              <p>
                <strong>Healthy Clean Homes</strong> ("we," "us," or "our") is
                committed to protecting your privacy and safeguarding your
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and protect your personal data when you
                visit our website or use our cleaning services.
              </p>
              <p>
                By accessing our website or booking a service with us, you
                consent to the terms outlined in this Privacy Policy.
              </p>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p>We collect the following types of personal information:</p>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Information You
                Provide Directly
              </h3>
              <p>
                When you book a service, contact us, or fill out a form on our
                website, we may collect:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Home address</li>
                <li>
                  Payment information (processed securely through a third-party
                  processor)
                </li>
                <li>
                  Any additional information you provide in communications with
                  us
                </li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Information
                Collected Automatically
              </h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on the site</li>
                <li>Referring website</li>
                <li>Device information (desktop, mobile, tablet)</li>
                <li>Cookies and tracking data (see Section 6)</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Sensitive
                Information
              </h3>
              <p>
                We do <strong>NOT</strong> collect sensitive information such as
                race, ethnicity, religious beliefs, health information, or
                government-issued identification unless required by law or
                consented to by you directly.
              </p>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                2. How We Use Your Information
              </h2>
              <p>
                We use your personal information for the following purposes:
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-primary mr-2">🏡</span> To Provide
                Cleaning Services
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>Process bookings and payments</li>
                <li>Manage scheduling and communication</li>
                <li>Perform customer service and support</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-primary mr-2">🌐</span> To Improve Our
                Website and Services
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>Analyze website usage and improve user experience</li>
                <li>Monitor the performance of our website</li>
                <li>
                  Customize content and marketing efforts based on user behavior
                </li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-primary mr-2">📩</span> To Communicate
                With You
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>Respond to inquiries and service requests</li>
                <li>
                  Send confirmations, appointment reminders, and follow-ups
                </li>
                <li>
                  Send promotional offers and service updates (if you opt-in)
                </li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-primary mr-2">🛡️</span> To Ensure Security
                and Prevent Fraud
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  Verify identity for service scheduling and payment processing
                </li>
                <li>
                  Detect and prevent fraudulent activity or security breaches
                </li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> To Comply with
                Legal Obligations
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>Maintain business and financial records</li>
                <li>Fulfill tax, regulatory, and legal requirements</li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                3. How We Share Your Information
              </h2>
              <p>
                We do <strong>NOT</strong> sell or rent your personal
                information. However, we may share your data with trusted third
                parties under the following circumstances:
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> With Service
                Providers
              </h3>
              <p>
                We may share your information with third-party companies that
                provide services on our behalf, such as:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>Payment processors</li>
                <li>Scheduling and booking software providers</li>
                <li>Email and SMS communication platforms</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> With Legal and
                Regulatory Authorities
              </h3>
              <p>
                We may disclose information if required by law or if necessary
                to protect our rights or comply with legal proceedings.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> With Business
                Partners
              </h3>
              <p>
                We may share data with business partners to improve customer
                service or offer joint services (e.g., home maintenance or
                repair services).
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> In the Event of
                a Business Transfer
              </h3>
              <p>
                If Healthy Clean Homes is involved in a merger, acquisition, or
                sale of assets, your information may be transferred as part of
                that transaction.
              </p>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                4. Data Retention
              </h2>
              <p>
                We retain your personal information only as long as necessary to
                fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  <strong>Service-related data</strong> – Retained for up to{" "}
                  <strong>7 years</strong> for tax and business purposes.
                </li>
                <li>
                  <strong>Marketing data</strong> – Retained until you opt out
                  or request deletion.
                </li>
                <li>
                  <strong>Account-related data</strong> – Retained as long as
                  your account is active or until you request deletion.
                </li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                5. Your Rights
              </h2>
              <p>
                You have the following rights concerning your personal data:
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Access and
                Correction
              </h3>
              <p>
                You have the right to access the personal information we hold
                about you and request corrections if it is inaccurate or
                incomplete.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Deletion
              </h3>
              <p>
                You can request that we delete your personal information unless
                we are legally required to retain it.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Opt-Out of
                Marketing
              </h3>
              <p>
                You can unsubscribe from marketing emails and texts at any time
                by following the opt-out instructions in the message or
                contacting us directly.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Data Portability
              </h3>
              <p>
                You can request a copy of the personal data we hold about you in
                a portable format.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Restriction of
                Processing
              </h3>
              <p>
                You can request that we limit how we use your personal
                information under certain circumstances (e.g., if you contest
                its accuracy).
              </p>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                6. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to improve your
                experience and collect usage data.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-primary mr-2">🍪</span> Types of Cookies
                We Use:
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  <strong>Essential Cookies</strong> – Necessary for website
                  functionality.
                </li>
                <li>
                  <strong>Performance Cookies</strong> – Track website usage and
                  improve performance.
                </li>
                <li>
                  <strong>Functional Cookies</strong> – Remember user
                  preferences and enhance the user experience.
                </li>
                <li>
                  <strong>Marketing Cookies</strong> – Deliver targeted ads and
                  measure ad effectiveness.
                </li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Managing Cookies
              </h3>
              <p>
                You can manage your cookie preferences through your browser
                settings.
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  Most browsers allow you to refuse cookies or alert you when a
                  cookie is being sent.
                </li>
                <li>
                  If you disable cookies, some website functions may not work
                  properly.
                </li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                7. Data Security
              </h2>
              <p>
                We take reasonable steps to protect your personal information
                from unauthorized access, loss, misuse, or alteration.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-primary mr-2">🛡️</span> Our Security
                Measures Include:
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>Secure socket layer (SSL) encryption on our website</li>
                <li>
                  Secure payment processing through a PCI-compliant third-party
                  provider
                </li>
                <li>Restricted access to personal information among staff</li>
                <li>Regular security audits and updates</li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                8. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites or
                services.
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  We are not responsible for the privacy practices or content of
                  third-party sites.
                </li>
                <li>
                  Please review the privacy policies of external websites before
                  providing personal data.
                </li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                9. Children's Privacy
              </h2>
              <p>
                Our services are not intended for individuals under the age of{" "}
                <strong>18</strong>.
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  We do not knowingly collect or store personal information from
                  minors.
                </li>
                <li>
                  If we become aware that a minor's data has been collected, we
                  will delete it immediately.
                </li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                10. International Data Transfers
              </h2>
              <p>
                We operate in the <strong>United States</strong>. If you access
                our website from outside the U.S., your information may be
                transferred to and processed in the U.S., which may have
                different data protection laws than your country.
              </p>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                11. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically to reflect
                changes in our business practices or legal requirements.
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  The updated version will be posted on our website with a
                  revised "Last Updated" date.
                </li>
                <li>
                  Continued use of our services after updates are posted
                  constitutes acceptance of the changes.
                </li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                12. Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or how we handle your data, please contact us:
              </p>
              <p className="my-4">
                📍 <strong>Healthy Clean Homes</strong>
                <br />
                123 Cleaning Street, Seattle, WA 98101
                <br />
                📞 555-123-4567
                <br />
                ✉️ support@healthycleanhomes.com
              </p>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Acceptance of Policy
              </h2>
              <p>
                By booking a service with Healthy Clean Homes or using our
                website, you consent to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
