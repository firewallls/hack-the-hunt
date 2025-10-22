import { Users, ShieldCheck, UserCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Registration = () => {
  const registrationSteps = [
    {
      icon: Users,
      status: "STEP_01",
      title: "Form Your Team",
      description: "Gather 3-5 members who are ready to hack. Ensure at least one member is an NST member from Rishihood University.",
      color: "primary",
    },
    {
      icon: ShieldCheck,
      status: "STEP_02",
      title: "NST Verification",
      description: "Submit proof of NST membership for at least one team member. This is mandatory for participation.",
      color: "secondary",
    },
    {
      icon: UserCheck,
      status: "STEP_03",
      title: "Complete Registration",
      description: "Fill out the registration form with all team member details, team name, and contact information.",
      color: "success",
    },
    {
      icon: Clock,
      status: "STEP_04",
      title: "Wait for Confirmation",
      description: "You'll receive your team credentials and competition details via email before the event starts.",
      color: "accent",
    },
  ];

  return (
    <section id="register" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 network-grid opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-block">
            {/*<div className="text-sm font-mono text-primary mb-2">&lt;section id="register"&gt;</div>*/}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                Registration Process
              </span>
            </h2>
            {/*<div className="text-sm font-mono text-primary">&lt;/section&gt;</div>*/}
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow these steps to register your team for Hack The Hunt. Registration is currently open!
          </p>
        </div>

        {/* Registration Steps */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {registrationSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.status}
                className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all group"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-lg bg-${step.color}/10 border border-${step.color}/30 flex items-center justify-center group-hover:glow-${step.color} transition-all`}>
                    <Icon className={`w-8 h-8 text-${step.color}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <span className="font-mono text-xs text-muted-foreground">[{step.status}]</span>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-mono bg-${step.color}/10 text-${step.color} border border-${step.color}/30`}>
                        {index === 0 ? "ACTIVE" : "PENDING"}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number */}
                  <div className="hidden sm:block flex-shrink-0 text-6xl font-mono font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    0{index + 1}
                  </div>
                </div>

                {/* Connector Line */}
                {index < registrationSteps.length - 1 && (
                  <div className="absolute left-12 top-full w-0.5 h-6 bg-gradient-to-b from-primary/30 to-transparent hidden sm:block" />
                )}
              </div>
            );
          })}
        </div>

        {/* Registration Info Card */}
        <div className="max-w-4xl mx-auto bg-surface/50 backdrop-blur-sm border border-success/30 rounded-lg p-6 sm:p-8">
          <div className="text-center space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/30 rounded-full text-success text-sm font-mono mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>REGISTRATION STATUS: OPEN</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Ready to Join the Hunt?
              </h3>
              
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Registration will close 48 hours before the competition begins. Don't miss your chance 
                to showcase your cybersecurity skills and compete for glory!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" variant="success">
                  <a href={'https://forms.gle/YKpKoyRabThCVWkz8'}>
                    <UserCheck className="w-5 h-5" />
                    Register Your Team
                  </a>
              </Button>
              <Button size="xl" variant="outline">
                View Team Requirements
              </Button>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-primary/20">
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground mb-1">Team Size</div>
                  <div className="font-mono text-foreground font-semibold">3-5 Members</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">NST Required</div>
                  <div className="font-mono text-foreground font-semibold">Min. 1 Member</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Registration Fee</div>
                  <div className="font-mono text-success font-semibold">FREE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
