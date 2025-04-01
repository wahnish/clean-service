import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import QuoteRequestForm from "./forms/QuoteRequestForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative text-white">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80')",
                filter: "brightness(0.85)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Got Questions? We've Got Answers.
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              We know that inviting someone into your home requires trust.
              That's why we want to make sure you feel confident and comfortable
              before booking a cleaning service.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-400 text-black hover:bg-yellow-500 h-10 px-6 py-2"
            >
              Get Your Free Estimate Now
            </a>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-center text-gray-600">
              Here are answers to some of the most common questions we receive:
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            {/* Scheduling and Availability */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="text-primary mr-2">📅</span> Scheduling and
                Availability
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    How soon can I schedule a cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We aim to schedule cleanings within{" "}
                    <strong>48 hours</strong> of your request, depending on
                    availability. For recurring customers, we offer priority
                    scheduling to make sure your home stays consistently clean.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Do I need to be home during the cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    No. You're welcome to stay if you prefer, but most of our
                    customers trust us to clean while they're away. Our team is
                    fully vetted, insured, and professional. If you won't be
                    home, we can coordinate entry instructions with you.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    How do I book a cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>Booking is easy! You can schedule a cleaning by:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>
                        Calling us directly at <strong>555-123-4567</strong>
                      </li>
                      <li>
                        Filling out the <strong>Request an Estimate</strong>{" "}
                        form on our website
                      </li>
                      <li>
                        Sending us an email at{" "}
                        <strong>info@healthycleanhomes.com</strong>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Can I reschedule or cancel a cleaning appointment?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, we understand that life happens! If you need to
                    reschedule or cancel, we ask for at least{" "}
                    <strong>24 hours' notice</strong> to avoid a cancellation
                    fee.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Cleaning Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="text-primary mr-2">🛁</span> Cleaning Services
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    What's included in a standard cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      Our <strong>Standard Cleaning</strong> includes:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Dusting and wiping down surfaces</li>
                      <li>Vacuuming and mopping floors</li>
                      <li>
                        Cleaning bathrooms (toilets, tubs, sinks, and showers)
                      </li>
                      <li>Kitchen cleaning (counters, sinks, appliances)</li>
                      <li>Tidying and light organizing</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    How is deep cleaning different from standard cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      A <strong>Deep Cleaning</strong> includes everything in a
                      standard clean PLUS:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Cleaning inside, behind, and under appliances</li>
                      <li>Scrubbing grout and tile</li>
                      <li>
                        Cleaning baseboards, ceiling fans, and light fixtures
                      </li>
                      <li>Deep-cleaning inside cabinets and drawers</li>
                      <li>Removing hard water stains and soap scum</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Do you offer specialized cleaning for move-ins and
                    move-outs?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! Our <strong>Move-In/Move-Out Cleaning</strong> ensures
                    your home is spotless before you move in or after you move
                    out. We clean appliances, floors, and cabinets, and make
                    sure the home is ready for its next chapter.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Do you provide cleaning for Airbnb and vacation rentals?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Absolutely. We specialize in quick-turnaround cleanings for{" "}
                    <strong>short-term rentals</strong>. Our team will reset the
                    space, change linens, and make sure everything is
                    guest-ready for the next booking.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    What if my home hasn't been cleaned in a while?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    No problem! We recommend starting with a{" "}
                    <strong>Deep Cleaning</strong> to get your home back to a
                    baseline level of cleanliness. After that, you can switch to
                    a standard or recurring cleaning plan to maintain it.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Do you clean offices or commercial spaces?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! While we primarily focus on residential cleaning, we
                    also offer light commercial cleaning services for small
                    offices and workspaces.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Products and Safety */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="text-primary mr-2">🌿</span> Products and
                Safety
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Are your cleaning products safe for pets and children?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Absolutely. Our products are non-toxic and safe for all
                    members of the family, including children and pets.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Can I provide my own specialized cleaning products for you
                    to use?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Absolutely! If you have specific or specialized cleaning
                    products you prefer, we’re happy to use them during your
                    cleaning service. Just let us know in advance, and we'll
                    gladly accommodate your request.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Do you bring your own cleaning supplies and equipment?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes. Our team arrives fully equipped with all necessary
                    supplies and equipment, including vacuums, mops, and
                    cleaning products.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Can I request specific cleaning products or avoid certain
                    chemicals?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Of course! Just let us know your preferences when you book,
                    and we'll tailor our cleaning plan to fit your needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Trust and Security */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="text-primary mr-2">🛡️</span> Trust and Security
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-15">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Are your cleaners insured and background-checked?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes. All of our cleaners are professionally trained,
                    background-checked, and fully insured for your peace of
                    mind.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-16">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    How do I know I can trust your team in my home?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We're a <strong>family-owned business</strong> that takes
                    pride in building long-term relationships with our clients.
                    Our team is carefully selected, and we only hire
                    professionals who share our commitment to care, respect, and
                    integrity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-17">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    What happens if something is damaged during the cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Although it's rare, accidents can happen. If something is
                    damaged, we'll take full responsibility and work with you to
                    make it right.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Payment and Billing */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="text-primary mr-2">💳</span> Payment and
                Billing
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-18">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    How do I pay for my cleaning service?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We accept all major credit cards, debit cards, and ACH
                    transfers. Payment is due at the time of service unless
                    other arrangements have been made.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-19">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Do you offer discounts for recurring services?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! We offer discounts for customers who schedule{" "}
                    <strong>weekly, bi-weekly, or monthly cleanings</strong>.
                    Contact us for more details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-20">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Is tipping required?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Tipping is not required but always appreciated! If you'd
                    like to show extra gratitude for your cleaner's hard work,
                    cash or Venmo tips are welcome.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-21">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Are there any hidden fees?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    No. We believe in transparent pricing. Your estimate will
                    clearly outline all costs—there are no surprises.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Other Questions */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="text-primary mr-2">🔄</span> Other Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-22">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    What if I'm not happy with the cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Your satisfaction is 100% guaranteed. If you're not happy,
                    contact us within <strong>24 hours</strong> and we'll make
                    it right at no additional cost.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-23">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    How long does a typical cleaning take?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>Standard Cleaning:</strong> 1.5 – 3 hours
                        (depending on home size)
                      </li>
                      <li>
                        <strong>Deep Cleaning:</strong> 3 – 5 hours (depending
                        on home size and condition)
                      </li>
                      <li>
                        <strong>Move-In/Move-Out Cleaning:</strong> 3 – 6 hours
                        (depending on home size and scope)
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-24">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Can I request the same cleaner each time?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! If you prefer a specific cleaner, let us know—we'll do
                    our best to accommodate you based on availability.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Don't See Your Question */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Don't See Your Question Here?
              </h2>
              <p className="text-gray-600 mb-4">
                We're happy to answer any additional questions you have. Just
                reach out to us directly and we'll take care of the rest.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p className="text-gray-700 font-medium">
                  <span className="text-primary mr-2">👉</span> 555-123-4567 |
                  info@healthycleanhomes.com
                </p>
                <Link
                  to="/contact"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md transition-colors duration-300 ease-out"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Request Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Ready to Experience a Cleaner Home?
              </h2>
              <QuoteRequestForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
