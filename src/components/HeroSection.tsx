import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-16 pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                HIPAA Compliant Healthcare Automation
              </span>
            </div>
            
            <h1 className="text-headline bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-6">
              Supercharge Your Practice With AI Automation
            </h1>
            
            <p className="text-subheadline mb-8">
              Saizure Solutions builds HIPAA-compliant voice agents and backend automations 
              so you can focus on patient care.
            </p>

            {/* Key benefits */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">24/7 AI Receptionist</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Instant Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">HIPAA Compliant</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.open("https://calendly.com/saizure-solutions", "_blank")}
              >
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>

            {/* Tagline */}
            <p className="text-sm text-muted-foreground mt-6 italic">
              "Automating Healthcare, One Workflow at a Time"
            </p>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl transform rotate-6" />
              <img
                src={heroImage}
                alt="Healthcare automation dashboard showing AI voice assistant technology"
                className="relative w-full h-auto rounded-3xl shadow-[var(--shadow-hero)] object-cover"
              />
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}