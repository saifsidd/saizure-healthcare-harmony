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

    // Subtle floating dots
    const dots: Array<{x: number, y: number, vx: number, vy: number, size: number, opacity: number}> = [];
    
    for (let i = 0; i < 20; i++) {
      dots.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Update dots
      dots.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        if (dot.x < 0 || dot.x > canvas.offsetWidth) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.offsetHeight) dot.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(214, 95%, 55%, ${dot.opacity})`;
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
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40 dark:opacity-20"
      />
      
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
            
            <p className="text-subheadline mb-12 max-w-2xl mx-auto">
              Professional HIPAA-compliant AI voice agents and backend automation solutions 
              designed to enhance patient care and streamline operations.
            </p>

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
                onClick={() => window.open("https://calendly.com/privaflow/30min", "_blank")}
              >
                See a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => window.open("https://calendly.com/privaflow/30min", "_blank")}
              >
                Contact Sales
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