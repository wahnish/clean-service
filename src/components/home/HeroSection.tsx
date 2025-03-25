import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import QuoteRequestForm from "../forms/QuoteRequestForm";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-50 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=1200&q=80')",
            filter: "brightness(0.85)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Professional Home Cleaning Services You Can Trust
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Experience the joy of coming home to a perfectly clean house
              without lifting a finger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                asChild
              >
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
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
                    className="text-white"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="font-medium">100% Satisfaction</span>
              </div>

              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
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
                    className="text-white"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <span className="font-medium">Reliable Service</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
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
                    className="text-white"
                  >
                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                  </svg>
                </div>
                <span className="font-medium">Eco-Friendly</span>
              </div>
            </div>

            {/* Google Guarantee Badge */}
            <div className="mt-8 flex items-center">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80"
                alt="Google Guaranteed"
                className="h-16 mr-4 bg-white p-1 rounded"
              />
              <span className="text-sm text-white/90">
                Professionals that are licensed, pre-screened, and insured.
              </span>
            </div>
          </div>
          {/* Quote Request Form */}
          <div className="hidden lg:block">
            <QuoteRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
