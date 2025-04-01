import { ReactNode } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import QuoteRequestForm from "../forms/QuoteRequestForm";
import { Button } from "../ui/button";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  heroImage?: string;
}

const ServiceLayout = ({
  title,
  subtitle,
  children,
  heroImage = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
}: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          className="py-32 bg-primary text-white relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">{subtitle}</p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-6"
              asChild
            >
              <a href="#quote-form">Get Your Free Estimate Now</a>
            </Button>
          </div>
        </section>

        {children}

        {/* Quote Request Section */}
        <section className="py-16 bg-white" id="quote-form">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold tracking-tight mb-4">
                Get Your Free Quote Today
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you with a
                customized quote for your cleaning needs.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <QuoteRequestForm />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              Ready for a Cleaner, Healthier Home?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our professional cleaning team is ready to provide you with
              exceptional cleaning services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:5551234567"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 h-10 px-4 py-2"
              >
                Call Us Now
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent hover:bg-white/10 h-10 px-4 py-2"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceLayout;
