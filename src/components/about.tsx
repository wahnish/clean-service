import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

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
                  "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80')",
                filter: "brightness(0.85)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Family-owned and operated, providing professional cleaning
              services for over 15 years
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Healthy Clean Homes was founded in 2008 by the Johnson family
                  with a simple mission: to provide exceptional cleaning
                  services that promote healthier living environments for
                  families in our community.
                </p>
                <p>
                  What started as a small operation with just two family members
                  has grown into a trusted cleaning service with a team of over
                  20 dedicated professionals. Despite our growth, we've
                  maintained our family values and personal touch in everything
                  we do.
                </p>
                <p>
                  We believe that a clean home is more than just appearance—it's
                  about creating a healthy space where families can thrive.
                  That's why we've invested in eco-friendly cleaning products
                  and advanced techniques that deliver superior results without
                  compromising your family's health or the environment.
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
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to using eco-friendly products and practices
                  that protect both your family's health and our environment for
                  future generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80"
                    alt="John Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">John Johnson</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80"
                    alt="Sarah Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                <p className="text-gray-600">Co-Founder & Operations Manager</p>
              </div>
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80"
                    alt="Emily Rodriguez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Emily Rodriguez</h3>
                <p className="text-gray-600">Customer Relations Manager</p>
              </div>
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80"
                    alt="Michael Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Michael Chen</h3>
                <p className="text-gray-600">Training Specialist</p>
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
      </main>
      <Footer />
    </div>
  );
};

export default About;
