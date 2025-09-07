import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-section bg-gradient-section">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-h1 font-bold text-white mb-6">
            Ready to Stop Missing Leads?
          </h2>
          <p className="text-body-lg text-neutral-10 mb-8 leading-relaxed">
            Let's plug in an AI front desk that never sleeps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default CTASection;