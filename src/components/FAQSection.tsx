import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can you integrate with my calendar and CRM?",
      answer: "Yes. We connect to tools like Google Calendar, Calendly, Airtable, and popular CRMs. We'll map fields and test end-to-end before going live."
    },
    {
      question: "Will the AI sound natural?", 
      answer: "The voice caller uses high-quality, natural speech and handles interruptions. We also tune scripts to your brand's tone."
    },
    {
      question: "How fast is the setup?",
      answer: "Demos can be ready in hours. Production setups typically take a few days depending on integrations and training data."
    },
    {
      question: "What if I already have a website?",
      answer: "No problem. We can embed the chatbot/voice caller on your current site or build you a modern site that integrates everything."
    }
  ];

  return (
    <section id="faq" className="py-section bg-neutral-100">
      <div className="max-w-container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card border border-neutral-70 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-70/30 transition-smooth"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-body-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-neutral-30 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-neutral-70/50">
                  <p className="text-body text-neutral-30 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;