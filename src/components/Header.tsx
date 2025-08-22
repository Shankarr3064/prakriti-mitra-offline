import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, Shield, Zap, FileText } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Problem", href: "#problem" },
    { label: "Technology", href: "#technology" },
    { label: "Impact", href: "#impact" },
    { label: "Roadmap", href: "#roadmap" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-heading font-bold text-xl text-foreground">Prakriti Mitra</div>
              <div className="text-xs text-muted-foreground">प्रकृति मित्र</div>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
              <Zap className="w-3 h-3 mr-1" />
              Live Demo
            </Badge>
            <Button size="sm" className="btn-secondary">
              <FileText className="w-4 h-4 mr-2" />
              Tech Docs
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex space-x-3 mt-4">
              <Button size="sm" variant="outline" className="flex-1">
                Live Demo
              </Button>
              <Button size="sm" className="flex-1">
                Tech Docs
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;