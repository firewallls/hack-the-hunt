import { Terminal, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-primary/20 bg-card/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-6 h-6 text-primary animate-pulse-glow" />
              <span className="font-mono font-bold text-foreground">SOCS</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Society of Cyber Security at Rishihood University. Empowering the next 
              generation of cybersecurity professionals through hands-on learning and competition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Event", href: "#about" },
                { label: "Rules", href: "#rules" },
                { label: "Register", href: "#register" },
                { label: "Challenges", href: "#challenges" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                  >
                    &gt; {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="font-mono font-semibold text-foreground mb-4">Event Info</h4>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Event Type</div>
                <div className="text-foreground font-mono">Capture The Flag (CTF)</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Format</div>
                <div className="text-foreground font-mono">Team-based Competition</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Platform</div>
                <div className="text-foreground font-mono">Online</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground font-mono text-center sm:text-left">
              © {currentYear} SOCS - Rishihood University. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-destructive animate-pulse" />
              <span>by SOCS Team</span>
            </div>
          </div>
        </div>

        {/* Terminal Line */}
        <div className="mt-6 pt-6 border-t border-primary/10">
          <div className="font-mono text-xs text-success opacity-70 text-center">
            $ echo "Ready to hack? Let's go!" && ./start_hunt.sh
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
