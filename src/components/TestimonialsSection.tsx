import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "We used to miss 20–30% of inbound calls. The AI receptionist turned that into same-day bookings.",
      author: "Detailing Shop Owner",
      meta: "Local Services"
    },
    {
      quote: "The chatbot handles FAQs and appointments while our team focuses on jobs.",
      author: "Clinic Manager", 
      meta: "Healthcare"
    }
  ];

  return (
    <section className="py-section bg-gradient-section">
      <div className="max-w-container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-white mb-4">
            Results That Speak for Themselves
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-neutral-70 rounded-lg p-8 hover:shadow-hover transition-smooth relative"
            >
              <Quote className="w-8 h-8 text-secondary mb-4 opacity-60" />
              <blockquote className="text-body-lg text-white mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <footer>
                <div className="font-semibold text-white">
                  {testimonial.author}
                </div>
                <div className="text-caption text-neutral-30">
                  {testimonial.meta}
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;