import Navbar from "./layout/Navbar";
import HeroSection from "./home/HeroSection";
import ServicesSection from "./home/ServicesSection";
import TestimonialsSection from "./home/TestimonialsSection";
import QuoteRequestForm from "./forms/QuoteRequestForm";
import React from "react";
import Footer from "./layout/Footer";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        {/* About Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-semibold tracking-tight mb-4">
                About Us
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Family-owned and operated, Healthy Clean Homes has been serving
                the local community for over 15 years.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                  alt="Our Team"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  Our Family, Your Home
                </h3>
                <p className="text-muted-foreground">
                  What started as a small family business has grown into one of
                  the most trusted cleaning services in the area. We treat every
                  home we clean as if it were our own, with attention to detail
                  and care that only a family-owned business can provide.
                </p>
                <p className="text-muted-foreground">
                  Our team consists of highly trained professionals who share
                  our values of honesty, reliability, and excellence in
                  everything we do.
                </p>
                <div className="pt-4">
                  <Button asChild>
                    <Link to="/contact">Get Your Free Estimate</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TestimonialsSection />
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
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent hover:bg-white/10 h-10 px-4 py-2"
              >
                Request a Quote
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
                customized quote for your cleaning needs.
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
}

export default Home;
