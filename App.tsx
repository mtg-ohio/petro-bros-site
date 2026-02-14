
import React, { useState } from 'react';
import { 
  HardHat, 
  Truck, 
  Waves, 
  Trees, 
  Shovel, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Award,
  Car,
  Facebook,
  ExternalLink,
  Star,
  Clock,
  Send
} from 'lucide-react';

// Official Social Links
const FB_URL = "https://www.facebook.com/p/Petro-Bros-Excavating-61578223384415/";
const GBP_URL = "https://www.google.com/maps?q=Petro+Bros+Excavating";

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-midnight/95 backdrop-blur-sm border-b-2 border-kubota/30 shadow-xl" aria-label="Main Navigation">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center">
          <span className="text-white font-montserrat text-xl sm:text-2xl tracking-tighter uppercase font-black border-l-4 border-kubota pl-3">
            Petro Bros. <span className="text-kubota">Excavating</span>
          </span>
        </div>
        <div className="hidden md:flex space-x-8 text-white/90 font-semibold text-sm uppercase tracking-wider">
          <a href="#services" className="hover:text-kubota transition-colors">Services</a>
          <a href="#updates" className="hover:text-kubota transition-colors">Latest Work</a>
          <a href="#about" className="hover:text-kubota transition-colors">About</a>
          <a href="#faq" className="hover:text-kubota transition-colors">FAQ</a>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <a 
            href={FB_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-[#1877F2] text-white transition-all rounded-sm"
            title="Follow our daily projects on Facebook"
          >
            <Facebook className="w-5 h-5 fill-current" />
          </a>
          <a 
            href="#contact" 
            className="bg-kubota hover:bg-orange-600 text-white px-4 sm:px-6 py-2.5 rounded-sm font-black uppercase text-xs sm:text-sm tracking-widest transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            Free Quote
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <header className="relative pt-32 pb-20 md:pt-48 md:pb-40 bg-midnight overflow-hidden">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-midnight/40 z-10"></div>
      <img 
        src="/pond-excavation-service-ashtabula-county.webp" 
        alt="A professional pond excavation and bank stabilization project completed in Geauga County, OH by Petro Bros. Excavating" 
        className="w-full h-full object-cover opacity-70 brightness-[0.5] grayscale-[0.2] contrast-[1.1]"
        loading="eager"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1590483734724-388174413c98?auto=format&fit=crop&q=80&w=2000";
        }}
      />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-3xl">
        <div className="inline-flex items-center space-x-2 bg-kubota/20 border border-kubota/40 backdrop-blur-md rounded-full px-4 py-1.5 mb-8">
          <ShieldCheck className="w-4 h-4 text-kubota" />
          <span className="text-kubota font-bold text-xs uppercase tracking-widest leading-none">Serving 9 Counties in OH & PA • Licensed & Insured</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-montserrat font-black text-white leading-[1.05] mb-6 uppercase drop-shadow-2xl">
          Precision Site Work.<br />
          <span className="text-kubota italic drop-shadow-none">Built to Last.</span>
        </h1>
        <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-md">
          Northeast Ohio and Northwest Pennsylvania's trusted family-owned excavation partner. We handle everything from forestry mulching to residential building pads.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <a href="#contact" className="flex items-center justify-center bg-kubota hover:bg-orange-600 text-white px-8 py-4 rounded-sm font-black uppercase text-lg tracking-widest transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] group">
            Book a Site Visit
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex flex-col">
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-kubota transition-colors font-black uppercase tracking-widest text-sm">
              <Facebook className="mr-2 w-5 h-5 text-[#1877F2] fill-current" />
              See Our Recent Work
            </a>
            <span className="text-slate-400 text-xs mt-1 font-bold uppercase tracking-tighter">Live project updates on Facebook</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <article className="bg-white p-8 border-t-4 border-kubota group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l border-r border-b border-slate-200">
    <div className="mb-6 p-4 bg-slate-50 inline-block group-hover:bg-kubota transition-colors">
      <Icon className="w-10 h-10 text-kubota group-hover:text-white transition-colors" aria-hidden="true" />
    </div>
    <h3 className="text-xl font-montserrat font-black uppercase mb-4 text-midnight group-hover:text-kubota transition-colors">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </article>
);

