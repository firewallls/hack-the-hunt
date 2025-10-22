import { Mail, MapPin, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 network-grid opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-block">
            {/*<div className="text-sm font-mono text-primary mb-2">&lt;section id="contact"&gt;</div>*/}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            {/*<div className="text-sm font-mono text-primary">&lt;/section&gt;</div>*/}
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions? Need support? Reach out to our organizing team.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow-primary transition-all">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-foreground">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    For queries, technical issues, or general support
                  </p>
                  <a
                    href="mailto:xyz@gmail.com"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-mono text-sm transition-colors"
                  >
                    xyz@gmail.com
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card/50 backdrop-blur-sm border border-secondary/20 rounded-lg p-6 hover:border-secondary/50 transition-all group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:glow-secondary transition-all">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-foreground">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Rishihood University<br />
                    Online Competition Platform<br />
                    Open to all students
                  </p>
                </div>
              </div>
            </div>

            {/* Organizers */}
            <div className="bg-card/50 backdrop-blur-sm border border-success/20 rounded-lg p-6 hover:border-success/50 transition-all group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-success/10 border border-success/30 flex items-center justify-center group-hover:glow-success transition-all">
                  <Users className="w-6 h-6 text-success" />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-foreground">Organized By</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Society of Cyber Security (SOCS)
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Your premier cybersecurity student organization at Rishihood University
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About SOCS */}
          <div className="bg-surface/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-mono mb-6">
                ABOUT SOCS
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground font-mono">
                SOCIETY OF CYBER SECURITY
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                SOCS is Rishihood University's dedicated cybersecurity club, fostering a community 
                of students passionate about information security, ethical hacking, and digital defense. 
                We organize workshops, competitions, and training sessions to help students develop 
                real-world cybersecurity skills.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Regular CTF competitions and security workshops
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Industry expert guest lectures and mentorship
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Networking opportunities with cybersecurity professionals
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Hands-on experience with industry-standard tools
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" variant="cyber" className="w-full">
              Join SOCS Community
            </Button>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="mt-12 max-w-5xl mx-auto bg-card/30 border border-primary/20 rounded-lg p-6 text-center">
          <h4 className="font-bold text-lg mb-2 text-foreground">Need Quick Answers?</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Check our FAQ section or reach out to us directly via email. We typically respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="outline" size="sm">
              View FAQ
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:rudra.choudhary2024@nst.rishihood.edu.in">
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
