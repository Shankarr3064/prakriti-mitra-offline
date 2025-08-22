import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wifi, WifiOff, Users, MessageCircle, Shield, CheckCircle } from "lucide-react";
import meshNetworkSequence from "@/assets/mesh-network-sequence.jpg";

const MeshNetworkSection = () => {
  const networkFeatures = [
    {
      icon: WifiOff,
      title: "Offline-First Design",
      description: "Works when cellular networks fail during disasters",
      benefit: "Reaches communities when they need help most"
    },
    {
      icon: Wifi,
      title: "Bluetooth Mesh Network",
      description: "Phones automatically create local networks",
      benefit: "Zero infrastructure dependency"
    },
    {
      icon: MessageCircle,
      title: "Voice in Local Languages",
      description: "Alerts in Marathi, Bengali, Tamil, and 9+ more",
      benefit: "Includes non-literate communities"
    },
    {
      icon: Users,
      title: "Community Verification",
      description: "Gamified system for validating ground truth",
      benefit: "Builds trust through peer validation"
    }
  ];

  const sequence = [
    {
      step: "1",
      title: "Cyclone Hits",
      description: "Cell towers fail during extreme weather",
      icon: WifiOff,
      color: "text-destructive"
    },
    {
      step: "2",
      title: "Mesh Forms",
      description: "Bluetooth networks connect phones automatically",
      icon: Wifi,
      color: "text-primary"
    },
    {
      step: "3",
      title: "Voice Alert",
      description: "Warning spreads in local language through community",
      icon: MessageCircle,
      color: "text-secondary"
    },
    {
      step: "4",
      title: "Community Action",
      description: "Verified alerts trigger coordinated response",
      icon: CheckCircle,
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-secondary/10 text-secondary border-secondary/20">
            <Shield className="w-4 h-4 mr-2" />
            Last-Mile Innovation
          </Badge>
          <h2 className="heading-section mb-6">
            When Cellular Networks Fail: Our Offline-First Approach
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            During disasters, when you need communication most, traditional networks fail. 
            Prakriti Mitra's <span className="text-highlight">mesh networking technology</span> ensures{" "}
            <span className="text-highlight">95% population coverage</span> even when towers are down.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Mesh Network Sequence Visualization */}
          <div>
            <Card className="overflow-hidden card-elevated">
              <img 
                src={meshNetworkSequence} 
                alt="Four-panel sequence showing: 1) Cyclone hitting with cell towers failing, 2) Bluetooth mesh network forming between smartphones, 3) Voice alerts spreading in regional languages, 4) Community verification and coordinated response"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Offline Emergency Network Formation</h3>
                <p className="text-muted-foreground">
                  Real-time visualization of how our mesh network operates during a cyclone emergency in coastal Odisha.
                </p>
              </div>
            </Card>
          </div>

          {/* Sequence Steps */}
          <div className="space-y-6">
            {sequence.map((item, index) => (
              <Card key={index} className="p-6 card-gradient hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <h4 className="font-bold text-lg">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {networkFeatures.map((feature, index) => (
            <Card key={index} className="p-6 text-center card-gradient hover-lift">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
              <div className="text-xs text-primary font-medium bg-primary/5 rounded-full px-3 py-1">
                {feature.benefit}
              </div>
            </Card>
          ))}
        </div>

        {/* Impact Statistics */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-lg font-semibold mb-1">Population Coverage</div>
              <div className="text-sm text-muted-foreground">Including non-literate communities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">12</div>
              <div className="text-lg font-semibold mb-1">Indian Languages</div>
              <div className="text-sm text-muted-foreground">Voice interface support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-warning mb-2">0</div>
              <div className="text-lg font-semibold mb-1">Infrastructure Needed</div>
              <div className="text-sm text-muted-foreground">Works with existing smartphones</div>
            </div>
          </div>
        </Card>

        {/* Testimonial */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-secondary/5 to-primary/5">
          <div className="text-center">
            <blockquote className="text-2xl font-medium text-foreground mb-4 italic">
              "आपका सिस्टम मुझ तक पहुंचा जब टावर फेल हो गए थे। 
              हम समय पर नाव निकाल सके।"
            </blockquote>
            <div className="text-lg text-muted-foreground mb-2">
              "Your system reached me when towers failed. We could get our boats out in time."
            </div>
            <cite className="text-muted-foreground font-semibold">
              — Ravi Patel, Fisherman, Odisha Coast (via voice interface in Hindi)
            </cite>
          </div>
        </Card>

        <div className="text-center mt-12">
          <Button className="btn-hero">
            <Wifi className="w-5 h-5 mr-2" />
            See Live Demo of Mesh Network
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MeshNetworkSection;