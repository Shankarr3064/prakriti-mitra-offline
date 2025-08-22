import { Shield, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "How It Works", href: "#technology" },
        { label: "Live Demo", href: "#demo" },
        { label: "Technical Docs", href: "#docs" },
        { label: "Pilot Program", href: "#pilot" }
      ]
    },
    {
      title: "For Government",
      links: [
        { label: "District Deployment", href: "#district" },
        { label: "SDRF Integration", href: "#sdrf" },
        { label: "Training Programs", href: "#training" },
        { label: "Cost Calculator", href: "#cost" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Research Papers", href: "#research" },
        { label: "Case Studies", href: "#cases" },
        { label: "Impact Report", href: "#impact" },
        { label: "Media Kit", href: "#media" }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Government Inquiries",
      value: "priority@prakritimitra.in"
    },
    {
      icon: Phone,
      label: "24/7 Emergency Line",
      value: "+91-98765-43210"
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: "Mumbai, Maharashtra, India"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-xl">Prakriti Mitra</div>
                <div className="text-sm text-background/70">प्रकृति मित्र</div>
              </div>
            </div>
            <p className="text-background/80 text-sm mb-6 leading-relaxed">
              India's first hyperlocal disaster prediction system that works offline. 
              Protecting 95% of India's population with street-level accuracy.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <h4 className="font-semibold text-lg mb-6">Contact Information</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center space-x-3">
                <contact.icon className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-background/70">{contact.label}</div>
                  <div className="font-medium">{contact.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-background/70">
            © 2024 Prakriti Mitra. Built for India's disaster resilience. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-background/70 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-background/70 hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#security" className="text-background/70 hover:text-background transition-colors">
              Security
            </a>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 p-4 bg-warning/10 border border-warning/20 rounded-lg">
          <div className="text-center text-sm">
            <strong className="text-warning">Emergency Contact:</strong> For immediate disaster response coordination, 
            call our 24/7 hotline at <span className="font-mono">+91-98765-43210</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;