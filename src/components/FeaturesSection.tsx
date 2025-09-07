import { PhoneCall, MessageSquare, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: PhoneCall,
      title: "AI Voice Callers",
      description: "Our AI picks up the call instead of letting it go unanswered. It answers questions, pre-qualifies leads, and books appointments — hands-free."
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots", 
      description: "Smart chat that knows your FAQs, pricing, and policies. Can be added to Messenger, Instagram, WhatsApp, and many more. Converts visitors into booked customers, 24/7."
    },
    {
      icon: Zap,
      title: "Websites & Automations",
      description: "Modern websites wired into your CRM, calendar, and workflows. No more manual follow-ups or lost leads."
    }
  ];

  return (
    <section id="features" className="py-section bg-neutral-100">
      <div className="max-w-container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-white mb-4">
            What Can We Do For YOU?
          </h2>
          <p className="text-body-lg text-neutral-30 max-w-2xl mx-auto">
            Proven, practical systems that capture revenue you're currently leaving on the table.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-neutral-70 rounded-lg p-8 hover:shadow-hover transition-smooth hover:transform hover:scale-[1.02] group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <IconComponent className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-h3 font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-body text-neutral-30 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;