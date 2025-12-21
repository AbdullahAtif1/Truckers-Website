import { useState } from 'react';
import { ShieldCheck, MapPin, FileText, PhoneCall, Zap, Box, Navigation, Lock, Download, X, CheckCircle, Star, Clock, Activity } from 'lucide-react';
import redTruckImg from '../assets/imgs/Gemini_Generated_Image_52fk4n52fk4n52fk.png';
import driverImg from '../assets/imgs/Gemini_Generated_Image_uq8qxkuq8qxkuq8q.png';


const Home = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');

  const handleDownload = (docName) => {
    if (!isUnlocked) { setShowModal(true); return; }
    const element = document.createElement("a");
    const file = new Blob([`Secure Doc: ${docName}`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${docName.replace(/\s+/g, '_')}_COPY.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleUnlock = (e) => {
    e.preventDefault();
    if (accessCode.toUpperCase() === 'TRUCK2025') {
      setIsUnlocked(true); setShowModal(false); setError('');
    } else { setError('Invalid Code. Try "TRUCK2025"'); }
  };

  return (
    <div id="home" className="pt-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] rounded-tl-xl rounded-br-xl border-l-4 border-[var(--primary)]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-[var(--text-muted)]">Active & Insured • DOT# 394821</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
              PRECISION <br />
              <span className="text-gradient">HEAVY HAUL</span> <br />
              LOGISTICS
            </h1>
            
            <p className="text-xl text-[var(--text-muted)] max-w-lg">
              Owner-Operator based in Texas. Delivering precision, safety, and speed for high-value freight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* TRAPEZIUM BUTTONS (.clip-trap) */}
              <a href="tel:5550199" className="clip-trap flex items-center justify-center gap-2 bg-[var(--primary)] text-[var(--bg-main)] px-8 py-4 font-black text-lg hover-lift">
                <PhoneCall size={20} />
                CALL DISPATCH
              </a>
              <a href="#documents" className="clip-trap flex items-center justify-center gap-2 bg-[var(--bg-secondary)] text-[var(--text-main)] border border-[var(--text-muted)] px-8 py-4 font-bold text-lg hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] transition-colors">
                BROKER PACKET
              </a>
            </div>
          </div>

          {/* HERO IMAGE RESTORED - African American Driver */}
          <div className="relative hidden lg:block h-full">
            <div className="clip-trap relative z-10 bg-gray-800 aspect-[4/5] shadow-2xl">
               <img 
                 src={redTruckImg} 
                 alt="53' Dry Van" 
                 className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
               />
               <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8">
                  <p className="text-white font-black text-2xl uppercase">Ready to Roll</p>
                  <p className="text-[var(--primary)] font-bold">53' Dry Van Available</p>
               </div>
            </div>
            {/* Decoration Border */}
            <div className="clip-trap absolute -z-10 top-6 -right-6 w-full h-full border-2 border-[var(--primary)] opacity-50"></div>
          </div>

        </div>
      </section>

      {/* 2. AUTHORITY STRIP (Fixed ID) */}
      <section id="authority" className="bg-[var(--bg-card)] border-y border-[var(--border)] py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">Motor Carrier</span>
            <span className="text-3xl font-black font-mono text-[var(--text-main)]">MC# 1234567</span>
          </div>
          <div className="h-10 w-px bg-[var(--border)] hidden md:block"></div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">US DOT</span>
            <span className="text-3xl font-black font-mono text-[var(--text-main)]">DOT# 9876543</span>
          </div>
          <div className="h-10 w-px bg-[var(--border)] hidden md:block"></div>
          <div className="flex items-center gap-3 bg-[var(--bg-secondary)] px-6 py-3 clip-trap border border-[var(--border)]">
            <ShieldCheck className="text-[var(--primary)]" size={32} />
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-[var(--text-main)]">$1M Liability</span>
              <span className="text-xs font-bold text-[var(--text-muted)]">Verified Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET THE OPERATOR */}
      <section className="py-24 bg-[var(--bg-main)]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           {/* Image Side - African American Driver Portrait */}
            <div className="relative group">
              <div className="clip-trap absolute -inset-4 bg-[var(--primary)] opacity-20 group-hover:rotate-1 transition-transform duration-500"></div>
              <img 
                src={driverImg} 
                alt="Driver Portrait" 
                className="clip-trap relative shadow-2xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md px-6 py-4 border-l-4 border-[var(--primary)] shadow-lg">
                <p className="font-black text-xl uppercase text-white">Marcus "Turbo" King</p>
                <p className="text-sm text-[var(--text-muted)] text-gray-400 font-bold">Owner & Lead Operator</p>
              </div>
            </div>

           <div className="space-y-6">
              <h2 className="text-4xl font-black uppercase">More Than A Truck. <br /><span className="text-[var(--primary)]">A Promise.</span></h2>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                "I started this authority to kill the anxiety brokers feel when they hang up the phone. When you book with me, you aren't guessing where your freight is. You get my personal cell, 24/7 tracking, and a guarantee that I treat your customer's cargo like it's my own family."
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                 <div className="p-4 bg-[var(--bg-secondary)] clip-trap border border-[var(--border)]">
                    <Clock className="text-[var(--primary)] mb-2" />
                    <div className="font-bold text-2xl">15+</div>
                    <div className="text-xs opacity-60 uppercase">Years Experience</div>
                 </div>
                 <div className="p-4 bg-[var(--bg-secondary)] clip-trap border border-[var(--border)]">
                    <Activity className="text-[var(--primary)] mb-2" />
                    <div className="font-bold text-2xl">2M+</div>
                    <div className="text-xs opacity-60 uppercase">Safe Miles</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. BROKER REVIEWS */}
      <section className="py-20 bg-[var(--bg-secondary)] clip-angle">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-black uppercase">Broker <span className="text-gradient">Trust</span></h2>
             <p className="text-[var(--text-muted)]">Don't take my word for it.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Sarah J.", company: "TQL", text: "Best communication I've had all year. Driver was early for pickup and delivery." },
                { name: "Mike R.", company: "CH Robinson", text: "Clean equipment, professional attitude. Saved a load that another carrier dropped." },
                { name: "David L.", company: "Landstar", text: "Zero issues. Paperwork was in my inbox before he even left the receiver." }
              ].map((review, i) => (
                <div key={i} className="bg-[var(--bg-card)] p-8 clip-trap shadow-lg border-b-4 border-[var(--primary)] relative hover-lift">
                   <div className="flex text-[var(--primary)] mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <p className="italic text-[var(--text-muted)] mb-6">"{review.text}"</p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center font-bold text-[var(--text-main)]">
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{review.name}</p>
                        <p className="text-xs opacity-50 uppercase">{review.company}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. EQUIPMENT */}
      <section id="equipment" className="py-24 bg-[var(--bg-main)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl font-black uppercase">The <span className="text-[var(--primary)]">Hardware</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {/* Large Card */}
             <div className="md:col-span-2 bg-[var(--bg-card)] p-8 clip-trap border border-[var(--border)] hover-lift flex flex-col justify-between h-64 relative overflow-hidden group">
                <div className="z-10 relative">
                   <Zap size={40} className="text-[var(--primary)] mb-4"/>
                   <h3 className="text-2xl font-bold">2024 Peterbilt 579</h3>
                   <p className="text-[var(--text-muted)] mt-2 max-w-sm">Equipped with APU, Chains, and full PPE. maintained weekly.</p>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-[var(--bg-secondary)] to-transparent group-hover:scale-110 transition-transform"></div>
             </div>
             {/* Small Card */}
             <div className="bg-[var(--bg-card)] p-8 clip-trap border border-[var(--border)] hover-lift flex flex-col justify-between h-64">
                <Box size={40} className="text-[var(--primary)]"/>
                <div>
                  <h3 className="text-xl font-bold">53' Reefer</h3>
                  <p className="text-sm text-[var(--text-muted)] mt-1">Temp Control -20° to 80°</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. LANES */}
      <section id="lanes" className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black uppercase mb-8">Service <span className="text-[var(--primary)]">Area</span></h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['TEXAS', 'OKLAHOMA', 'ARKANSAS', 'LOUISIANA', 'TENNESSEE', 'GEORGIA', 'FLORIDA'].map(state => (
                <span key={state} className="clip-trap px-6 py-3 bg-[var(--bg-card)] border-l-4 border-[var(--primary)] font-bold shadow-sm hover:scale-110 transition-transform cursor-default">
                  {state}
                </span>
              ))}
            </div>
            <div className="mt-12 p-8 bg-[var(--bg-card)] inline-block clip-trap border border-[var(--border)]">
               <div className="flex items-center gap-4">
                 <div className="p-3 bg-[var(--bg-secondary)] text-[var(--primary)] rounded-full"><Navigation size={24}/></div>
                 <div className="text-left">
                   <p className="font-bold text-lg">Preferred Lane</p>
                   <p className="text-[var(--text-muted)]">I-35 Corridor & I-10 Eastbound</p>
                 </div>
               </div>
            </div>
        </div>
      </section>

      {/* 7. DOCUMENTS */}
      <section id="documents" className="py-24 bg-[var(--bg-main)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-10">
              <h2 className="text-3xl font-black uppercase mb-2">Broker <span className="text-[var(--primary)]">Packet</span></h2>
              <p className="text-[var(--text-muted)] flex items-center justify-center gap-2 text-sm">
                {isUnlocked ? <><CheckCircle size={14} className="text-green-500" /> SECURE ACCESS GRANTED</> : <><Lock size={14} /> LOCKED: VERIFIED BROKERS ONLY</>}
              </p>
            </div>
            
            <div className={`bg-[var(--bg-card)] p-10 clip-trap border-2 ${isUnlocked ? 'border-[var(--primary)] shadow-2xl shadow-[var(--primary)]/10' : 'border-[var(--border)]'} transition-all duration-500`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['W-9 Form', 'MC Authority', 'Insurance Cert'].map((doc, i) => (
                        <button 
                          key={i} 
                          onClick={() => handleDownload(doc)}
                          className={`flex flex-col items-center justify-center p-6 clip-trap border transition-all 
                            ${isUnlocked 
                              ? 'bg-[var(--bg-secondary)] border-[var(--border)] hover:bg-[var(--primary)] hover:text-[var(--bg-main)] hover:-translate-y-1' 
                              : 'bg-gray-100/10 border-dashed border-gray-500/30 opacity-50 cursor-not-allowed'
                            }`}
                        >
                            {isUnlocked ? <Download size={32} className="mb-3"/> : <Lock size={32} className="mb-3"/>}
                            <span className="font-bold text-sm">{doc}</span>
                        </button>
                    ))}
                </div>
                {!isUnlocked && (
                  <button onClick={() => setShowModal(true)} className="mt-8 clip-trap bg-[var(--text-main)] text-[var(--bg-main)] px-10 py-3 font-bold hover:opacity-90 transition-opacity">
                    ENTER ACCESS CODE
                  </button>
                )}
            </div>
        </div>
      </section>

      {/* SECURITY MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in zoom-in duration-200">
          <div className="clip-trap bg-[var(--bg-card)] w-full max-w-sm p-8 shadow-2xl border-t-4 border-[var(--primary)] relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-main)]"><X size={20} /></button>
            <ShieldCheck size={40} className="mx-auto text-[var(--primary)] mb-4" />
            <h3 className="text-xl font-black text-center mb-1">Identity Check</h3>
            <p className="text-[var(--text-muted)] text-xs text-center mb-6">Enter code: TRUCK2025</p>
            <form onSubmit={handleUnlock}>
                <input type="text" value={accessCode} onChange={(e) => setAccessCode(e.target.value)} placeholder="ACCESS CODE" className="w-full text-center font-mono text-xl py-3 rounded bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--primary)] outline-none uppercase mb-4" />
                {error && <p className="text-red-500 text-xs text-center mb-4">{error}</p>}
                <button type="submit" className="w-full bg-[var(--primary)] text-[var(--bg-main)] font-bold py-3 hover:brightness-110">UNLOCK</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;