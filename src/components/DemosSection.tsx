import { useEffect, useRef } from "react";

const DemosSection = () => {
  const vapiRef = useRef<HTMLDivElement>(null);
  const voiceflowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize VAPI Voice Caller
    const initVapi = () => {
      if (vapiRef.current && !vapiRef.current.querySelector('#vapi-call-btn')) {
        vapiRef.current.innerHTML = `
          <div style="height:100%; width:100%; display:flex; align-items:center; justify-content:center; flex-direction: column; gap: 20px;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h4 style="color: #fff; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Try Our AI Receptionist</h4>
              <p style="color: #A3AEC2; font-size: 14px;">Click to test the voice caller demo</p>
            </div>
            <button id="vapi-call-btn" style="padding:16px 24px; border-radius:12px; background:#0EA5E9; color:#fff; border:none; font-weight:600; cursor:pointer; font-size: 16px; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3); transition: all 0.3s ease;">
              📞 Call our AI Receptionist
            </button>
          </div>
        `;

        // Load VAPI script
        const script = document.createElement('script');
        script.src = 'https://cdn.vapi.ai/widget/vapi.js';
        script.onload = () => {
          try {
            const btn = vapiRef.current?.querySelector('#vapi-call-btn') as HTMLButtonElement;
            if (btn && (window as any).VapiWidget) {
              const widget = new (window as any).VapiWidget({ 
                apiKey: 'f7788667-128a-4c50-87c5-3b35242678f1' 
              });
              btn.addEventListener('click', () => {
                widget.open({ assistantId: 'f77c411a-b720-4755-9ae4-bf41a506e3a4' });
              });
              
              btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'scale(1.05)';
                btn.style.boxShadow = '0 6px 20px rgba(14, 165, 233, 0.4)';
              });
              
              btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'scale(1)';
                btn.style.boxShadow = '0 4px 12px rgba(14, 165, 233, 0.3)';
              });
            }
          } catch (error) {
            console.warn('VAPI initialization error:', error);
          }
        };
        document.head.appendChild(script);
      }
    };

    // Initialize Voiceflow Chatbot
    const initVoiceflow = () => {
      if (voiceflowRef.current && !(window as any).voiceflow) {
        const script = document.createElement('script');
        script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
        script.type = 'text/javascript';
        script.onload = () => {
          try {
            (window as any).voiceflow.chat.load({
              verify: { projectID: '68bc5f762060f9c24a0c9ac6' },
              url: 'https://general-runtime.voiceflow.com',
              versionID: 'production',
              voice: { url: 'https://runtime-api.voiceflow.com' },
              render: { mode: 'embedded', target: voiceflowRef.current },
              theme: {
                general: { color: '#0EA5E9', overlay: false },
                chat: { poweredByTextColor: '#A3AEC2' }
              }
            });
          } catch (error) {
            console.warn('Voiceflow initialization error:', error);
          }
        };
        document.head.appendChild(script);
      }
    };

    // Initialize both with a slight delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initVapi();
      initVoiceflow();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="demos" className="py-section bg-neutral-100">
      <div className="max-w-container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-secondary/10 rounded-pill px-4 py-2 mb-4">
            <span className="text-secondary font-medium text-caption">Live Demos</span>
          </div>
          <h2 className="text-h1 font-bold text-white mb-4">
            Test Our Agents
          </h2>
          <p className="text-body-lg text-neutral-30 max-w-2xl mx-auto">
            Try the AI Voice Caller and Chatbot right here on the page.
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI Voice Caller Demo */}
          <div className="bg-card border border-neutral-70 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-neutral-70">
              <h3 className="text-h3 font-semibold text-white mb-2">
                AI Voice Caller — Book More From Missed Calls
              </h3>
              <p className="text-caption text-secondary font-medium mb-2">
                Calls back in seconds, answers questions, and schedules jobs automatically.
              </p>
              <p className="text-body text-neutral-30">
                Perfect for service businesses losing revenue to voicemail and after-hours calls.
              </p>
            </div>
            <div 
              ref={vapiRef}
              className="h-96 bg-neutral-90 border-t border-neutral-70"
            />
          </div>

          {/* AI Chatbot Demo */}
          <div className="bg-card border border-neutral-70 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-neutral-70">
              <h3 className="text-h3 font-semibold text-white mb-2">
                AI Chatbot — Answer Instantly on Your Site
              </h3>
              <p className="text-caption text-secondary font-medium mb-2">
                Trained on your FAQs, hours, and pricing. Converts questions into bookings.
              </p>
              <p className="text-body text-neutral-30">
                Embed on any page. Capture leads even when your team is busy.
              </p>
            </div>
            <div 
              ref={voiceflowRef}
              className="h-96 bg-neutral-90 border-t border-neutral-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemosSection;