import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 hero-gradient">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Card className="p-12 bg-white/10 backdrop-blur-sm border-white/20 shadow-large animate-scale-in">
          <h2 className="text-primary-foreground mb-6">
            Ready to Power Your Marketing Flywheel?
          </h2>

          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Transform your fragmented marketing data into actionable insights.
            Let's discuss how Aqxle can accelerate your marketing initiatives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent-cyan hover:bg-accent-cyan/90 text-primary font-semibold px-8 py-4 rounded-full shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105"
              onClick={() =>
                (window.location.href = "mailto:founders@aqxle.ai")
              }
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Founders
            </Button>

            <div className="text-primary-foreground/80">
              <span className="text-sm">or email us directly at</span>
              <br />
              <a
                href="mailto:founders@aqxle.ai"
                className="text-accent-cyan hover:text-accent-cyan/80 font-medium transition-colors duration-200"
              >
                founders@aqxle.ai
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
