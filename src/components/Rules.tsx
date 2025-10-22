import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";

const Rules = () => {
  const [expandedRule, setExpandedRule] = useState<number | null>(null);

  const rules = [
    {
      id: "RULE_001",
      title: "Team Formation",
      type: "info",
      summary: "Teams must consist of 3-5 members",
      details: "Each team should have a minimum of 3 members and a maximum of 5 members. All team members must register before the competition begins. Team composition cannot be changed after registration closes.",
    },
    {
      id: "RULE_002",
      title: "NST Membership Requirement",
      type: "critical",
      summary: "At least one team member must be an NST member",
      details: "To participate, at least one member of your team must be a registered member of the NST (Network Security Team) at Rishihood University. This ensures alignment with our academic community and maintains the integrity of the competition.",
    },
    {
      id: "RULE_003",
      title: "Fair Play Policy",
      type: "critical",
      summary: "Strictly no cheating, sharing flags, or unauthorized collaboration",
      details: "Any form of cheating, including but not limited to sharing flags between teams, using unauthorized tools, attacking competition infrastructure, or collaborating with other teams will result in immediate disqualification. Play fair and respect the competition.",
    },
    {
      id: "RULE_004",
      title: "Challenge Access",
      type: "info",
      summary: "All challenges will be available simultaneously at start time",
      details: "When the competition begins, all challenges across all categories will be unlocked and available to solve. Teams can tackle challenges in any order they prefer. Strategic planning is key!",
    },
    {
      id: "RULE_005",
      title: "Flag Format",
      type: "info",
      summary: "All flags follow standard CTF format",
      details: "Flags will be in the format: flag{...} or SOCS{...}. Ensure you submit the complete flag exactly as found, including the wrapper. Case sensitivity applies unless otherwise specified in the challenge description.",
    },
    {
      id: "RULE_006",
      title: "Scoring System",
      type: "info",
      summary: "Points awarded based on challenge difficulty and solve time",
      details: "Challenges are worth different points based on their difficulty level. Dynamic scoring may apply where earlier solves earn more points. The leaderboard updates in real-time as flags are submitted.",
    },
    {
      id: "RULE_007",
      title: "Technical Issues",
      type: "info",
      summary: "Report technical problems immediately via official channels",
      details: "If you encounter technical issues with challenges or the platform, immediately contact organizers through the official support channel. Do not exploit platform vulnerabilities - this is grounds for disqualification.",
    },
    {
      id: "RULE_008",
      title: "Write-ups Policy",
      type: "info",
      summary: "Write-ups can be published after competition ends",
      details: "Teams are encouraged to create detailed write-ups of their solutions. However, these must only be published after the official competition end time and judging is complete. Early publication will result in penalties.",
    },
    {
      id: "RULE_009",
      title: "Code of Conduct",
      type: "critical",
      summary: "Respect all participants and maintain professional behavior",
      details: "All participants must maintain professional and respectful behavior throughout the competition. Harassment, discrimination, or toxic behavior of any kind will not be tolerated and may result in immediate disqualification and ban from future events.",
    },
    {
      id: "RULE_010",
      title: "Organizers' Decision",
      type: "info",
      summary: "Final decisions rest with the organizing committee",
      details: "In cases of disputes, interpretation of rules, or unforeseen circumstances, the decision of the SOCS organizing committee is final and binding. We reserve the right to modify rules if necessary for fair play.",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      case "success":
        return <CheckCircle2 className="w-5 h-5 text-success" />;
      default:
        return <XCircle className="w-5 h-5 text-primary" />;
    }
  };

  const getBorderColor = (type: string) => {
    switch (type) {
      case "critical":
        return "border-destructive/30 hover:border-destructive/50";
      case "success":
        return "border-success/30 hover:border-success/50";
      default:
        return "border-primary/30 hover:border-primary/50";
    }
  };

  return (
    <section id="rules" className="py-16 sm:py-24 bg-surface/30 relative overflow-hidden">
      <div className="absolute inset-0 network-grid opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-block">
            {/*<div className="text-sm font-mono text-primary mb-2">&lt;section id="rules"&gt;</div>*/}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-destructive to-accent bg-clip-text text-transparent">
                Rules & Guidelines
              </span>
            </h2>
            {/*<div className="text-sm font-mono text-primary">&lt;/section&gt;</div>*/}
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Read carefully and follow all competition rules. Violations may result in disqualification.
          </p>
        </div>

        {/* Rules List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {rules.map((rule, index) => (
            <div
              key={rule.id}
              className={`bg-card/50 backdrop-blur-sm border rounded-lg overflow-hidden transition-all ${getBorderColor(rule.type)} ${
                expandedRule === index ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <button
                onClick={() => setExpandedRule(expandedRule === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 flex items-start gap-4 text-left hover:bg-surface/30 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">{getIcon(rule.type)}</div>
                
                <div className="flex-grow min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="font-mono text-xs sm:text-sm text-muted-foreground">
                      {rule.type === "critical" ? "[CRITICAL]" : "[INFO]"}
                    </span>
                    <span className="font-mono text-sm text-primary">{rule.id}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {rule.summary}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <div className={`w-6 h-6 flex items-center justify-center transition-transform ${
                    expandedRule === index ? "rotate-180" : ""
                  }`}>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
                  </div>
                </div>
              </button>

              {expandedRule === index && (
                <div className="px-4 sm:px-6 pb-4 pl-12 sm:pl-16 border-t border-primary/10">
                  <p className="text-sm text-muted-foreground leading-relaxed pt-4">
                    {rule.details}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-12 max-w-4xl mx-auto bg-destructive/10 border border-destructive/30 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-foreground mb-2">Important Notice</h4>
              <p className="text-sm text-muted-foreground">
                All participants must read and accept these rules before the competition. By participating, 
                you acknowledge that you have read, understood, and agree to abide by all rules and guidelines. 
                Violation of any rule may result in disqualification and ban from future SOCS events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
