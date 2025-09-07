import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$$",
      period: "/mo",
      features: [
        "AI Chatbot (1 site)",
        "Basic Voice Caller", 
        "Calendly Integration",
        "Email Support"
      ],
      highlight: false
    },
    {
      name: "Growth", 
      price: "$$$",
      period: "/mo",
      features: [
        "AI Chatbot + Voice Caller",
        "CRM + Calendar Automation",
        "Custom Knowledge Base", 
        "Priority Support"
      ],
      highlight: true
    },
    {
      name: "Pro",
      price: "Custom",
      period: "",
      features: [
        "Multi-site / Multi-number",
        "Advanced Routing & Webhooks",
        "Bespoke Automations & Website",
        "Dedicated Success Manager"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-section bg-neutral-100">
      <div className="max-w-container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-body-lg text-neutral-30 max-w-2xl mx-auto">
            Start small, scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card border rounded-lg p-8 hover:shadow-hover transition-smooth ${
                plan.highlight 
                  ? "border-secondary shadow-glow transform scale-105" 
                  : "border-neutral-70"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-neutral-100 px-4 py-2 rounded-pill text-caption font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-h3 font-semibold text-white mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-end justify-center">
                  <span className="text-h1 font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-body text-neutral-30 mb-2">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                    <span className="text-body text-neutral-30">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlight ? "cta" : "primary"} 
                size="lg" 
                className="w-full"
                asChild
              >
                <a href="https://calendly.com/tadeas-simplifai-solutions/20" target="_blank" rel="noopener noreferrer">
                  Book a Free Call
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-caption text-neutral-30 mt-8">
          All plans include onboarding and basic training.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;