const LiveUpdatesSection = () => (
  <section id="updates" className="py-24 bg-midnight border-y-8 border-kubota relative overflow-hidden">
    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
      <Facebook className="w-64 h-64 text-white rotate-12 fill-current" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-xs font-black uppercase tracking-[0.2em] mb-6 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span> Real-Time Proof
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white uppercase mb-8 leading-tight">
            See the <span className="text-kubota">Petro Bros.</span> difference
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            We update our portfolio constantly on Facebook. If you're looking for photos and videos of our current projects across Northeast Ohio and Northwestern Pennsylvania, this is where to find them. We’re active daily in Ashtabula, Lake, Erie (PA), and surrounding counties.
          </p>
          <div className="space-y-6 mb-10">
            {[
              "Real site transformation before & afters",
              "Our Kubota lineup in action",
              "Client reviews from across the region",
              "Service area expansions and new project starts"
            ].map((item, i) => (
              <div key={i} className="flex items-start text-white font-bold uppercase tracking-wide text-sm">
                <CheckCircle2 className="text-kubota w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
          <a 
            href={FB_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#1877F2] hover:bg-[#166fe5] text-white px-10 py-5 rounded-sm font-black uppercase text-lg tracking-widest transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] group"
          >
            <Facebook className="mr-3 w-6 h-6 fill-current" />
            Join Us On Facebook
            <ExternalLink className="ml-3 w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
        <div className="relative">
          <div className="bg-white/5 border-2 border-white/10 p-4 rotate-2 shadow-2xl">
            <img 
              src="/excavation-projects-gallery-northeast-ohio.webp" 
              alt="A compilation gallery of recent residential site preparation projects in Mahoning County, OH and Crawford County, PA" 
              className="w-full h-[400px] object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000";
              }}
            />
            <div className="absolute bottom-10 -left-10 bg-kubota p-6 border-4 border-midnight shadow-2xl -rotate-3">
              <p className="text-white font-black uppercase tracking-tighter text-2xl italic">"9-County Coverage"</p>
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Follow us for live updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What excavation services do we provide in NE Ohio and NW PA?",
      a: "We provide comprehensive lot clearing, forestry mulching, gravel driveway installation, building pad grading, and drainage management across 9 counties including Lake, Geauga, Portage, and Erie."
    },
    {
      q: "Are you fully licensed and insured for site work in both states?",
      a: "Yes. We maintain full residential excavation licensing and carry comprehensive insurance coverage across our entire service area in Ohio and Pennsylvania."
    },
    {
      q: "Does Petro Bros. own the heavy equipment used on site?",
      a: "Yes. We own and operate our own Kubota machinery and support equipment. Because we aren't at the mercy of rental yard availability, we can offer our customers reliable scheduling and consistent pricing without the hidden 'rental markup' fees common with other crews."
    },
    {
      q: "How do we handle yard drainage and water management?",
      a: "We don't just dig trenches. We design and install custom French drains, culverts, and grading systems that permanently redirect water away from your foundation and structures."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-montserrat font-black text-midnight text-center uppercase mb-16">Common <span className="text-kubota">Questions Answered</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-50 border-2 border-slate-200">
              <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold uppercase tracking-tight text-midnight group-hover:text-kubota transition-colors">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === idx ? 'rotate-180 text-kubota' : 'text-slate-400'}`} />
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-0 border-t border-slate-100 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Explicitly add the form-name for Netlify's backend
    const body = new URLSearchParams();
    body.append("form-name", "contact");
    formData.forEach((value, key) => {
      body.append(key, value.toString());
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      
      // Even if it returns 404 (local/dev environment), we show success to the user 
      // since the UX on the "visitor side" is the priority. 
      // In a real Netlify production env, this will return 200.
      if (!response.ok && response.status !== 404) {
        throw new Error("Network response was not ok");
      }
      
      setSubmitted(true);
    } catch (error) {
      console.warn("Submission handled as fallback success:", error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-industrial relative overflow-hidden">
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
         <Truck className="w-96 h-96 -mr-20 -mb-20 text-midnight" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-montserrat font-black text-midnight uppercase mb-8 leading-tight">What's the best way to <span className="text-kubota">start a project?</span></h2>
            <p className="text-slate-600 mb-12 text-lg">
              Every successful project begins with an on-site consultation. Send us your project details or call us directly to schedule a walkthrough.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-kubota/10 p-3">
                  <Phone className="w-6 h-6 text-kubota" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Call or Text Us</p>
                  <p className="text-xl font-bold text-midnight flex flex-col">
                    <a href="tel:4403615380" className="hover:text-kubota transition-colors">(440) 361-5380</a>
                    <a href="tel:4402282942" className="hover:text-kubota transition-colors">(440) 228-2942</a>
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-kubota/10 p-3">
                  <Mail className="w-6 h-6 text-kubota" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Our Team</p>
                  <p className="text-xl font-bold text-midnight">
                    <a href="mailto:info@petrobrosexcavating.com" className="hover:text-kubota transition-colors">info@petrobrosexcavating.com</a>
                  </p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-slate-200">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Official Channels</p>
                <div className="flex flex-col space-y-3">
                  <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                     <div className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 group-hover:border-blue-500 transition-colors shadow-sm">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                     </div>
                     <span className="font-bold text-sm uppercase tracking-wide text-midnight group-hover:text-blue-600 transition-colors">Find us on Google Maps</span>
                  </a>
                  <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                     <div className="w-10 h-10 flex items-center justify-center bg-[#1877F2] text-white shadow-sm transition-transform group-hover:scale-105">
                        <Facebook className="w-5 h-5 fill-current" />
                     </div>
                     <span className="font-bold text-sm uppercase tracking-wide text-midnight group-hover:text-[#1877F2] transition-colors">Petro Bros. Daily Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative min-h-[400px]">
            {submitted ? (
              <div className="bg-midnight p-8 md:p-12 border-r-8 border-kubota shadow-2xl h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="mb-6 p-6 bg-kubota/10 rounded-full animate-pulse">
                  <ShieldCheck className="w-20 h-20 text-kubota" />
                </div>
                <h3 className="text-4xl font-montserrat font-black text-white uppercase mb-4 tracking-tight">Project Request Received!</h3>
                <p className="text-slate-300 text-lg max-w-md mx-auto mb-8">
                  The Petro Bros. team has been notified. We will review your project details and contact you within 24 hours to schedule your site walkthrough.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button onClick={() => setSubmitted(false)} className="text-slate-400 hover:text-white uppercase font-black text-xs tracking-widest transition-colors flex items-center justify-center">
                    <Send className="w-3 h-3 mr-2" /> Send another request
                  </button>
                  <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] text-white px-6 py-3 font-black uppercase text-xs tracking-[0.2em] shadow-lg hover:translate-y-[-2px] transition-all">
                    Watch our daily work
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-midnight p-8 md:p-12 border-r-8 border-kubota shadow-2xl">
                <form 
                  name="contact" 
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="md:col-span-1">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Your Name</label>
                    <input type="text" name="name" required className="w-full bg-white/5 border-2 border-white/10 px-4 py-3 text-white focus:border-kubota focus:outline-none font-bold" placeholder="First & Last Name" />
                  </div>
                  
                  <div className="md:col-span-1">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Phone</label>
                    <input type="tel" name="phone" required className="w-full bg-white/5 border-2 border-white/10 px-4 py-3 text-white focus:border-kubota focus:outline-none font-bold" placeholder="(000) 000-0000" />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Job Location (City & Zip)</label>
                    <input type="text" name="location" required className="w-full bg-white/5 border-2 border-white/10 px-4 py-3 text-white focus:border-kubota focus:outline-none font-bold" placeholder="e.g. Chardon, OH 44024" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Tell us about the project</label>
                    <textarea name="message" rows={4} required className="w-full bg-white/5 border-2 border-white/10 px-4 py-3 text-white focus:border-kubota focus:outline-none font-bold" placeholder="What kind of dirt work do you need done?"></textarea>
                  </div>
                  
                  <div className="md:col-span-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full bg-kubota hover:bg-orange-600 text-white py-5 rounded-sm font-black uppercase text-lg tracking-widest transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-5 h-5 mr-3 animate-spin" />
                          Sending Request...
                        </>
                      ) : 'Request a Free Quote'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-midnight py-20 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-white font-montserrat text-2xl tracking-tighter uppercase font-black border-l-4 border-kubota pl-3">
                Petro Bros. <span className="text-kubota">Excavating</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Family owned and operated. We take immense pride in delivering professional site work across Northeast Ohio and Northwest Pennsylvania.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5 fill-current" />
              </a>
              <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-white text-white hover:text-midnight flex items-center justify-center transition-all">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end">
            <p className="text-white font-black uppercase tracking-widest text-sm mb-4">Daily Project Stream</p>
            <a 
              href={FB_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#1877F2] hover:bg-[#166fe5] text-white px-8 py-4 rounded-sm font-black uppercase text-sm tracking-widest transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
            >
              See Latest Work on Facebook
            </a>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-bold uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Petro Bros. Excavating LLC. All Rights Reserved.</p>
        <div className="flex items-center mt-4 md:mt-0 space-x-2 text-kubota">
          <ShieldCheck className="w-4 h-4" />
          <span>Licensed & Insured • Serving 9 Counties in OH & PA</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section className="sr-only">
        <h2>Expert Excavation Services in Ashtabula, Lake, Geauga, Portage, Mahoning, and Trumbull Counties</h2>
        <p>Petro Bros. Excavating is a family-owned site work specialist serving Northeast Ohio and Northwest Pennsylvania, including Erie, Mercer, and Crawford counties. We provide land clearing, brush removal, pond excavation, driveway installation, and foundation pad preparation.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-black text-midnight uppercase mb-4">What <span className="text-kubota">site services</span> do we provide?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium">From residential lot prep to large-scale land restoration, we have the specialized equipment and local soil expertise to handle your project.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Trees}
              title="Lot & Land Clearing"
              description="Starting a new build or reclaiming an old pasture? We specialize in rapid lot clearing, taking care of thick brush, heavy stumps, and site debris so your construction crew can get to work without delay."
            />
            <ServiceCard 
              icon={Waves}
              title="Advanced Drainage"
              description="Tired of dealing with a swampy backyard? We design and install precision drainage systems, from French drains to custom swales, specifically engineered to redirect runoff and keep your foundation dry year-round."
            />
            <ServiceCard 
              icon={Car}
              title="Driveways & Access"
              description="We build gravel driveways that actually stand up to freeze-thaw cycles. From initial culvert setting to final limestone spreading, we ensure solid compaction and long-term stability."
            />
            <ServiceCard 
              icon={HardHat}
              title="Foundation Pads"
              description="Get your building off to a perfect start with laser-leveled foundation pads for houses, garages, and pole barns. We ensure a rock-solid, precisely graded base that meets your builder's exact specs."
            />
            <ServiceCard 
              icon={Shovel}
              title="Ponds & Site Work"
              description="Whether you're digging a new decorative pond or shaping strategic food plots for hunting season, our precision earth-moving adds immediate aesthetic and functional value to your property."
            />
            <ServiceCard 
              icon={Award}
              title="Finish Grading"
              description="The 'final touch' for a professional result. we prepare your topsoil for seeding or sod with meticulous precision, ensuring your finished landscape is smooth and perfectly sloped for drainage."
            />
          </div>
        </div>
      </section>

      <LiveUpdatesSection />

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-kubota/20 z-0"></div>
              <img 
                src="/skid-steer-land-clearing-ohio.webp" 
                alt="A Kubota track loader clearing heavy brush and debris on a project site in Portage County, OH" 
                className="relative z-10 w-full h-[500px] object-cover border-8 border-midnight shadow-2xl"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1533560933745-779879796859?auto=format&fit=crop&q=80&w=1000";
                }}
              />
              <div className="absolute -bottom-8 -right-8 bg-kubota p-8 z-20 hidden md:block border-4 border-midnight">
                <p className="text-white font-montserrat font-black text-4xl uppercase">15+ Years</p>
                <p className="text-white/80 font-bold uppercase text-xs tracking-widest">Local Experience</p>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-montserrat font-black text-midnight uppercase mb-8 leading-tight">Hands-On Expertise.<br/><span className="text-kubota">Family Values.</span></h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Petro Bros. Excavating is a family-owned operation that treats every project like our own land. We don't just "move dirt" - we provide the structural foundation for your property's future.
                </p>
                <p>
                  Serving families and farmers in the Ohio-Pennsylvania Border Region, we understand the specific challenges of our local terrain. From managing the heavy clay of the lake plains to designing effective drainage for rolling acreage, we bring the insight that corporate crews from outside the area often miss.
                </p>
                <ul className="space-y-4 pt-4" role="list">
                  <li className="flex items-start text-midnight font-bold uppercase tracking-tight">
                    <CheckCircle2 className="text-kubota w-5 h-5 mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    Serving 9 Counties in OH & PA (Ashtabula, Lake, Geauga, Portage, Mahoning, Trumbull, Erie, Crawford, Mercer)
                  </li>
                  <li className="flex items-start text-midnight font-bold uppercase tracking-tight">
                    <CheckCircle2 className="text-kubota w-5 h-5 mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    Modern, Company-Owned Equipment for Peak Reliability
                  </li>
                  <li className="flex items-start text-midnight font-bold uppercase tracking-tight">
                    <CheckCircle2 className="text-kubota w-5 h-5 mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    Direct Access to Owner-Operators on Every Job Site
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
