import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CaseStudySection() {
  const results = [
    "Eliminated 100% of missed calls during business hours",
    "Reduced patient wait times from 15 minutes to under 2 minutes",
    "Increased appointment bookings by 35%",
    "Improved patient satisfaction scores by 45%",
    "Saved 25 hours per week on administrative tasks"
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Case Study
            </div>
            
            <h2 className="text-section-title mb-6">
              How a Detroit Clinic Eliminated Missed Calls
            </h2>
            
            <p className="text-subheadline mb-8">
              This clinic in Detroit was struggling with missed calls, long patient wait times, 
              and overwhelmed staff. Our AI voice receptionist solution transformed their practice 
              in just 7 days.
            </p>

            <div className="space-y-4 mb-8">
              {results.map((result, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{result}</span>
                </div>
              ))}
            </div>

            <Button 
              className="btn-primary"
              onClick={() => window.open("https://calendly.com/priva-flow", "_blank")}
            >
              Get Similar Results
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Visual/Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card-healthcare text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Call Answer Rate</div>
              <div className="text-xs text-muted-foreground mt-1">Previously: 73%</div>
            </div>
            
            <div className="card-healthcare text-center">
              <div className="text-4xl font-bold text-primary mb-2">2min</div>
              <div className="text-muted-foreground">Average Wait Time</div>
              <div className="text-xs text-muted-foreground mt-1">Previously: 15min</div>
            </div>
            
            <div className="card-healthcare text-center">
              <div className="text-4xl font-bold text-primary mb-2">35%</div>
              <div className="text-muted-foreground">More Bookings</div>
              <div className="text-xs text-muted-foreground mt-1">Month over month</div>
            </div>
            
            <div className="card-healthcare text-center">
              <div className="text-4xl font-bold text-primary mb-2">25hrs</div>
              <div className="text-muted-foreground">Time Saved Weekly</div>
              <div className="text-xs text-muted-foreground mt-1">Administrative tasks</div>
            </div>

            {/* Quote */}
            <div className="col-span-2 card-healthcare">
              <blockquote className="text-sm italic text-muted-foreground text-center">
                "Our patients love the instant response, and our staff can finally focus on 
                providing exceptional care instead of juggling phone calls all day."
              </blockquote>
              <div className="text-center mt-3">
                <div className="font-semibold text-foreground text-sm">Chief Doctor</div>
                <div className="text-xs text-muted-foreground">Detroit, Michigan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}