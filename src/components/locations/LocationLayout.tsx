import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import QuoteRequestForm from "../forms/QuoteRequestForm";
import { Link } from "react-router-dom";

interface LocationLayoutProps {
  title: string;
  description: React.ReactNode;
  imageUrl: string;
}

const LocationLayout: React.FC<LocationLayoutProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative text-white">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-${
                  title.includes("Waxhaw")
                    ? "1627483297929-0fbcf4d25454"
                    : title.includes("Westley Chapel")
                      ? "1627483297929-0fbcf4d25454"
                      : title.includes("Weddington")
                        ? "1627483297929-0fbcf4d25454"
                        : title.includes("Marvin")
                          ? "1627483297929-0fbcf4d25454"
                          : title.includes("Ballantyne")
                            ? "1627483297929-0fbcf4d25454"
                            : title.includes("Monroe")
                              ? "1627483297929-0fbcf4d25454"
                              : title.includes("White Oaks")
                                ? "1627483297929-0fbcf4d25454"
                                : title.includes("Indian Trail")
                                  ? "1627483297929-0fbcf4d25454"
                                  : title.includes("Stallings")
                                    ? "1627483297929-0fbcf4d25454"
                                    : "1627483297929-0fbcf4d25454"
                }?w=1200&q=80')`,
                filter: "brightness(0.85)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Professional cleaning services tailored to the unique needs of
              your home
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-400 text-black hover:bg-yellow-500 h-10 px-6 py-2"
            >
              Get Your Free Estimate Now
            </Link>
          </div>
        </section>

        {/* Location Description Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight mb-6">
                  Serving {title.split("In ")[1].split(", NC")[0]} With Pride
                </h2>
                {description}
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={imageUrl}
                  alt={`Cleaning services in ${title.split("In ")[1].split(", NC")[0]}`}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services We Offer Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">
              Our Cleaning Services in {title.split("In ")[1].split(", NC")[0]}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Standard Cleaning",
                  description:
                    "Regular maintenance cleaning to keep your home fresh and tidy.",
                  image: "/images/tempo-image-20250401T154534507Z.png",
                },
                {
                  title: "Deep Cleaning",
                  description:
                    "Thorough cleaning that reaches every corner and surface of your home.",
                  image:
                    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
                },
                {
                  title: "Move In/Out Cleaning",
                  description:
                    "Prepare your home for new occupants or ensure you get your deposit back.",
                  image:
                    "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80",
                },
                {
                  title: "Recurring Cleaning",
                  description:
                    "Scheduled cleaning services on a weekly, bi-weekly, or monthly basis.",
                  image: "/images/tempo-image-20250401T205935432Z.png",
                },
                {
                  title: "Airbnb Cleaning",
                  description:
                    "Quick turnaround cleaning for vacation rentals and Airbnb properties.",
                  image:
                    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
                },
                {
                  title: "Post-Construction Cleaning",
                  description:
                    "Remove dust, debris, and construction residue after renovations.",
                  image:
                    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="mb-4 h-40 overflow-hidden rounded-md">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to schedule your cleaning service or request a
              free estimate.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:5551234567"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 h-10 px-4 py-2"
              >
                Call Us Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent hover:bg-white/10 h-10 px-4 py-2"
              >
                Request a Free Estimate
              </a>
            </div>
          </div>
        </section>
        {/* Quote Request Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold tracking-tight mb-4">
                Get Your Free Quote Today
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you with a
                customized quote for your cleaning needs in{" "}
                {title.split("In ")[1].split(", NC")[0]}.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <QuoteRequestForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LocationLayout;
