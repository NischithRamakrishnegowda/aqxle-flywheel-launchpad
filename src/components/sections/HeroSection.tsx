import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Data analytics visualization background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Aqxle Logo */}
        <div className="mb-8 animate-fade-up">
          <div className="text-8xl md:text-9xl font-black tracking-wider text-primary-foreground mb-4">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">a</span>
            <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-75">q</span>
            <span className="inline-block text-accent-cyan transform hover:scale-105 transition-transform duration-300 delay-150">x</span>
            <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-225">l</span>
            <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-300">e</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-8 animate-fade-up delay-300">
          Powering the
          <br />
          <span className="bg-gradient-to-r from-accent-cyan to-primary-foreground bg-clip-text text-transparent">
            Marketing Flywheel
          </span>
        </h1>

        {/* ERA Badge */}
        <div className="inline-flex items-center gap-3 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-12 animate-fade-up delay-500">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">e</span>
          </div>
          <span className="text-primary-foreground font-medium">
            Entrepreneurs Roundtable Accelerator
          </span>
        </div>

        {/* Value Proposition */}
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-up delay-700">
          Our platform aggregates, analyzes and surfaces patterns from fragmented marketing data to enable marketers to make critical real-time decisions.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up delay-1000">
          <Button 
            size="lg" 
            className="bg-accent-cyan hover:bg-accent-cyan/90 text-primary font-semibold px-8 py-4 text-lg rounded-full shadow-large hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};