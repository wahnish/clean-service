import Navbar from "./layout/Navbar";
import HeroSection from "./home/HeroSection";
import ServicesSection from "./home/ServicesSection";
import TestimonialsSection from "./home/TestimonialsSection";
import QuoteRequestForm from "./forms/QuoteRequestForm";
import React from "react";
import Footer from "./layout/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        {/* Quote Request Section */}
        <section className="py-16 bg-white">
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
        {/* Call to Action Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              Ready for a Cleaner, Healthier Home?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust Healthy Clean Homes
              for their cleaning needs.
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
}

export default Home;
