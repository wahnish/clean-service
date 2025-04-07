import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import QuoteRequestForm from "./forms/QuoteRequestForm";

const About = () => {
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
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80')",
                filter: "brightness(0.85)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Family-owned and operated, providing healthy and clean living
              services - from our home to yours
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-400 text-black hover:bg-yellow-500 h-10 px-6 py-2"
            >
              Get Your Free Estimate Now
            </a>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-10 text-center">
              Our Story
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
              <div>
                <img
                  src="/images/tempo-image-20250404T203447676Z.png"
                  alt="Our Cleaning Team"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="py-2">
                  Healthy Clean Homes started with a simple vision—to help
                  families like ours enjoy cleaner, healthier spaces where
                  memories can be made. As a family-owned and operated business,
                  our commitment to excellence and a personal touch guides
                  everything we do. We take pride in providing reliable,
                  meticulous cleaning services to homes throughout our
                  community, treating each one as if it were our own. Every home
                  we serve reminds us why we began this journey: to create
                  comforting spaces that families truly love coming home to.
                  From our family to yours, we're here to make life easier and
                  homes happier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We believe in honesty, transparency, and doing what's right,
                  even when no one is watching. Our reputation is built on trust
                  and reliability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Care</h3>
                <p className="text-gray-600">
                  We treat every home as if it were our own, with attention to
                  detail and genuine care for our clients' well-being and
                  satisfaction.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We set high standards for our work, striving consistently to
                  exceed expectations and deliver exceptional results that speak
                  for themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our family take care of your home. Contact us today for your
              free estimate.
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 hover:text-black transition-colors duration-300 ease-out"
              asChild
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </section>

        {/* Quote Request Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Get Your Free Quote Today
            </h2>
            <div className="max-w-3xl mx-auto">
              <QuoteRequestForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
