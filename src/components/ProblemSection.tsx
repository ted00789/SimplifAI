import { PhoneOff, Clock, BellOff, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const stats = [
    {
      icon: PhoneOff,
      iconColor: "text-red-400",
      iconBg: "bg-red-950/50",
      value: "67%",
      description: "of customers hang up if you don't answer within 3 rings"
    },
    {
      icon: Clock,
      iconColor: "text-orange-400",
      iconBg: "bg-orange-950/50",
      value: "5 min",
      description: "is all you have to respond before leads move to your competitor"
    },
    {
      icon: BellOff,
      iconColor: "text-yellow-400",
      iconBg: "bg-yellow-950/50",
      value: "82%",
      description: "of website visitors leave without converting due to no instant response"
    },
    {
      icon: TrendingDown,
      iconColor: "text-purple-400",
      iconBg: "bg-purple-950/50",
      value: "$5K+",
      description: "average monthly revenue lost from missed opportunities",
      highlight: true
    }
  ];

  return (
    <section className="py-section bg-neutral-100">
      <div className="max-w-container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-white mb-6">
            Every Missed Call Is a <span className="text-primary">Missed Client.</span>
          </h2>
          <p className="text-body-lg text-neutral-30 max-w-4xl mx-auto leading-relaxed">
            Most businesses lose 30-50% of leads to slow responses or after-hours silence.<br />
            Your competitors aren't sleeping — why should your business?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className={`bg-neutral-90/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  stat.highlight 
                    ? 'border-primary' 
                    : 'border-neutral-70/20'
                } transition-all duration-300 hover:bg-neutral-90/70 hover:shadow-glow hover:scale-105 hover:border-primary/50`}
              >
                <div className={`w-14 h-14 ${stat.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className={`w-7 h-7 ${stat.iconColor}`} />
                </div>
                <div className="text-display font-extrabold text-primary mb-4">
                  {stat.value}
                </div>
                <p className="text-body text-neutral-10 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
