const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerColumns = [
    {
      title: "logo",
      items: [
        "Less Work. More Revenue. On Autopilot.",
        `© ${currentYear} SimplifAI. All rights reserved.`
      ]
    },
    {
      title: "Navigate", 
      items: [
        { label: "Live Demos", href: "#demos" },
        { label: "Missed-Call Auditor", href: "#auditor" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" }
      ]
    },
    {
      title: "Get in Touch",
      items: [
        { label: "Phone: 602 756 8791", href: "tel:6027568791" },
        { label: "Email: tadeas@simplifai-solutions.com", href: "mailto:tadeas@simplifai-solutions.com" },
        { label: "Book a Call", href: "https://calendly.com/tadeas-simplifai-solutions/20" }
      ]
    }
  ];

  return (
    <footer className="bg-neutral-90 border-t border-neutral-70">
      <div className="max-w-container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {footerColumns.map((column, index) => (
            <div key={index}>
              {column.title === "logo" ? (
                <img 
                  src="/lovable-uploads/80ade4d1-18e3-4894-bd47-bc0cd9241f37.png" 
                  alt="SimplifAI" 
                  className="h-10 w-auto mb-4"
                />
              ) : (
                <h4 className="text-h3 font-semibold text-white mb-4">
                  {column.title}
                </h4>
              )}
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {typeof item === 'string' ? (
                      <span className="text-body text-neutral-30">
                        {item}
                      </span>
                    ) : (
                      <a 
                        href={item.href}
                        className="text-body text-neutral-30 hover:text-white transition-smooth"
                        target={item.href.startsWith('http') ? "_blank" : undefined}
                        rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="border-t border-neutral-70 mt-8 pt-8 text-center">
          <p className="text-caption text-neutral-30">
            Built with ❤️ to help businesses never miss another lead.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;