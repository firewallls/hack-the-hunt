import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Rules", href: "#rules" },
    { label: "Register", href: "#register" },
    { label: "Challenges", href: "#challenges" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse-glow" />
            <div className="font-mono">
              <div className="text-xs sm:text-sm text-muted-foreground">~/root/</div>
              <div className="text-sm sm:text-base font-bold text-foreground tracking-wider">
                SOCIETY OF CYBER SECURITY
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 lg:px-4 py-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors relative group"
              >
                <span className="relative z-10">&gt; {item.label}</span>
                <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform rounded-md" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t border-primary/20">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-mono text-muted-foreground hover:text-primary hover:bg-surface rounded-md transition-all"
              >
                &gt; {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
