import { Card } from "@/components/ui/card";
import unileverLogo from "@/assets/unilever-logo.png";
import lenovoLogo from "@/assets/lenovo-logo.png";

const testimonials = [
  {
    quote: "We cut a month from new product development process",
    author: "Soundar K",
    title: "Global Head of CMI, Fabric Care",
    company: "Unilever",
    logo: unileverLogo
  },
  {
    quote: "Aqxle's integral to our change management initiatives",
    author: "Ajit S",
    title: "President & Global Head of DTC",
    company: "Lenovo",
    logo: lenovoLogo
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leading global companies rely on Aqxle to accelerate their marketing initiatives and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col h-full">
                {/* Company Logo */}
                <div className="mb-6 h-12 flex items-center">
                  <img 
                    src={testimonial.logo} 
                    alt={`${testimonial.company} logo`}
                    className="h-full max-w-32 object-contain"
                  />
                </div>

                {/* Quote */}
                <blockquote className="text-xl font-medium text-card-foreground mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};