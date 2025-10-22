import { Lock, Unlock, Star, Trophy } from "lucide-react";

const Challenges = () => {
  const challengeCategories = [
    {
      difficulty: "Basic",
      color: "success",
      icon: Unlock,
      challenges: [
        { name: "Welcome Hack", points: 50, status: "unlocked" },
        { name: "First Blood", points: 75, status: "unlocked" },
        { name: "Simple Cipher", points: 100, status: "unlocked" },
      ],
    },
    {
      difficulty: "Advanced",
      color: "secondary",
      icon: Star,
      challenges: [
        { name: "Web Recon", points: 200, status: "locked" },
        { name: "Binary Exploit", points: 250, status: "locked" },
        { name: "Crypto Master", points: 300, status: "locked" },
      ],
    },
    {
      difficulty: "Expert",
      color: "accent",
      icon: Trophy,
      challenges: [
        { name: "Root Access", points: 400, status: "locked" },
        { name: "Zero Day", points: 500, status: "locked" },
        { name: "Final Boss", points: 1000, status: "locked" },
      ],
    },
  ];

  return (
    <section id="challenges" className="py-16 sm:py-24 bg-surface/30 relative overflow-hidden">
      <div className="absolute inset-0 network-grid opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-block">
            <div className="text-sm font-mono text-primary mb-2">&lt;section id="challenges"&gt;</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Challenge Preview
              </span>
            </h2>
            <div className="text-sm font-mono text-primary">&lt;/section&gt;</div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get a sneak peek at the types of challenges you'll face. Actual challenges will be revealed 
            when the competition begins.
          </p>
        </div>

        {/* Challenge Categories */}
        <div className="max-w-6xl mx-auto space-y-8">
          {challengeCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.difficulty}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden"
              >
                {/* Category Header */}
                <div className={`px-6 py-4 bg-${category.color}/10 border-b border-${category.color}/20 flex items-center justify-between`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-${category.color}/20 border border-${category.color}/30 flex items-center justify-center`}>
                      <CategoryIcon className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-mono text-foreground">
                        [{category.difficulty.toUpperCase()}]
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.challenges.length} Challenges
                      </p>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-full bg-${category.color}/10 border border-${category.color}/30`}>
                    <span className={`text-sm font-mono text-${category.color}`}>
                      LEVEL {challengeCategories.indexOf(category) + 1}
                    </span>
                  </div>
                </div>

                {/* Challenges List */}
                <div className="divide-y divide-primary/10">
                  {category.challenges.map((challenge, index) => (
                    <div
                      key={challenge.name}
                      className="px-6 py-4 hover:bg-surface/30 transition-colors group"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-grow min-w-0">
                          {/* Status Icon */}
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                            challenge.status === "unlocked"
                              ? "bg-success/10 border border-success/30"
                              : "bg-muted/10 border border-border"
                          }`}>
                            {challenge.status === "unlocked" ? (
                              <Unlock className="w-4 h-4 text-success" />
                            ) : (
                              <Lock className="w-4 h-4 text-muted-foreground" />
                            )}
                          </div>

                          {/* Challenge Info */}
                          <div className="min-w-0 flex-grow">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-mono text-xs text-muted-foreground">
                                [CHALLENGE_{String(index + 1).padStart(2, "0")}]
                              </span>
                              {challenge.status === "unlocked" && (
                                <span className="px-2 py-0.5 rounded text-xs font-mono bg-success/10 text-success border border-success/30">
                                  ACTIVE
                                </span>
                              )}
                            </div>
                            <h4 className="font-semibold text-foreground truncate">
                              {challenge.name}
                            </h4>
                          </div>
                        </div>

                        {/* Points */}
                        <div className="flex-shrink-0">
                          <div className={`px-4 py-2 rounded-lg bg-${category.color}/5 border border-${category.color}/20`}>
                            <span className={`text-sm font-mono font-bold text-${category.color}`}>
                              {challenge.points} pts
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Card */}
        <div className="mt-12 max-w-4xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">Note:</span> These are sample challenges for preview purposes. 
            Actual challenges, point values, and difficulty levels will be revealed when the competition starts. 
            Dynamic scoring may apply where points decrease as more teams solve the challenge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
