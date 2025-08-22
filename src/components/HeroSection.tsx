import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, Users, Zap } from "lucide-react";
import heroComparison from "@/assets/hero-comparison.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-topographic">
      {/* Hackathon Winner Badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 text-sm font-semibold shadow-lg">
          🏆 Hackathon Finalist
        </Badge>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                India's First Hyperlocal System
              </Badge>
              
              <h1 className="heading-hero">
                India's First Hyperlocal Disaster Prediction System That Works When Networks Fail
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                <span className="text-highlight">Prakriti Mitra</span> delivers street-level warnings to{" "}
                <span className="text-highlight font-bold">95% of Indians</span>, including non-literate communities
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center card-gradient">
                <div className="text-2xl font-bold text-primary">93%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </Card>
              <Card className="p-4 text-center card-gradient">
                <div className="text-2xl font-bold text-secondary">6+hrs</div>
                <div className="text-sm text-muted-foreground">Earlier Warning</div>
              </Card>
              <Card className="p-4 text-center card-gradient">
                <div className="text-2xl font-bold text-warning">₹5</div>
                <div className="text-sm text-muted-foreground">Per User/Month</div>
              </Card>
              <Card className="p-4 text-center card-gradient">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Population Reach</div>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                See How It Works in Mumbai Floods
              </Button>
              <Button variant="outline" className="btn-outline">
                <Users className="w-5 h-5 mr-2" />
                Request Pilot Deployment
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-secondary" />
                Built with NDMA experts
              </div>
              <div className="flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-warning" />
                Validated by IIT researchers
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <Card className="overflow-hidden card-elevated">
              <img 
                src={heroComparison} 
                alt="Comparison between generic city-level warnings and Prakriti Mitra's hyperlocal street-level predictions for Mumbai floods"
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="text-sm font-medium text-foreground">Live Demo</div>
                <div className="text-xs text-muted-foreground">Mumbai Flood Prediction</div>
              </div>
            </Card>
            
            {/* Floating Alert Card */}
            <Card className="absolute -bottom-6 -left-6 bg-warning/10 border-warning/20 p-4 card-alert max-w-xs">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-warning-dark text-sm">Critical Alert</div>
                  <div className="text-xs text-foreground">
                    "Dharavi Sector 3 needs evacuation by 2PM" - 6 hours advance warning
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;