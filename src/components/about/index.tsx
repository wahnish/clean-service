import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { MapPin, Award, Heart, Shield, Users, Clock } from "lucide-react";
import QuoteRequestForm from "../forms/QuoteRequestForm";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Healthy Clean Homes
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're dedicated to providing exceptional cleaning services that
              create healthier living environments for families across the
              region.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded in 2010, Healthy Clean Homes began with a simple
                  mission: to provide families with cleaning services that go
                  beyond appearance to create truly healthy living environments.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  What started as a small family business has grown into a
                  trusted cleaning service provider across multiple locations,
                  but our commitment to personalized service and attention to
                  detail remains unchanged.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe that a clean home is a healthy home, and we're
                  passionate about contributing to the wellbeing of the families
                  we serve through our professional cleaning services.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/tempo-image-20250401T173153929Z.png"
                  alt="Our cleaning team"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <Heart size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Care & Compassion
                </h3>
                <p className="text-muted-foreground">
                  We treat every home as if it were our own, with care and
                  attention to detail that reflects our commitment to
                  excellence.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Trust & Reliability
                </h3>
                <p className="text-muted-foreground">
                  Our clients trust us with their homes and belongings, and we
                  honor that trust with reliable, consistent service.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Quality & Excellence
                </h3>
                <p className="text-muted-foreground">
                  We're committed to delivering exceptional results with every
                  cleaning, using premium products and proven techniques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">
              Our Team
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Our professional team"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Professional & Experienced
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Our team consists of trained professionals who are passionate
                  about cleaning and committed to delivering exceptional
                  service.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Each team member undergoes thorough background checks and
                  extensive training to ensure they meet our high standards of
                  quality and professionalism.
                </p>
                <div className="flex items-center mt-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dedicated Teams</h4>
                    <p className="text-muted-foreground">
                      Consistent teams assigned to your home
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Punctual Service</h4>
                    <p className="text-muted-foreground">
                      We respect your time and schedule
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              Our Service Area
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We proudly serve homes and businesses throughout these
              communities:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                "Waxhaw, NC",
                "Wesley Chapel, NC",
                "Weddington, NC",
                "Marvin, NC",
                "Ballantyne, NC",
                "Monroe, NC",
                "White Oaks, NC",
                "Indian Trail, NC",
                "Stallings, NC",
                "Matthews, NC",
              ].map((location) => (
                <div
                  key={location}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md"
                >
                  <MapPin size={18} className="text-primary mr-2" />
                  <span>{location}</span>
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
              free quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:5551234567"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 h-10 px-4 py-2"
              >
                Call Us Now
              </a>
              <a
                href="/quote"
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
};

export default About;
