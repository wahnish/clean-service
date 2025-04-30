import { Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    location: "Waxhaw, NC",
    rating: 5,
    text: "I've been using Healthy Clean Homes, and I couldn't be happier with their service. My home always looks and smells amazing after they're done!",
    image: "/images/client-1.jpg",
  },
  {
    id: 2,
    name: "Michelle R.",
    location: "Wesley Chapel, NC",
    rating: 5,
    text: "The attention to detail is incredible. They clean areas I wouldn't even think of, and they're always on time and professional.",
    image: "/images/client-2.jpg",
  },
  {
    id: 3,
    name: "Mark C.",
    location: "Weddington, NC",
    rating: 5,
    text: "I'm a single parent, so having Healthy Clean Homes take care of my home has been a game-changer. Worth every penny!",
    image: "/images/client-3.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our cleaning services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-border/40">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>
                <p className="mb-6 italic text-gray-700">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-sm">
            <span className="text-primary font-semibold mr-2">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
            <span className="ml-2 text-gray-600">review average</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
