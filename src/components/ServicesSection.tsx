import { Mic, CreditCard, Workflow, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const services = [
    {
      icon: Mic,
      title: "AI Voice Receptionist",
      subtitle: "24/7 Availability",
      features: [
        "Answers patient calls instantly, around the clock",
        "Schedules and confirms appointments",
        "Speaks multiple languages",
        "Handles FAQs and patient triage"
      ],
      highlight: "Never miss a call again"
    },
    {
      icon: CreditCard,
      title: "Insurance & Billing Automation",
      subtitle: "Revenue Cycle Optimization",
      features: [
        "Claims submission & tracking",
        "Insurance verification workflows", 
        "Revenue cycle optimization",
        "Denial management and appeals"
      ],
      highlight: "Reduce billing errors by 90%"
    },
    {
      icon: Workflow,
      title: "Custom Workflow Automations",
      subtitle: "Seamless Integration",
      features: [
        "Patient intake digitization",
        "EHR integration (via API or direct upload)",
        "Automated appointment reminders",
        "Follow-up and onboarding sequences"
      ],
      highlight: "Save 20+ hours per week"
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-4">Our Healthcare Automation Services</h2>
          <p className="text-subheadline max-w-3xl mx-auto">
            Complete HIPAA-compliant solutions designed to streamline your practice operations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-healthcare group hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Highlight */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 mb-6">
                <p className="text-primary font-semibold text-center">
                  {service.highlight}
                </p>
              </div>

              {/* CTA Button */}
              <Button 
                variant="outline" 
                className="w-full btn-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                onClick={() => window.open("https://calendly.com/saizure-solutions", "_blank")}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            className="btn-primary text-lg px-8 py-4"
            onClick={() => window.open("https://calendly.com/saizure-solutions", "_blank")}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}