import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import QuoteRequestForm from "../forms/QuoteRequestForm";

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
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional cleaning services tailored to the unique needs of
              your home
            </p>
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
                },
                {
                  title: "Deep Cleaning",
                  description:
                    "Thorough cleaning that reaches every corner and surface of your home.",
                },
                {
                  title: "Move In/Out Cleaning",
                  description:
                    "Prepare your home for new occupants or ensure you get your deposit back.",
                },
                {
                  title: "Recurring Cleaning",
                  description:
                    "Scheduled cleaning services on a weekly, bi-weekly, or monthly basis.",
                },
                {
                  title: "Airbnb Cleaning",
                  description:
                    "Quick turnaround cleaning for vacation rentals and Airbnb properties.",
                },
                {
                  title: "Post-Construction Cleaning",
                  description:
                    "Remove dust, debris, and construction residue after renovations.",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
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
