import { DollarSign, Phone, TrendingDown } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cut Admin Costs Without Sacrificing Quality",
      description: "Reduce administrative overhead by up to 70% while maintaining exceptional patient care standards.",
      stat: "70% Cost Reduction"
    },
    {
      icon: Phone,
      title: "Never Miss a Patient Call Again",
      description: "24/7 AI receptionist ensures every patient call is answered instantly, improving satisfaction and retention.",
      stat: "100% Call Coverage"
    },
    {
      icon: TrendingDown,
      title: "Reduce Insurance Errors by 90%",
      description: "Automated insurance verification and claims processing eliminates costly billing errors and rejections.",
      stat: "90% Error Reduction"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-4">Why Choose Saizure Solutions?</h2>
          <p className="text-subheadline max-w-2xl mx-auto">
            Transform your practice with proven automation solutions that deliver measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-healthcare text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                <benefit.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {benefit.description}
              </p>
              
              <div className="inline-flex items-center justify-center bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full">
                {benefit.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}