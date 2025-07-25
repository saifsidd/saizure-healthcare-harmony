import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Modernize Your Clinic?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join hundreds of practices that have transformed their operations with our 
            HIPAA-compliant automation solutions. Get started today and see immediate results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center space-x-3 text-primary-foreground/90">
              <Phone className="h-5 w-5" />
              <span>Free 30-minute consultation</span>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground/90">
              <Calendar className="h-5 w-5" />
              <span>Implementation under one week</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 shadow-lg"
              onClick={() => window.open("https://calendly.com/privaflow/30min", "_blank")}
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white/50 bg-white/10 text-primary-foreground hover:bg-white/20 hover:border-white/70 text-lg px-8 py-4 backdrop-blur-sm"
              onClick={() => window.open("mailto:info@privaflow.com", "_blank")}
            >
              Contact Sales
            </Button>
          </div>

          <p className="text-primary-foreground/70 text-sm mt-6">
            No contracts • HIPAA compliant • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}