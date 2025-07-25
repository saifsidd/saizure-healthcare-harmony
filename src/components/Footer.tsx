import { Shield, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/c0722047-15ed-4240-9c68-ed38c407a300.png" 
                alt="Priva Flow Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-foreground">Priva Flow</span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Transforming healthcare practices with HIPAA-compliant automation solutions featuring human-like AI voice agents that enhance patient care and operational efficiency.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>Fully HIPAA Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <a 
                  href="mailto:info@privaflow.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Settings */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-3 mb-6">
              <a 
                href="mailto:info@privaflow.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@privaflow.com</span>
              </a>
              <a 
                href="https://linkedin.com/company/priva-flow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Priva Flow. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">
            HIPAA Compliant Healthcare Automation Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}