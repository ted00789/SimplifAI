import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How will this actually help me make more money?",
      answer: "Most businesses lose revenue without realizing it — from missed calls, slow replies, or leads slipping through the cracks. Our AI voice callers and chatbots respond instantly, 24/7, so potential customers never wait or walk away. That means more calls answered, more jobs booked, and more revenue captured. On top of that, automations save hours of manual work every week, freeing your team to focus on the jobs that pay."
    },
    {
      question: "Will it replace my staff or just support them?", 
      answer: "This is not about replacing people — it's about making them more effective. Think of our AI as your digital front desk: it handles repetitive tasks like answering FAQs, scheduling, and after-hours calls. Your staff can then spend their time on high-value work — serving customers, closing deals, and delivering services. It's like hiring an extra receptionist who never sleeps, but at a fraction of the cost."
    },
    {
      question: "How hard is it to set up and use?",
      answer: "We handle the heavy lifting for you. Once we know your business details (hours, pricing, FAQs, services), we configure everything so the system works right out of the box. Setup usually takes just a few days, and you don't need to learn any complicated tech. From there, you can log in, monitor conversations, and make small updates if needed — we'll guide you every step of the way."
    },
    {
      question: "Does it sound professional and natural?",
      answer: "Absolutely. Our AI voice callers use natural, human-like voices that sound friendly and professional. You'll never hear robotic, \"computer-generated\" tones. For chatbots, we customize the tone and responses to match your brand, so every interaction feels consistent and professional. Most customers can't even tell they're talking to AI — they just know they got help quickly."
    },
    {
      question: "Can it connect with the tools I already use?",
      answer: "Yes. Our systems integrate with tools like Google Calendar, Calendly, Airtable, and most major CRMs. We can also connect to your existing website and booking system. That means no need to change the way you work — the AI simply plugs into your existing workflow and makes it more efficient."
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