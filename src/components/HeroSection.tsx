import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Shield } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animated particles
    const particles: Array<{x: number, y: number, vx: number, vy: number, opacity: number}> = [];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative pt-16 pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                HIPAA Compliant Healthcare Automation
              </span>
            </div>
            
            <h1 className="text-headline bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-6">
              Supercharge Your Practice With AI Automation
            </h1>
            
            <p className="text-subheadline mb-6 max-w-3xl mx-auto">
              Priva Flow builds HIPAA-compliant voice agents that sound just like real humans 
              and backend automations so you can focus on patient care.
            </p>

            {/* Emphasis on human-like AI */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 mb-8 border border-primary/20">
              <p className="text-lg font-semibold text-primary mb-2">🎯 Indistinguishable from Human Staff</p>
              <p className="text-muted-foreground">
                Our AI voice agents are so natural, patients and companies cannot tell they're speaking to AI. 
                Experience seamless conversations that maintain the human touch your practice is known for.
              </p>
            </div>

            {/* Key benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">24/7 Human-Like AI</span>
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

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.open("https://calendly.com/priva-flow", "_blank")}
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
        </div>
      </div>
    </section>
  );
}