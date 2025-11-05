import { Shield, Search, Lock, Globe, FileSearch, Code2 } from "lucide-react";

const About = () => {
  const challenges = [
    {
      icon: Search,
      name: "OSINT",
      description: "Open Source Intelligence gathering and reconnaissance",
      color: "primary",
    },
    {
      icon: Lock,
      name: "Cryptography",
      description: "Encryption, decryption, and cipher breaking",
      color: "secondary",
    },
    {
      icon: Globe,
      name: "Web Exploitation",
      description: "Find and exploit web application vulnerabilities",
      color: "success",
    },
    {
      icon: Code2,
      name: "CLI/Scripting",
      description: "Command-line mastery and automation",
      color: "accent",
    },
    {
      icon: FileSearch,
      name: "Forensics",
      description: "Digital forensics and data recovery",
      color: "primary",
    },
    {
      icon: Shield,
      name: "Miscellaneous",
      description: "Diverse challenges testing your hacker mindset",
      color: "secondary",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 network-grid opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-block">
            {/*<div className="text-sm font-mono text-primary mb-2">&lt;section id="about"&gt;</div>*/}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About The Hunt
              </span>
            </h2>
            {/*<div className="text-sm font-mono text-primary">&lt;/section&gt;</div>*/}
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hack The Hunt is a Capture The Flag (CTF) cybersecurity competition where participants solve 
            security challenges across multiple domains. Whether you're a beginner or an expert, there's 
            something for everyone.
          </p>
        </div>

        {/* Challenge Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={challenge.name}
                className="group relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${challenge.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${challenge.color}/10 border border-${challenge.color}/30 mb-4 group-hover:glow-${challenge.color}`}>
                    <Icon className={`w-6 h-6 text-${challenge.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold font-mono mb-2 text-foreground">
                    [{challenge.name}]
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 bg-surface/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 sm:p-8">
          <div className="font-mono text-success mb-4 text-sm"># SYSTEM_INFO</div>
          <div className="grid sm:grid-cols-2 gap-6 text-sm sm:text-base">
            <div>
              <div className="text-muted-foreground mb-2">Event Format:</div>
              <div className="text-foreground font-mono">Team-based CTF Competition</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-2">Duration:</div>
              <div className="text-foreground font-mono">5 Hours</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-2">Skill Level:</div>
              <div className="text-foreground font-mono">All levels welcome</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-2">Platform:</div>
              <div className="text-foreground font-mono">Online Competition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
