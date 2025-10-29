import { MessageSquare, Brain, PhoneIncoming, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Instant Responses = More Bookings",
      description: "Respond in seconds, not hours. Convert up to 40% more leads with immediate engagement."
    },
    {
      icon: Brain,
      title: "Smart Lead Qualification", 
      description: "Only spend time on serious buyers. Our AI filters out tire-kickers automatically."
    },
    {
      icon: PhoneIncoming,
      title: "No Missed Calls, Ever",
      description: "Every call gets answered, even at 2 AM. Your business never sleeps again."
    },
    {
      icon: Clock,
      title: "Saves 10+ Hours/Week",
      description: "Stop playing phone tag and chasing leads. Focus on what you do best."
    }
  ];

  const stats = [
    { value: "3x", label: "Faster response time" },
    { value: "40%", label: "More appointments booked" },
    { value: "$8K+", label: "Average monthly revenue increase" }
  ];

  return (
    <section id="features" className="pt-section pb-section bg-neutral-5">
      <div className="max-w-container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-neutral-90 mb-12">
            Why Business Owners <span className="text-primary">Love SimplifAI</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-card">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-h3 font-bold text-neutral-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-body text-neutral-70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-2xl shadow-elegant p-12">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-display font-extrabold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-body text-neutral-70 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;