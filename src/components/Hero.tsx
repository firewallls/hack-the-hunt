import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, Zap, Code } from "lucide-react";

const Hero = () => {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "$ sudo ./hack_the_hunt --initialize";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scan-lines">
      {/* Animated Background */}
      <div className="absolute inset-0 network-grid opacity-20" />
      <div className="absolute inset-0 data-stream" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Terminal Command */}
          <div className="inline-block bg-card/50 backdrop-blur-sm border border-success/30 rounded-lg p-4 sm:p-6 mb-8">
            <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground font-mono">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-success" />
              </div>
              <span className="ml-2">terminal@socs:~</span>
            </div>
            <div className="text-left font-mono text-success text-sm sm:text-base">
              {terminalText}
              <span className="inline-block w-2 h-4 bg-success ml-1 animate-pulse" />
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-mono">
              <Zap className="w-4 h-4" />
              <span>CTF CHALLENGE 2025</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse-glow">
                HACK THE HUNT
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-mono">
              Capture The Flag <span className="text-secondary">||</span> Cybersecurity Challenge
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Test your skills in <span className="text-primary font-semibold">OSINT</span>, 
            <span className="text-secondary font-semibold"> Cryptography</span>, 
            <span className="text-success font-semibold"> Web Exploitation</span>, 
            <span className="text-accent font-semibold"> Forensics</span>, and more. 
            Compete in teams, crack challenges, and claim victory.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="xl" variant="cyber" asChild>
              <a href="#register">
                <Terminal className="w-5 h-5" />
                Register Now
              </a>
            </Button>
            <Button size="xl" variant="terminal" asChild>
              <a href="#about">
                <Code className="w-5 h-5" />
                Learn More
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-12 max-w-3xl mx-auto">
            {[
              { label: "Challenge Types", value: "5+" },
              { label: "Team Size", value: "3-5" },
              { label: "Difficulty Levels", value: "3" },
              { label: "Prize Pool", value: "TBA" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-all">
                <div className="text-2xl sm:text-3xl font-bold text-primary font-mono">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
