import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, ArrowRight, Check } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-hero relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 blur-3xl"></div>
      
      <div className="relative max-w-container mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left animate-fade-up">
            {/* Main Headline */}
            <h1 className="text-display font-extrabold text-white mb-6">
              Never Miss a Lead <span className="text-primary">Again.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-neutral-10 mb-8 leading-relaxed">
              Your 24/7 AI Receptionist that answers calls, messages, and books clients while you focus on growing your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <a href="#demos" className="inline-flex items-center gap-2">
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#demos" className="inline-flex items-center gap-2">
                  Test Out Our Systems
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Chat Interface Mockup */}
          <div className="animate-fade-up">
            <div className="bg-white rounded-2xl shadow-elegant p-6 max-w-md ml-auto">
              {/* Incoming Call Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary rounded-full p-3">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-caption text-neutral-60">Incoming Call</p>
                    <p className="font-semibold text-neutral-90">(555) 123-4567</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-neutral-5 rounded-2xl rounded-tl-sm px-4 py-3">
                    <p className="text-body text-neutral-90">"Hi! I'd like to schedule a detailing service for my Tesla."</p>
                  </div>
                </div>

                {/* AI Response 1 */}
                <div className="flex items-start gap-2 justify-end">
                  <div className="bg-primary rounded-2xl rounded-tr-sm px-4 py-3 relative">
                    <p className="text-body text-white">"Great! I can help you with that. What date works best for you?"</p>
                    <div className="absolute -top-2 -right-2 bg-neutral-90 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      AI
                    </div>
                  </div>
                </div>

                {/* User Message 2 */}
                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-neutral-5 rounded-2xl rounded-tl-sm px-4 py-3">
                    <p className="text-body text-neutral-90">"How about this Friday at 2 PM?"</p>
                  </div>
                </div>

                {/* AI Response 2 */}
                <div className="flex items-start gap-2 justify-end">
                  <div className="bg-primary rounded-2xl rounded-tr-sm px-4 py-3 relative">
                    <p className="text-body text-white">"Perfect! I've booked you for Friday at 2 PM. You'll receive a confirmation shortly."</p>
                    <div className="absolute -top-2 -right-2 bg-neutral-90 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      AI
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-20">
                <p className="text-caption text-neutral-60">Response time: 0.8s</p>
                <div className="flex items-center gap-1 text-green-600">
                  <Check className="w-4 h-4" />
                  <span className="text-caption font-medium">Appointment Booked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;