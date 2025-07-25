
import { Quote, Star } from "lucide-react";
import { useState, useEffect } from "react";

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Priva Flow transformed our practice. We went from missing 15-20 calls per day to zero missed calls. Our patient satisfaction scores increased by 40%. The AI voice agents sound so natural, patients can't tell they're speaking to AI!",
      author: "Dr. Sarah Martinez",
      position: "Family Practice Owner",
      location: "Detroit, MI",
      metrics: "Zero missed calls, 40% satisfaction increase"
    },
    {
      quote: "The insurance automation alone saved us 20 hours per week. Billing errors dropped by 85%, and our revenue cycle improved dramatically. The voice AI is indistinguishable from human staff.",
      author: "Michael Chen",
      position: "Practice Manager",
      location: "Phoenix, AZ", 
      metrics: "20+ hours saved weekly, 85% error reduction"
    },
    {
      quote: "Implementation was seamless and the ROI was immediate. Our staff can now focus on patient care instead of administrative tasks. Patients love how natural our AI receptionist sounds - they have no idea it's not human!",
      author: "Dr. Jennifer Wilson",
      position: "Pediatric Clinic Director",
      location: "Seattle, WA",
      metrics: "Immediate ROI, 70% admin reduction"
    }
  ];

  const results = [
    { metric: "1000+", label: "Calls Handled Monthly" },
    { metric: "Zero", label: "Missed Calls" },
    { metric: "20+", label: "Hours Saved Weekly" },
    { metric: "85%", label: "Billing Error Reduction" },
    { metric: "70%", label: "Admin Work Reduction" },
    { metric: "99.9%", label: "System Uptime" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-4">Trusted by Healthcare Professionals</h2>
          <p className="text-subheadline max-w-2xl mx-auto mb-12">
            See how practices across the country are transforming their operations
          </p>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="card-healthcare text-center relative overflow-hidden">
              <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
              
              <div className="relative min-h-[300px] sm:min-h-[250px] md:min-h-[200px] flex items-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 flex flex-col justify-center ${
                      index === currentTestimonial 
                        ? 'opacity-100 transform translate-x-0' 
                        : index < currentTestimonial 
                          ? 'opacity-0 transform -translate-x-full'
                          : 'opacity-0 transform translate-x-full'
                    }`}
                  >
                    <blockquote className="text-base sm:text-lg md:text-xl text-foreground mb-6 leading-relaxed px-2">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonial.position}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                      <div className="text-sm text-primary font-medium mt-2">
                        {testimonial.metrics}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial indicators */}
              <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 transform ${
                      index === currentTestimonial 
                        ? 'bg-primary scale-110 shadow-lg' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-105'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {results.map((result, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {result.metric}
              </div>
              <div className="text-sm text-muted-foreground">
                {result.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
