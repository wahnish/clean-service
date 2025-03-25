import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const TermsAndConditions = () => {
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
            <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
            <p className="text-gray-500 mb-8">Last Updated: {currentDate}</p>

            <div className="prose prose-lg max-w-none">
              <p>
                Welcome to <strong>Healthy Clean Homes</strong>. These Terms and
                Conditions ("Terms") outline the rules and guidelines for using
                our services and website. By booking a service with us or using
                our website, you agree to be bound by these Terms.
              </p>
              <p>
                If you do not agree to any part of these Terms, please refrain
                from using our services or accessing our website.
              </p>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                1. Services Provided
              </h2>
              <p>
                Healthy Clean Homes offers professional residential and
                commercial cleaning services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>Standard Cleaning</li>
                <li>Deep Cleaning</li>
                <li>Move-In/Move-Out Cleaning</li>
                <li>Recurring Cleaning</li>
                <li>Vacation Rental Cleaning</li>
                <li>One-Time Cleaning</li>
                <li>Post-Construction Cleaning</li>
              </ul>
              <p>
                Our services are available in Waxhaw, NC, and surrounding areas,
                including Westley Chapel, Weddington, Marvin, Ballentyne,
                Monroe, White Oaks, Indian Trail, Stallings, and Matthews.
              </p>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                2. Booking and Scheduling
              </h2>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Booking
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  Bookings can be made through our website, by phone, or by
                  email.
                </li>
                <li>All bookings are subject to availability.</li>
                <li>
                  We reserve the right to refuse any booking at our discretion.
                </li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Rescheduling and
                Cancellations
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  You may reschedule or cancel a booking up to{" "}
                  <strong>24 hours</strong> before the scheduled appointment
                  without penalty.
                </li>
                <li>
                  Cancellations made less than <strong>24 hours</strong> before
                  the scheduled appointment may incur a cancellation fee of{" "}
                  <strong>$50</strong>.
                </li>
                <li>
                  If our team arrives at the scheduled location and is unable to
                  access the property, a cancellation fee may also apply.
                </li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Late Arrivals
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  We aim to arrive at the scheduled time, but unforeseen
                  circumstances such as traffic or weather conditions may cause
                  delays.
                </li>
                <li>If we anticipate a delay, we will notify you promptly.</li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                3. Payment Terms
              </h2>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Pricing and
                Estimates
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  All pricing is based on the size of the property and the scope
                  of services requested.
                </li>
                <li>
                  The price quoted during booking is an estimate and may be
                  adjusted based on the actual condition of the property or any
                  additional services requested.
                </li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Payment Methods
              </h3>
              <p>We accept the following payment methods:</p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>Credit Card (Visa, Mastercard, American Express)</li>
                <li>Debit Card</li>
                <li>ACH Transfer</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Payment Due Date
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  Payment is due at the time of service unless other
                  arrangements have been made.
                </li>
                <li>
                  If payment is not received within <strong>7 days</strong> of
                  the service date, a late fee of <strong>$25</strong> may
                  apply.
                </li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                4. Satisfaction Guarantee
              </h2>
              <p>
                We take pride in our work and aim to provide the highest quality
                service.
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  If you are not satisfied with the cleaning service provided,
                  you must notify us within <strong>24 hours</strong> of the
                  service date.
                </li>
                <li>
                  We will return to address the issue at no additional cost.
                </li>
                <li>
                  Our guarantee does not cover issues related to pre-existing
                  damage, permanent stains, or structural issues beyond our
                  control.
                </li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                5. Access to Property
              </h2>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Key and Entry
                Instructions
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  You must provide access to the property at the scheduled time.
                </li>
                <li>
                  If a key or code is required for entry, please provide this
                  information before the scheduled appointment.
                </li>
                <li>
                  If we cannot access the property at the scheduled time, a
                  lockout fee of <strong>$50</strong> may apply.
                </li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Security and
                Privacy
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>Our team is fully vetted and background-checked.</li>
                <li>
                  We respect your privacy and will handle your personal
                  information with care and confidentiality.
                </li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                6. Liability and Limitations
              </h2>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Property Damage
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>We take great care to avoid damage while cleaning.</li>
                <li>
                  In the rare event that damage occurs, you must notify us
                  within <strong>24 hours</strong> of the service date.
                </li>
                <li>
                  Our liability for any damage is limited to the cost of repair
                  or replacement, up to a maximum of <strong>$1,000</strong>.
                </li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Health and
                Safety
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  We are not responsible for any pre-existing health issues,
                  mold, structural damage, or hazardous conditions present in
                  the home.
                </li>
                <li>
                  If we encounter unsafe conditions during the service (e.g.,
                  biohazards, pests), we reserve the right to refuse or
                  terminate the service without refund.
                </li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                7. Pets and Personal Belongings
              </h2>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Pets
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  We love pets! However, for the safety of our team and your
                  pets, we ask that pets be secured in a safe area during
                  cleaning.
                </li>
                <li>
                  We are not responsible for any issues related to unsecured
                  pets during a service appointment.
                </li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3 flex items-center">
                <span className="text-green-500 mr-2">✅</span> Personal Items
              </h3>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  Please store valuables and fragile items securely before our
                  team arrives.
                </li>
                <li>
                  We are not responsible for the loss or damage of personal
                  items left in the home.
                </li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                8. No-Show Policy
              </h2>
              <p>
                If our team arrives at your property and is unable to perform
                the service due to:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>Inability to access the property</li>
                <li>Unsafe or hazardous conditions</li>
                <li>Absence of necessary supplies or instructions</li>
              </ul>
              <p>
                You may be charged a <strong>no-show fee</strong> equivalent to{" "}
                <strong>50%</strong> of the scheduled service rate.
              </p>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                9. Cancellations by Healthy Clean Homes
              </h2>
              <p>
                We reserve the right to cancel or reschedule a service due to:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>Inclement weather</li>
                <li>Staff shortages</li>
                <li>Equipment failure</li>
                <li>Any other circumstances beyond our control</li>
              </ul>
              <p>
                If we cancel a service, you will be notified as soon as
                possible, and any prepaid fees will be credited toward a future
                appointment or refunded.
              </p>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                10. Termination of Services
              </h2>
              <p>
                We reserve the right to terminate services at any time for the
                following reasons:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>Non-payment of fees</li>
                <li>Unsafe or unsanitary conditions</li>
                <li>Threatening or inappropriate behavior toward staff</li>
                <li>Violation of these Terms and Conditions</li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                11. Website Use
              </h2>
              <p>By using our website, you agree to the following terms:</p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  All content on the website is the property of Healthy Clean
                  Homes.
                </li>
                <li>
                  You may not reproduce, distribute, or modify any part of the
                  website without our written consent.
                </li>
                <li>
                  We reserve the right to modify or remove website content at
                  any time without notice.
                </li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                12. Changes to Terms and Conditions
              </h2>
              <p>
                We reserve the right to update or modify these Terms at any
                time.
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  If changes are made, the updated Terms will be posted on our
                  website.
                </li>
                <li>
                  Continued use of our services after changes have been posted
                  constitutes acceptance of the revised Terms.
                </li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                13. Governing Law
              </h2>
              <p>
                These Terms are governed by and interpreted in accordance with
                the laws of the State of <strong>North Carolina</strong>.
              </p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>
                  Any disputes arising from these Terms will be resolved in the
                  courts of <strong>Union County, North Carolina</strong>.
                </li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                14. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms and Conditions, you
                can contact us:
              </p>
              <p className="my-4">
                📍 123 Cleaning Street, Seattle, WA 98101
                <br />
                📞 555-123-4567
                <br />
                ✉️ support@healthycleanhomes.com
              </p>

              <hr className="my-8" />

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Acceptance of Terms
              </h2>
              <p>
                By booking a service with Healthy Clean Homes or using our
                website, you agree to these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
