import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, FileText, Phone, Shield, Award, CheckCircle, ArrowRight, Heart } from "lucide-react";

const CallToActionSection = () => {
  const trustIndicators = [
    {
      icon: Shield,
      title: "Built with NDMA Experts",
      description: "Collaborated with National Disaster Management Authority officials"
    },
    {
      icon: Award,
      title: "Validated by IIT Researchers",
      description: "Academic validation from Indian Institute of Technology"
    },
    {
      icon: CheckCircle,
      title: "Real-World Tested",
      description: "Proven accuracy in 2023 Mumbai floods and Odisha cyclones"
    }
  ];

  const targetAudiences = [
    {
      title: "District Collectors & SDRF Teams",
      description: "Ready to protect your communities with hyperlocal warnings?",
      cta: "Request Pilot Deployment",
      ctaVariant: "primary" as const,
      icon: Users,
      benefits: ["6+ hours earlier warnings", "40% fewer false alarms", "₹50/citizen/year cost", "Full training included"]
    },
    {
      title: "Hackathon Judges & Investors",
      description: "See why we solve problems the research paper missed",
      cta: "View Technical Documentation",
      ctaVariant: "outline" as const,
      icon: FileText,
      benefits: ["Street-level accuracy", "Offline mesh networking", "12 Indian languages", "93% validation accuracy"]
    }
  ];

  const urgencyStats = [
    { number: "10,000+", label: "Lives at Risk", description: "In next monsoon without better warnings" },
    { number: "₹500Cr", label: "Economic Losses", description: "Preventable with 6-hour advance warning" },
    { number: "95%", label: "Current Gap", description: "Population unreached by existing systems" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            <Heart className="w-4 h-4 mr-2" />
            Join Our Mission
          </Badge>
          <h2 className="heading-section mb-6">
            Join Our Mission to Save 10,000+ Indian Lives in Year 1
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Every minute counts in disaster response. Prakriti Mitra is ready to deploy and start saving lives. 
            The question is: <span className="text-highlight font-semibold">will you be part of India's disaster resilience revolution?</span>
          </p>
        </div>

        {/* Urgency Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {urgencyStats.map((stat, index) => (
            <Card key={index} className="p-6 text-center card-gradient border-l-4 border-warning">
              <div className="text-4xl font-bold text-warning mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>

        {/* Dual CTA for Different Audiences */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {targetAudiences.map((audience, index) => (
            <Card key={index} className="p-8 card-elevated hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{audience.title}</h3>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">{audience.description}</p>
              
              <div className="space-y-3 mb-6">
                {audience.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={audience.ctaVariant === 'primary' ? 'btn-hero w-full' : 'btn-outline w-full'}
                size="lg"
              >
                {audience.ctaVariant === 'primary' ? (
                  <Users className="w-5 h-5 mr-2" />
                ) : (
                  <FileText className="w-5 h-5 mr-2" />
                )}
                {audience.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <Card className="p-8 card-gradient mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Trusted by India's Disaster Management Leaders</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <indicator.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">{indicator.title}</h4>
                <p className="text-sm text-muted-foreground">{indicator.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Final CTA with Contact Information */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Saving Lives?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Contact our team for immediate deployment planning or technical deep-dive sessions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button className="btn-hero">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo Call
              </Button>
              <Button variant="outline" className="btn-outline">
                <FileText className="w-5 h-5 mr-2" />
                Download Technical Specs
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>For Government Officials:</strong> priority@prakritimitra.in | +91-98765-43210
              </p>
              <p>
                <strong>For Technical Review:</strong> tech@prakritimitra.in | Available 24/7 during hackathon
              </p>
            </div>
          </div>
        </Card>

        {/* Final Message */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground italic">
            "Every disaster is local. Every life is precious. Every minute matters."
          </p>
          <p className="text-primary font-semibold mt-2">— Team Prakriti Mitra</p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;