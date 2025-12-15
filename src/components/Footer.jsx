import { Truck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--text-main)] text-[var(--bg-main)] py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
           <Truck size={24} className="text-[var(--primary)]" />
           <span className="font-bold text-xl tracking-tighter">TURBO<span className="text-[var(--primary)]">HAUL</span></span>
        </div>

        <div className="text-sm opacity-60">
            © 2025 TurboHaul Logistics LLC. All Rights Reserved.
        </div>

        <div className="flex gap-6 font-bold text-sm">
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Terms</a>
            <a href="mailto:admin@turbohaul.com" className="hover:text-[var(--primary)] transition-colors">Email Us</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;