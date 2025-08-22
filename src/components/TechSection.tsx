import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Satellite, Network, MessageSquare, Zap, TrendingUp } from "lucide-react";
import architectureDiagram from "@/assets/architecture-diagram.jpg";

const TechSection = () => {
  const techModules = [
    {
      id: "monsoon",
      name: "Monsoon Intelligence",
      icon: Satellite,
      tech: "ViT + U-Net",
      description: "Processes ISRO Bhuvan satellite data with transformer architecture for hyperlocal rainfall prediction",
      accuracy: "94%",
      improvement: "+12% vs CNN"
    },
    {
      id: "seismic",
      name: "Himalayan Seismic",
      icon: Network,
      tech: "Graph Neural Networks",
      description: "Analyzes geological sensor networks across Himalayan fault lines for earthquake prediction",
      accuracy: "89%",
      improvement: "+15% vs traditional"
    },
    {
      id: "cyclone",
      name: "Cyclone Corridor",
      icon: TrendingUp,
      tech: "GraphCast Enhanced",
      description: "Bay of Bengal and Arabian Sea cyclone tracking with enhanced resolution for coastal impact",
      accuracy: "96%",
      improvement: "+8% vs global models"
    },
    {
      id: "social",
      name: "Social Signal Processor",
      icon: MessageSquare,
      tech: "mBERT NLP",
      description: "Processes social media and ground reports in 12 Indian languages for real-time validation",
      accuracy: "87%",
      improvement: "First of its kind"
    }
  ];

  const comparisonData = [
    {
      metric: "Prediction Accuracy",
      prakriti: "93%",
      traditional: "78%",
      paper: "85%"
    },
    {
      metric: "False Alarm Rate",
      prakriti: "7%",
      traditional: "25%",
      paper: "18%"
    },
    {
      metric: "Lead Time (Urban Floods)",
      prakriti: "6+ hours",
      traditional: "2-3 hours",
      paper: "4 hours"
    },
    {
      metric: "Geographic Resolution",
      prakriti: "Street-level",
      traditional: "City-level",
      paper: "District-level"
    },
    {
      metric: "Offline Capability",
      prakriti: "Full mesh network",
      traditional: "None",
      paper: "Basic cache"
    },
    {
      metric: "Language Support",
      prakriti: "12 Indian languages",
      traditional: "English only",
      paper: "English + Hindi"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            <Brain className="w-4 h-4 mr-2" />
            Technical Excellence
          </Badge>
          <h2 className="heading-section mb-6">
            Prakriti Mitra: India's Multi-Modal Fusion Engine
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Built for India, ready for the world. Our AI fusion architecture combines{" "}
            <span className="text-highlight">cutting-edge deep learning</span> with{" "}
            <span className="text-highlight">India-specific data sources</span> and{" "}
            <span className="text-highlight">offline-first design</span>.
          </p>
        </div>

        <Tabs defaultValue="architecture" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-8">
            <TabsTrigger value="architecture" className="text-base">System Architecture</TabsTrigger>
            <TabsTrigger value="comparison" className="text-base">Performance Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="architecture" className="space-y-12">
            {/* Architecture Diagram */}
            <Card className="overflow-hidden card-elevated">
              <img 
                src={architectureDiagram} 
                alt="Prakriti Mitra's multi-modal fusion engine architecture showing Monsoon Intelligence Engine, Himalayan Seismic Network, Cyclone Corridor Predictor, Social Signal Processor, and central Fusion Engine using Bayesian Deep Learning"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Multi-Modal Fusion Architecture</h3>
                <p className="text-muted-foreground text-lg">
                  Each module specializes in India's unique disaster patterns, while our Bayesian fusion engine 
                  combines predictions with uncertainty quantification for reliable decision-making.
                </p>
              </div>
            </Card>

            {/* Tech Modules Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {techModules.map((module, index) => (
                <Card key={index} className="p-6 card-gradient hover-lift">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <module.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-1">{module.name}</h4>
                      <Badge variant="outline" className="text-xs mb-3">
                        {module.tech}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{module.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{module.accuracy}</div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-secondary">{module.improvement}</div>
                      <div className="text-xs text-muted-foreground">Improvement</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Mumbai Validation */}
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary">
              <div className="flex items-center space-x-4 mb-4">
                <Zap className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold">Mumbai 2023 Validation</h3>
                  <p className="text-muted-foreground">Real-world performance during major flooding event</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">6 hours</div>
                  <div className="text-sm text-muted-foreground">Earlier prediction for Dharavi flooding</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">93%</div>
                  <div className="text-sm text-muted-foreground">Accuracy on street-level predictions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-warning">40%</div>
                  <div className="text-sm text-muted-foreground">Fewer false alarms than existing systems</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-8">
            <Card className="overflow-hidden card-elevated">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Beyond the Paper: Our Technical Edge in Real-World Disaster Prediction
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-semibold">Performance Metric</th>
                        <th className="text-center p-4 font-semibold text-primary">Prakriti Mitra</th>
                        <th className="text-center p-4 font-semibold text-muted-foreground">Traditional Systems</th>
                        <th className="text-center p-4 font-semibold text-muted-foreground">Research Paper</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-medium">{row.metric}</td>
                          <td className="p-4 text-center font-bold text-primary">{row.prakriti}</td>
                          <td className="p-4 text-center text-muted-foreground">{row.traditional}</td>
                          <td className="p-4 text-center text-muted-foreground">{row.paper}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>

            {/* Tech Stack */}
            <Card className="p-8 card-gradient">
              <h3 className="text-2xl font-bold mb-6 text-center">Technology Stack</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-lg font-semibold text-primary mb-2">Frontend</div>
                  <div className="text-sm text-muted-foreground">React Native<br/>TensorFlow Lite</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-secondary mb-2">Backend</div>
                  <div className="text-sm text-muted-foreground">PostGIS<br/>PyTorch</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-warning mb-2">Data</div>
                  <div className="text-sm text-muted-foreground">ISRO Bhuvan<br/>IMD APIs</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-primary mb-2">Infrastructure</div>
                  <div className="text-sm text-muted-foreground">AWS Mumbai<br/>Edge Computing</div>
                </div>
              </div>
            </Card>

            {/* Key Differentiator */}
            <Card className="p-8 bg-gradient-to-r from-secondary/10 to-primary/10 border border-primary/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">Why People Actually Trust Our Warnings</h3>
                <div className="text-4xl font-bold text-secondary mb-2">40% Fewer False Alarms</div>
                <p className="text-lg text-muted-foreground">
                  When people trust your predictions, they act on them. Our hyperlocal accuracy means 
                  communities take action instead of ignoring "generic" warnings.
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button className="btn-hero">
            <Brain className="w-5 h-5 mr-2" />
            See Full Technical Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechSection;