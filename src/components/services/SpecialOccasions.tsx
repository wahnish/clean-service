import ServiceLayout from "./ServiceLayout";

const SpecialOccasions = () => {
  return (
    <ServiceLayout
      title="Special Occasions Cleaning"
      subtitle="Make your special events shine with our professional cleaning services"
    >
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight mb-6">
                Perfect Cleaning for Your Special Moments
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're hosting a wedding, birthday party, holiday
                gathering, or any special event, our Special Occasions cleaning
                service ensures your home is immaculate and ready to impress
                your guests.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our experienced team pays meticulous attention to every detail,
                focusing on areas that will be most visible and used during your
                event. We understand the importance of these moments and work
                diligently to exceed your expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Pre-Event Cleaning</h3>
                    <p className="text-muted-foreground">
                      Comprehensive cleaning before your special occasion to
                      ensure everything is perfect for your guests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Post-Event Cleanup</h3>
                    <p className="text-muted-foreground">
                      Thorough cleaning after your event so you can relax
                      knowing your home will be restored to pristine condition.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Customized Services</h3>
                    <p className="text-muted-foreground">
                      Tailored cleaning plans based on your specific event needs
                      and requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556035511-3168381ea4d4?w=800&q=80"
                alt="Special Occasions Cleaning"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">
            What's Included in Our Special Occasions Cleaning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4">Before the Event</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Deep cleaning of entertainment areas
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Kitchen sanitization and organization
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Bathroom deep cleaning and restocking
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Floor cleaning and polishing
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Window and glass surface cleaning
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Dusting of all surfaces and decor
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4">
                During the Event (Optional)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Discreet cleaning service during longer events
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Bathroom maintenance and restocking
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Trash removal and replacement
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Spill and mess cleanup
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Dishwashing and kitchen maintenance
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  General tidying of event spaces
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4">After the Event</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Complete cleanup of event spaces
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Trash and recycling removal
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Kitchen deep cleaning
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Bathroom sanitization
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Floor cleaning and vacuuming
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Furniture restoration to original positions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">
            Special Occasions Cleaning Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-primary p-6 text-white text-center">
                <h3 className="text-xl font-medium">Pre-Event Package</h3>
                <p className="text-3xl font-bold mt-2">Starting at $199</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Complete home cleaning
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Focus on entertainment areas
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Kitchen and bathroom deep clean
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 2,500 sq ft home
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="#quote-form"
                    className="block w-full py-2 px-4 bg-primary text-white text-center rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="bg-primary p-6 text-white text-center">
                <h3 className="text-xl font-medium">Complete Package</h3>
                <p className="text-3xl font-bold mt-2">Starting at $349</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Pre-event deep cleaning
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Post-event cleanup
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    All rooms and areas included
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 3,000 sq ft home
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="#quote-form"
                    className="block w-full py-2 px-4 bg-primary text-white text-center rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-primary p-6 text-white text-center">
                <h3 className="text-xl font-medium">Premium Package</h3>
                <p className="text-3xl font-bold mt-2">Starting at $499</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Pre-event deep cleaning
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    During-event cleaning staff
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Post-event complete cleanup
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Larger homes up to 4,000 sq ft
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="#quote-form"
                    className="block w-full py-2 px-4 bg-primary text-white text-center rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-8">
            * Prices may vary based on home size, condition, and specific
            requirements. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">
                How far in advance should I book special occasion cleaning?
              </h3>
              <p className="text-muted-foreground">
                We recommend booking at least 2-3 weeks in advance for special
                occasions, especially during peak seasons (holidays, summer).
                For larger events, booking 1-2 months ahead ensures we can
                accommodate your specific date and time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">
                Can you clean while guests are present?
              </h3>
              <p className="text-muted-foreground">
                Yes, our during-event cleaning service is designed to be
                discreet and unobtrusive. Our staff will wear professional
                attire and maintain bathrooms, handle trash, and address spills
                without disrupting your event.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">
                Do you bring your own cleaning supplies?
              </h3>
              <p className="text-muted-foreground">
                Yes, we bring all necessary professional-grade cleaning supplies
                and equipment. If you have specific products you prefer we use
                due to allergies or preferences, please let us know in advance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">
                How quickly can you clean up after an event?
              </h3>
              <p className="text-muted-foreground">
                Post-event cleanup can typically be scheduled immediately after
                your event or the following morning. The duration depends on the
                size of the space and extent of cleaning needed, but we work
                efficiently to restore your home quickly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default SpecialOccasions;
