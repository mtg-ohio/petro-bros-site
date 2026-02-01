
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
  Star
} from 'lucide-react';

// Official Social Links
const FB_URL = "https://www.facebook.com/p/Petro-Bros-Excavating-61578223384415/";
const GBP_URL = "https://www.google.com/maps?q=Petro+Bros+Excavating"; // Generic search link until exact CID is provided

// --- Sub-components ---

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-midnight/95 backdrop-blur-sm border-b-2 border-kubota/30 shadow-xl">
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
            title="Follow us on Facebook"
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
        src="./pond-excavation-service-ashtabula-county.webp" 
        alt="Petro Bros. Excavating performing pond restoration and embankment clearing in Rome Township, Ashtabula County, Ohio" 
        className="w-full h-full object-cover opacity-70 brightness-[0.5] grayscale-[0.2] contrast-[1.1]"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1590483734724-388174413c98?auto=format&fit=crop&q=80&w=2000";
        }}
      />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-3xl">
        <div className="inline-flex items-center space-x-2 bg-kubota/20 border border-kubota/40 backdrop-blur-md rounded-full px-4 py-1.5 mb-8">
          <ShieldCheck className="w-4 h-4 text-kubota" />
          <span className="text-kubota font-bold text-xs uppercase tracking-widest leading-none">Licensed & Insured • Serving OH & PA</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-montserrat font-black text-white leading-[1.05] mb-6 uppercase drop-shadow-2xl">
          Precision Site Work.<br />
          <span className="text-kubota italic drop-shadow-none">Built to Last.</span>
        </h1>
        <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-md">
          Northeast Ohio & Northwest Pennsylvania's premier family-owned excavation partner. 
          Specializing in land clearing, drainage, and utility prep with heavy-duty reliability.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <a href="#contact" className="flex items-center justify-center bg-kubota hover:bg-orange-600 text-white px-8 py-4 rounded-sm font-black uppercase text-lg tracking-widest transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] group">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex flex-col">
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-kubota transition-colors font-black uppercase tracking-widest text-sm">
              <Facebook className="mr-2 w-5 h-5 text-[#1877F2] fill-current" />
              See Daily Project Updates
            </a>
            <span className="text-slate-400 text-xs mt-1 font-bold uppercase tracking-tighter">Live photos & videos on Facebook</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 border-t-4 border-kubota group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l border-r border-b border-slate-200">
    <div className="mb-6 p-4 bg-slate-50 inline-block group-hover:bg-kubota transition-colors">
      <Icon className="w-10 h-10 text-kubota group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-montserrat font-black uppercase mb-4 text-midnight group-hover:text-kubota transition-colors">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
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
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span> Live Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white uppercase mb-8 leading-tight">
            See Us In <span className="text-kubota">Action</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            We're busy moving dirt every day. For the most recent project photos, equipment videos, and site updates, follow our journey on Facebook.
          </p>
          <div className="space-y-6 mb-10">
            {[
              "Before & After Site Transformations",
              "Equipment & Fleet Spotlights",
              "Real-time Project Timelines",
              "Community Updates & Service Areas"
            ].map((item, i) => (
              <div key={i} className="flex items-center text-white font-bold uppercase tracking-wide text-sm">
                <CheckCircle2 className="text-kubota w-5 h-5 mr-3" />
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
            Visit Our Facebook Page
            <ExternalLink className="ml-3 w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
        <div className="relative">
          <div className="bg-white/5 border-2 border-white/10 p-4 rotate-2 shadow-2xl">
            <img 
              src="./excavation-projects-gallery-northeast-ohio.webp" 
              alt="Gallery of excavation projects including land clearing, driveway installation, and pond work in Northeast Ohio" 
              className="w-full h-[400px] object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000";
              }}
            />
            <div className="absolute bottom-10 -left-10 bg-kubota p-6 border-4 border-midnight shadow-2xl -rotate-3">
              <p className="text-white font-black uppercase tracking-tighter text-2xl italic">"Real Site Work"</p>
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Updated Weekly on FB</p>
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
      q: "What areas do you serve?",
      a: "We primarily serve Ashtabula, Lake, and Trumbull counties in Ohio, as well as Erie and Crawford counties in Pennsylvania."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes, we are fully licensed for residential excavation and carry comprehensive liability insurance to protect our clients and their property."
    },
    {
      q: "Do you own your equipment?",
      a: "Absolutely. Owning our fleet allows us to maintain the highest safety standards and guarantees our machines are ready whenever your schedule demands."
    },
    {
      q: "Can you help with drainage issues?",
      a: "Drainage is one of our specialties. From French drains and curtain drains to full-scale retention pond management, we find permanent solutions for water issues."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-montserrat font-black text-midnight text-center uppercase mb-16">Frequently <span className="text-kubota">Asked Questions</span></h2>
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

const Contact = () => (
  <section id="contact" className="py-24 bg-industrial relative overflow-hidden">
    <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
       <Truck className="w-96 h-96 -mr-20 -mb-20 text-midnight" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-montserrat font-black text-midnight uppercase mb-8 leading-tight">Ready to <span className="text-kubota">Move Dirt?</span></h2>
          <p className="text-slate-600 mb-12 text-lg">
            Let's discuss your project. We'll walk the site with you and provide a detailed, no-nonsense quote.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-kubota/10 p-3">
                <Phone className="w-6 h-6 text-kubota" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Call or Text</p>
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
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Us</p>
                <p className="text-xl font-bold text-midnight">
                  <a href="mailto:info@petrobrosexcavating.com" className="hover:text-kubota transition-colors">info@petrobrosexcavating.com</a>
                </p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-200">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Official Profiles</p>
              <div className="flex flex-col space-y-3">
                <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                   <div className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 group-hover:border-blue-500 transition-colors shadow-sm">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                   </div>
                   <span className="font-bold text-sm uppercase tracking-wide text-midnight group-hover:text-blue-600 transition-colors">Check Reviews on Google</span>
                </a>
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                   <div className="w-10 h-10 flex items-center justify-center bg-[#1877F2] text-white shadow-sm transition-transform group-hover:scale-105">
                      <Facebook className="w-5 h-5 fill-current" />
                   </div>
                   <span className="font-bold text-sm uppercase tracking-wide text-midnight group-hover:text-[#1877F2] transition-colors">Project Gallery (Facebook)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 bg-midnight p-8 md:p-12 border-r-8 border-kubota shadow-2xl">
          <form name="contact" method="POST" data-netlify="true" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
              <input type="text" name="name" required className="w-full bg-white/5 border-2 border-white/10 px-4 py-3 text-white focus:border-kubota focus:outline-none font-bold" />
            </div>
            
            <div className="md:col-span-1">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Phone Number</label>
              <input type="tel" name="phone" required className="w-full bg-white/5 border-2 border-white/10 px-4 py-3 text-white focus:border-kubota focus:outline-none font-bold" />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Project Location (City/Zip)</label>
              <input type="text" name="location" required className="w-full bg-white/5 border-2 border-white/10 px-4 py-3 text-white focus:border-kubota focus:outline-none font-bold" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Project Details</label>
              <textarea name="message" rows={4} required className="w-full bg-white/5 border-2 border-white/10 px-4 py-3 text-white focus:border-kubota focus:outline-none font-bold"></textarea>
            </div>
            
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-kubota hover:bg-orange-600 text-white py-5 rounded-sm font-black uppercase text-lg tracking-widest transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
                Send Quote Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

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
              Family owned and operated. Bringing local expertise to every scoop, trench, and building pad across Ohio and Pennsylvania.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5 fill-current" />
              </a>
              <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-white text-midnight flex items-center justify-center transition-all">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end">
            <p className="text-white font-black uppercase tracking-widest text-sm mb-4">Follow Daily Updates</p>
            <a 
              href={FB_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#1877F2] hover:bg-[#166fe5] text-white px-8 py-4 rounded-sm font-black uppercase text-sm tracking-widest transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
            >
              Recent Projects on Facebook
            </a>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-bold uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Petro Bros. Excavating LLC. All Rights Reserved.</p>
        <div className="flex items-center mt-4 md:mt-0 space-x-2 text-kubota">
          <ShieldCheck className="w-4 h-4" />
          <span>Licensed & Insured • Serving OH & PA</span>
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
      
      {/* Hidden SEO/LLM Summary Section */}
      <section className="sr-only">
        <h2>Key Takeaways for Petro Bros. Excavating</h2>
        <p>Family-owned excavation business specializing in residential and agricultural site work across Northeast Ohio and Northwest Pennsylvania. Key services include land clearing, drainage solutions (French drains, ponds), building pad preparation, and finish grading. They own their own heavy equipment for maximum efficiency and scheduling reliability. Fully licensed and insured with local soil and utility expertise.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-black text-midnight uppercase mb-4">Our <span className="text-kubota">Capabilities</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium">From custom food plots to commercial building pads, we have the machinery and experience to handle jobs of any scale.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Trees}
              title="Land Clearing"
              description="Heavy-duty vegetation removal, forestry mulching, stump grinding, and site prep for new construction or pasture restoration."
            />
            <ServiceCard 
              icon={Waves}
              title="Drainage Solutions"
              description="Expert grading and trenching to solve water pooling issues, protect foundations, and manage runoff."
            />
            <ServiceCard 
              icon={Car}
              title="Driveways"
              description="Complete installation and repair of gravel driveways, culverts, and heavy-use access roads."
            />
            <ServiceCard 
              icon={HardHat}
              title="Building Pads"
              description="Laser-leveled pads for homes, barns, and outbuildings, ensuring a rock-solid foundation for your structure."
            />
            <ServiceCard 
              icon={Shovel}
              title="Ponds & Food Plots"
              description="Custom pond excavation and strategic food plot design to enhance your property's value and wildlife potential."
            />
            <ServiceCard 
              icon={Award}
              title="Finish Grading"
              description="The final touch for a perfect landscape. We prepare the soil for seeding or sod with meticulous precision."
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
                src="./skid-steer-land-clearing-ohio.webp" 
                alt="Kubota skid steer performing professional land clearing and site preparation in Northeast Ohio" 
                className="relative z-10 w-full h-[500px] object-cover border-8 border-midnight shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1533560933745-779879796859?auto=format&fit=crop&q=80&w=1000";
                }}
              />
              <div className="absolute -bottom-8 -right-8 bg-kubota p-8 z-20 hidden md:block border-4 border-midnight">
                <p className="text-white font-montserrat font-black text-4xl uppercase">15+ Years</p>
                <p className="text-white/80 font-bold uppercase text-xs tracking-widest">Local Experience</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-montserrat font-black text-midnight uppercase mb-8 leading-tight">Hands-On Expertise.<br/><span className="text-kubota">Family Values.</span></h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  As a family-owned business, we understand that your property is your greatest investment. We don't just "move dirt" - we provide the foundation for your future plans.
                </p>
                <p>
                  We bring deep knowledge of local soil types, from heavy clay to sandy loam, ensuring that our drainage and grading solutions are engineered for the specific challenges of the Ohio and Pennsylvania landscape.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center text-midnight font-bold uppercase tracking-tight">
                    <CheckCircle2 className="text-kubota w-5 h-5 mr-3" />
                    Licensed, Bonded & Fully Insured
                  </li>
                  <li className="flex items-center text-midnight font-bold uppercase tracking-tight">
                    <CheckCircle2 className="text-kubota w-5 h-5 mr-3" />
                    Company-Owned Heavy Equipment
                  </li>
                  <li className="flex items-center text-midnight font-bold uppercase tracking-tight">
                    <CheckCircle2 className="text-kubota w-5 h-5 mr-3" />
                    Zero Sub-Contractors on Site
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
