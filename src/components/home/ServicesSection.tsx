import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const services = [
  {
    id: "standard",
    title: "Standard Cleaning",
    description:
      "Maintain a consistently clean home with our thorough standard cleaning service. Perfect for busy households that need weekly or bi-weekly maintenance.",
    image: "/images/tempo-image-20250404T203431492Z.png",
    features: [
      "Living Area Refreshing",
      "Kitchen Cleaning",
      "Bathroom Sanitizing",
      "Bedrooms Rejuvenating",
    ],
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    description:
      "A comprehensive cleaning service that reaches every corner of your home. Ideal for seasonal cleaning or before/after special events.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    features: [
      "Everything in standard cleaning",
      "Kitchen Appliance Interiors & Degreasing",
      "Bathroom Deep Disinfecting & Grout Cleaning",
      "Living & Bedroom Detailed Cleaning",
    ],
  },
  {
    id: "move",
    title: "Move In/Out Cleaning",
    description:
      "Start fresh in your new home or leave your old one spotless with our specialized move in/out cleaning services. Removes all trace of previous occupants.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80",
    features: [
      "Deep Cleaning of All Rooms",
      "Inside Cabinets and Drawers",
      "Refrigerator and Oven Cleaning",
      "Window & Blinds Cleaning (Interior Only)",
    ],
  },
  {
    id: "airbnb",
    title: "Airbnb Cleaning",
    description:
      "Keep your rental property spotless and guest-ready with our specialized Airbnb cleaning service. Perfect for hosts looking to maintain 5-star cleanliness ratings.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    features: [
      "Quick Turnaround Between Guests",
      "Flexible Scheduling",
      "Enhanced Guest Satisfaction",
      "Personalized Cleaning Plans",
    ],
  },
  {
    id: "vacation",
    title: "Vacation Rental Cleaning",
    description:
      "Comprehensive cleaning services for vacation properties ensuring your rental is always ready to impress new guests and maintain excellent reviews.",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
    features: [
      "Quick Turnaround Between Guests",
      "Guest-Ready Presentation",
      "Enhanced Sanitzation Protocols",
      "Personalized Cleaning Plans",
    ],
  },
  {
    id: "construction",
    title: "Post-Construction Cleaning",
    description:
      "Transform your newly built or renovated space from a construction site to a clean, livable environment with our specialized post-construction cleaning.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    features: [
      "Thorough Dirt & Dust Removal",
      "Complete Surface Cleaning & Sanitization",
      "Detailed Floor & Window Care",
      "Final Inspection & Pristine Finish Guarantee",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're unwinding after a long day or creating memories with
            family, we make sure your space feels warm, inviting, and
            effortlessly comfortable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden border-border/40 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary mr-2 mt-1"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group" asChild>
                  <Link to={`/services/${service.id}`}>
                    Learn More
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild className="px-10 py-6">
            <Link to="/contact">Get Your Free Estimate</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
