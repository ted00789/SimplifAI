const AuditorSection = () => {
  return (
    <section id="auditor" className="py-section bg-neutral-100">
      <div className="max-w-container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-accent/10 rounded-pill px-4 py-2 mb-4">
            <span className="text-accent font-medium text-caption">FREE Lost Revenue Audit</span>
          </div>
          <h2 className="text-h1 font-bold text-white mb-4">
            See What Missed Calls Are Costing You
          </h2>
          <p className="text-body-lg text-neutral-30 max-w-2xl mx-auto">
            Quick calculator to estimate lost revenue when calls go unanswered.
          </p>
        </div>

        {/* Auditor Embed */}
        <div className="bg-card border border-neutral-70 rounded-lg overflow-hidden shadow-card">
          <iframe
            src={`https://missed-call-auditor.lovable.app/?v=${Date.now()}`}
            title="Missed-Call Auditor"
            className="w-full h-[760px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default AuditorSection;