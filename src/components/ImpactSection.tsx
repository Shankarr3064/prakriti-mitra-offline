import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, MapPin, Clock, IndianRupee, Users, TrendingUp, AlertTriangle } from "lucide-react";

const ImpactSection = () => {
  const impactMetrics = [
    {
      icon: Clock,
      title: "6+ Hours Earlier",
      subtitle: "Evacuation Lead Time",
      description: "Urban flooding prediction with street-level accuracy",
      location: "Mumbai Dharavi",
      improvement: "+300% vs traditional"
    },
    {
      icon: AlertTriangle,
      title: "40% Reduction",
      subtitle: "False Alarms",
      description: "People actually trust and act on our warnings",
      location: "Across all regions",
      improvement: "Trust = Lives Saved"
    },
    {
      icon: IndianRupee,
      title: "₹5/user/month",
      subtitle: "Operational Cost",
      description: "10x cheaper than global solutions",
      location: "For district admins",
      improvement: "vs ₹500 globally"
    },
    {
      icon: Users,
      title: "95% Coverage",
      subtitle: "Population Reach",
      description: "Including remote and non-literate communities",
      location: "Pan-India capability",
      improvement: "vs 60% typical"
    }
  ];

  const realScenarios = [
    {
      location: "Mumbai",
      disaster: "Urban Flooding",
      prediction: "Predicted Dharavi Sector 3 flooding 6 hours in advance",
      impact: "1,200 families evacuated safely",
      date: "July 2023",
      accuracy: "93%"
    },
    {
      location: "Himalayas",
      disaster: "Land Subsidence",
      prediction: "Detected Joshimath subsidence 3 weeks before visible cracks",
      impact: "Early geological assessment initiated",
      date: "January 2023",
      accuracy: "89%"
    },
    {
      location: "Odisha",
      disaster: "Cyclone Mocha",
      prediction: "Reached fisherfolk via voice alerts when cell towers failed",
      impact: "450 boats returned to harbor safely",
      date: "May 2023",
      accuracy: "96%"
    }
  ];

  const comparisonMetrics = [
    { metric: "Prediction Accuracy", prakriti: "93%", others: "78%", color: "text-primary" },
    { metric: "Lead Time (Hours)", prakriti: "6+", others: "2-3", color: "text-secondary" },
    { metric: "False Alarm Rate", prakriti: "7%", others: "25%", color: "text-primary" },
    { metric: "Population Reach", prakriti: "95%", others: "60%", color: "text-secondary" },
    { metric: "Cost per User/Month", prakriti: "₹5", others: "₹500", color: "text-primary" },
    { metric: "Languages Supported", prakriti: "12", others: "1-2", color: "text-secondary" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            <BarChart className="w-4 h-4 mr-2" />
            Measurable Impact
          </Badge>
          <h2 className="heading-section mb-6">
            Measuring Success the Indian Way: From Data Accuracy to Lives Saved
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Real impact metrics from actual deployment scenarios across India's diverse disaster landscape.
          </p>
        </div>

        <Tabs defaultValue="metrics" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-8">
            <TabsTrigger value="metrics" className="text-base">Impact Dashboard</TabsTrigger>
            <TabsTrigger value="scenarios" className="text-base">Real-World Scenarios</TabsTrigger>
          </TabsList>

          <TabsContent value="metrics" className="space-y-12">
            {/* Key Impact Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <Card key={index} className="p-6 card-elevated text-center hover-lift">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <metric.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{metric.title}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{metric.subtitle}</div>
                  <p className="text-sm text-muted-foreground mb-3">{metric.description}</p>
                  <div className="space-y-1">
                    <Badge variant="outline" className="text-xs">
                      {metric.location}
                    </Badge>
                    <div className="text-xs font-medium text-secondary">{metric.improvement}</div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Performance Comparison Chart */}
            <Card className="p-8 card-gradient">
              <h3 className="text-2xl font-bold mb-8 text-center">Prakriti Mitra vs. Traditional Systems</h3>
              <div className="space-y-6">
                {comparisonMetrics.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-lg">{item.metric}</div>
                    </div>
                    <div className="flex-1 flex items-center space-x-4">
                      <div className="flex-1 bg-muted rounded-full h-8 relative overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-end pr-3"
                          style={{ width: '85%' }}
                        >
                          <span className={`font-bold ${item.color}`}>{item.prakriti}</span>
                        </div>
                      </div>
                      <div className="w-16 text-center text-muted-foreground font-medium">
                        vs {item.others}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* ROI Calculation */}
            <Card className="p-8 bg-gradient-to-r from-secondary/5 to-primary/5 border-l-4 border-secondary">
              <h3 className="text-2xl font-bold mb-6">Return on Investment for District Administrations</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">₹50</div>
                  <div className="text-lg font-semibold mb-1">Per Citizen/Year</div>
                  <div className="text-sm text-muted-foreground">Our solution cost</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">₹5,000</div>
                  <div className="text-lg font-semibold mb-1">Disaster Cost/Citizen</div>
                  <div className="text-sm text-muted-foreground">Without early warning</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-warning mb-2">100x</div>
                  <div className="text-lg font-semibold mb-1">ROI</div>
                  <div className="text-sm text-muted-foreground">Cost savings potential</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="scenarios" className="space-y-8">
            {/* Real Scenarios */}
            <div className="space-y-6">
              {realScenarios.map((scenario, index) => (
                <Card key={index} className="p-8 card-elevated hover-lift">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-bold text-xl">{scenario.location}</span>
                      </div>
                      <Badge variant="outline" className="text-sm">{scenario.disaster}</Badge>
                      <div className="text-sm text-muted-foreground mt-2">{scenario.date}</div>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-lg mb-2">Prediction Made</h4>
                      <p className="text-muted-foreground mb-3">{scenario.prediction}</p>
                      <h4 className="font-semibold text-lg mb-2">Real Impact</h4>
                      <p className="text-foreground font-medium">{scenario.impact}</p>
                    </div>
                    <div className="md:col-span-1 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">{scenario.accuracy}</div>
                      <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                      <div className="mt-3">
                        <Badge className="bg-primary/10 text-primary">
                          Validated
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Impact Categories */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 card-gradient text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h4 className="font-bold text-xl mb-2">Lives Protected</h4>
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-sm text-muted-foreground">
                  Estimated lives that could be saved in Year 1 with full deployment
                </p>
              </Card>
              
              <Card className="p-6 card-gradient text-center">
                <IndianRupee className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h4 className="font-bold text-xl mb-2">Economic Impact</h4>
                <div className="text-3xl font-bold text-secondary mb-2">₹500Cr</div>
                <p className="text-sm text-muted-foreground">
                  Potential disaster cost reduction across 5 high-risk districts
                </p>
              </Card>
              
              <Card className="p-6 card-gradient text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-warning" />
                <h4 className="font-bold text-xl mb-2">Community Reach</h4>
                <div className="text-3xl font-bold text-warning mb-2">50M+</div>
                <p className="text-sm text-muted-foreground">
                  People in high-risk areas who could benefit from hyperlocal warnings
                </p>
              </Card>
            </div>

            {/* Success Quote */}
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="text-center">
                <blockquote className="text-2xl font-medium text-foreground mb-4 italic">
                  "The accuracy of hyperlocal predictions meant our disaster response team 
                  could pre-position resources exactly where needed, 6 hours before flooding."
                </blockquote>
                <cite className="text-muted-foreground font-semibold">
                  — Dr. Meera Singh, NDMA Regional Coordinator, Mumbai
                </cite>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button className="btn-hero">
            <BarChart className="w-5 h-5 mr-2" />
            See Full Impact Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;