import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  const trustBadges = [
    "24/7 Availability",
    "Instant Responses", 
    "Secure & Reliable",
    "Plug-and-Play"
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 blur-3xl"></div>
      
      <div className="relative max-w-container mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center bg-neutral-70/50 backdrop-blur-sm rounded-pill px-4 py-2 mb-6 border border-neutral-50/20">
            <span className="text-secondary font-medium text-caption">
              AI Voice Callers • Chatbots • Websites • Automations
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-display font-extrabold text-white mb-6 animate-fade-up">
            Never Miss a Lead Again.
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-neutral-10 mb-8 leading-relaxed animate-fade-up">
            AI voice callers and chatbots that answer instantly, qualify leads, book appointments, and follow up — while you sleep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up">
            <Button variant="hero" size="lg" asChild>
              <a href="#demos">
                Test Our Agents
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://calendly.com/tadeas-simplifai-solutions/20" target="_blank" rel="noopener noreferrer">
                Book FREE 15-Minute Consultation
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-up">
            {trustBadges.map((badge, index) => (
              <div 
                key={index}
                className="flex items-center justify-center bg-neutral-70/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-neutral-50/10"
              >
                <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                <span className="text-caption text-neutral-10 font-medium text-center">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-neutral-30 rounded-pill flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-pill mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;