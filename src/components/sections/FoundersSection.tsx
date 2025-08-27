import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import bharadProfile from "@/assets/bharad-profile.jpg";
import anandhaProfile from "@/assets/anandhavelu-profile.jpg";
import bessieProfile from "@/assets/bessie-profile.jpg";
import anandanProfile from "@/assets/anandan-profile.jpg";
import adobeLogo from "@/assets/adobe-logo.png";
import wppLogo from "@/assets/wpp-logo.png";
import microsoftLogo from "@/assets/microsoft-research-logo.png";

const founders = [
  {
    name: "BHARAD RAMESH",
    title: "Co-founder & CEO, New York",
    experience: "25 Years",
    background: "Media agency veteran",
    detail: "ex-head of research & investment analytics",
    image: bharadProfile,
    linkedin: "http://www.linkedin.com/in/bharadr"
  },
  {
    name: "ANANDHAVELU NATARAJAN",
    title: "Co-founder & Chief AI Scientist, Bengaluru",
    experience: "30 Patents",
    background: "AI Scientist",
    detail: "Founding member of Adobe Research, India",
    image: anandhaProfile,
    linkedin: "https://www.linkedin.com/in/anandhavelu/",
    companyLogo: adobeLogo
  }
];

const advisors = [
  {
    name: "Bessie Lee",
    title: "Investor/Advisor",
    background: "ex-CEO, WPP China",
    detail: "Martech investor, WithinLink",
    image: bessieProfile,
    companyLogo: wppLogo
  },
  {
    name: "Dr. P. Anandan",
    title: "AI Advisor",
    background: "Distinguished Scientist &",
    detail: "Emeritus Researcher",
    image: anandanProfile,
    companyLogo: microsoftLogo
  }
];

export const FoundersSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Founders */}
        <div className="mb-20">
          <h2 className="text-center text-primary mb-16">The Founders</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <Card 
                key={index}
                className="overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {founder.experience}
                    </Badge>
                    <Badge variant="secondary" className="bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20">
                      {founder.background}
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold text-card-foreground mb-1">
                    {founder.linkedin ? (
                      <a 
                        href={founder.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {founder.name}
                      </a>
                    ) : (
                      founder.name
                    )}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">{founder.title}</p>
                  <p className="text-muted-foreground text-sm">{founder.detail}</p>
                  
                  {founder.companyLogo && (
                    <div className="mt-4 h-8 flex items-center">
                      <img 
                        src={founder.companyLogo} 
                        alt="Company logo"
                        className="h-full max-w-24 object-contain opacity-60"
                      />
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div>
          <h2 className="text-center text-primary mb-16">Advisors</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card 
                key={index}
                className="overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                    {advisor.title}
                  </Badge>
                  
                  <h3 className="font-bold text-card-foreground mb-1">{advisor.name}</h3>
                  <p className="text-muted-foreground text-sm mb-1">{advisor.background}</p>
                  <p className="text-muted-foreground text-sm">{advisor.detail}</p>
                  
                  {advisor.companyLogo && (
                    <div className="mt-4 h-8 flex items-center">
                      <img 
                        src={advisor.companyLogo} 
                        alt="Company logo"
                        className="h-full max-w-32 object-contain opacity-60"
                      />
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};