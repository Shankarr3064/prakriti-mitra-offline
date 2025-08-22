import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, MapPin, Users, Wifi, Globe } from "lucide-react";
import indiaDisasterZones from "@/assets/india-disaster-zones.jpg";

const ProblemSection = () => {
  const challenges = [
    {
      icon: MapPin,
      title: "Generic vs. Hyperlocal",
      problem: "Current systems warn 'Mumbai will flood'",
      solution: "NOT 'Dharavi Sector 3 needs evacuation by 2PM'",
      impact: "40% false alarms ignored"
    },
    {
      icon: Wifi,
      title: "Network Dependency",
      problem: "Systems fail when towers go down",
      solution: "During cyclones when help is needed most",
      impact: "65% of rural areas unreachable"
    },
    {
      icon: Users,
      title: "Language Barriers",
      problem: "English-only warnings exclude millions",
      solution: "Non-literate communities left behind",
      impact: "70% can't read text alerts"
    },
    {
      icon: Globe,
      title: "Foreign Solutions",
      problem: "Global systems miss India's unique patterns",
      solution: "Monsoons, geology, population density",
      impact: "15% lower accuracy than needed"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="destructive" className="mb-4 px-4 py-2">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The REAL Problem
          </Badge>
          <h2 className="heading-section mb-6">
            India's Disaster Prediction Crisis: Why 99% of Systems Fail Our Unique Landscape
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            While global solutions offer city-level warnings, India needs{" "}
            <span className="text-highlight">street-level precision</span> for our unique disaster patterns,{" "}
            <span className="text-highlight">offline capability</span> for remote areas, and{" "}
            <span className="text-highlight">multilingual voice alerts</span> for diverse communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* India Disaster Zones Map */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden card-elevated">
              <img 
                src={indiaDisasterZones} 
                alt="Map of India showing 6 distinct disaster zones with population density overlay: Himalayas (earthquakes), Western Ghats (floods), Eastern coast (cyclones), Gangetic plains (urban floods), Central plateau (droughts), Northeast (landslides)"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">India's 6 Disaster Zones</h3>
                <p className="text-muted-foreground">
                  Each region requires unique prediction models - something global solutions miss entirely.
                </p>
              </div>
            </Card>
          </div>

          {/* Challenge Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="p-6 card-gradient hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-destructive/10">
                    <challenge.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">{challenge.title}</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        <span className="text-warning font-medium">Problem:</span> {challenge.problem}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="text-destructive font-medium">Reality:</span> {challenge.solution}
                      </p>
                      <Badge variant="outline" className="text-xs border-destructive/20 text-destructive">
                        {challenge.impact}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Survivor Quote */}
        <Card className="p-8 bg-gradient-to-r from-warning/5 to-primary/5 border-l-4 border-warning">
          <div className="text-center">
            <blockquote className="text-2xl font-medium text-foreground mb-4 italic">
              "We got warnings, but not for OUR street. By the time water reached our door, 
              it was too late to evacuate safely."
            </blockquote>
            <cite className="text-muted-foreground font-semibold">
              — Priya Sharma, 2023 Mumbai Flood Survivor, Dharavi Resident
            </cite>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProblemSection;