import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, ArrowRight, MapPin, Globe, IndianRupee, Users } from "lucide-react";

const RoadmapSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Dominate India",
      timeline: "Months 1-12",
      status: "active",
      description: "Establish market leadership in India's disaster prediction",
      milestones: [
        { month: "1-3", task: "Mumbai flood prediction MVP", status: "completed" },
        { month: "4-6", task: "Expand to 5 high-risk districts", status: "active" },
        { month: "7-9", task: "Integrate with SDRF protocols", status: "planned" },
        { month: "10-12", task: "Full Maharashtra deployment", status: "planned" }
      ],
      metrics: {
        districts: "25",
        population: "100M",
        revenue: "₹50Cr",
        partnerships: "5 State Govts"
      }
    },
    {
      phase: "Phase 2",
      title: "Global Scalability",
      timeline: "Year 2-3",
      status: "planned",
      description: "Expand proven model to disaster-prone regions globally",
      milestones: [
        { month: "13-18", task: "Bangladesh & Nepal expansion", status: "planned" },
        { month: "19-24", task: "Philippines & Indonesia pilots", status: "planned" },
        { month: "25-30", task: "African coastal regions", status: "planned" },
        { month: "31-36", task: "Caribbean & Pacific islands", status: "planned" }
      ],
      metrics: {
        countries: "10",
        population: "500M",
        revenue: "₹500Cr",
        partnerships: "UN Agencies"
      }
    }
  ];

  const businessModel = [
    {
      segment: "District Administrations",
      price: "₹50/citizen/year",
      description: "Complete disaster prediction suite with integration support",
      features: ["Real-time alerts", "SDRF integration", "Training & support", "Custom dashboards"]
    },
    {
      segment: "State Governments",
      price: "₹25/citizen/year",
      description: "Bulk pricing for state-wide deployment",
      features: ["Multi-district coordination", "State-level analytics", "Policy insights", "Dedicated support"]
    },
    {
      segment: "International Markets",
      price: "$2/citizen/year",
      description: "Adapted for local disaster patterns and languages",
      features: ["Local customization", "Language adaptation", "Training programs", "Technical transfer"]
    }
  ];

  const keyMilestones = [
    {
      quarter: "Q1 2024",
      title: "Mumbai Success Story",
      description: "Complete validation with BMC for monsoon 2024",
      icon: CheckCircle,
      color: "text-primary"
    },
    {
      quarter: "Q2 2024",
      title: "Multi-State Expansion",
      description: "Deploy in Odisha, Kerala, Uttarakhand, West Bengal",
      icon: Circle,
      color: "text-secondary"
    },
    {
      quarter: "Q3 2024",
      title: "NDMA Partnership",
      description: "Official integration with National Disaster Management Authority",
      icon: Circle,
      color: "text-secondary"
    },
    {
      quarter: "Q4 2024",
      title: "International Pilot",
      description: "Begin deployment in Bangladesh coastal regions",
      icon: Circle,
      color: "text-muted-foreground"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-secondary/10 text-secondary border-secondary/20">
            <ArrowRight className="w-4 h-4 mr-2" />
            Implementation Strategy
          </Badge>
          <h2 className="heading-section mb-6">
            Phase 1: Dominate India | Phase 2: Global Scalability
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Our strategic roadmap to become the world's leading hyperlocal disaster prediction platform, 
            starting with India's unique challenges and scaling globally.
          </p>
        </div>

        {/* Timeline Phases */}
        <div className="space-y-12 mb-16">
          {phases.map((phase, index) => (
            <Card key={index} className="p-8 card-elevated">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <Badge className={`mb-2 ${phase.status === 'active' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                    {phase.phase}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-lg text-muted-foreground">{phase.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-primary">{phase.timeline}</div>
                </div>
              </div>

              {/* Milestones */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold text-lg mb-4">Key Milestones</h4>
                  <div className="space-y-3">
                    {phase.milestones.map((milestone, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        {milestone.status === 'completed' ? (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        ) : milestone.status === 'active' ? (
                          <Circle className="w-5 h-5 text-secondary fill-secondary/20" />
                        ) : (
                          <Circle className="w-5 h-5 text-muted-foreground" />
                        )}
                        <div className="flex-1">
                          <span className="text-sm font-medium text-primary">{milestone.month}:</span>
                          <span className="ml-2 text-sm">{milestone.task}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-4">Success Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{phase.metrics.districts}</div>
                      <div className="text-xs text-muted-foreground">Districts/Countries</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/5 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">{phase.metrics.population}</div>
                      <div className="text-xs text-muted-foreground">Population Served</div>
                    </div>
                    <div className="text-center p-3 bg-warning/5 rounded-lg">
                      <div className="text-2xl font-bold text-warning">{phase.metrics.revenue}</div>
                      <div className="text-xs text-muted-foreground">Annual Revenue</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-lg font-bold text-primary">{phase.metrics.partnerships}</div>
                      <div className="text-xs text-muted-foreground">Key Partnerships</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Business Model */}
        <Card className="p-8 card-gradient mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Revenue Model: Affordable for India, Scalable Globally</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {businessModel.map((model, index) => (
              <Card key={index} className="p-6 bg-white border border-border/50 hover-lift">
                <div className="text-center mb-4">
                  <h4 className="font-bold text-lg mb-2">{model.segment}</h4>
                  <div className="text-3xl font-bold text-primary mb-2">{model.price}</div>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </div>
                <div className="space-y-2">
                  {model.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Key Milestones Timeline */}
        <Card className="p-8 card-elevated">
          <h3 className="text-2xl font-bold mb-8 text-center">2024 Key Milestones</h3>
          <div className="space-y-6">
            {keyMilestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-24">
                  <Badge variant="outline" className="w-full justify-center">
                    {milestone.quarter}
                  </Badge>
                </div>
                <div className="flex-shrink-0">
                  <milestone.icon className={`w-8 h-8 ${milestone.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{milestone.title}</h4>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Competitive Advantage */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary">
          <h3 className="text-2xl font-bold mb-6 text-center">Why We'll Win: India-First Advantage</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-bold text-lg mb-2">Only India-Built Solution</h4>
              <p className="text-sm text-muted-foreground">
                Built for India's 6 disaster zones with local expertise
              </p>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h4 className="font-bold text-lg mb-2">Offline-First Design</h4>
              <p className="text-sm text-muted-foreground">
                Only system with mesh networking for remote areas
              </p>
            </div>
            <div>
              <Globe className="w-12 h-12 mx-auto mb-4 text-warning" />
              <h4 className="font-bold text-lg mb-2">Multilingual Voice</h4>
              <p className="text-sm text-muted-foreground">
                12 Indian languages including non-literate communities
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center mt-12">
          <Button className="btn-hero mr-4">
            <IndianRupee className="w-5 h-5 mr-2" />
            View Investment Proposal
          </Button>
          <Button variant="outline" className="btn-outline">
            <Users className="w-5 h-5 mr-2" />
            Partner with Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;