import { useState } from 'react';
import { useStore } from '../Store';
import { Menu, X, Truck, Palette } from 'lucide-react';

const Navbar = () => {
  const { cycleTheme } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Authority', href: '#authority' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'Lanes', href: '#lanes' },
    { name: 'Docs', href: '#documents' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--bg-main)]/80 border-b border-[var(--border)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={(e) => handleScroll(e, '#home')}>
            <div className="p-2 bg-[var(--primary)] text-[var(--bg-main)] clip-trap">
              <Truck size={24} />
            </div>
            <span className="font-bold text-2xl tracking-tighter">
              TURBO<span className="text-[var(--primary)]">HAUL</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="hover:text-[var(--primary)] px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              {/* THE BOUNCY THEME BUTTON */}
              <button 
                onClick={cycleTheme}
                className="p-3 rounded-full animate-attention transition-colors"
                title="Change Theme"
              >
                <Palette size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden gap-4 items-center">
             {/* Also animate on mobile so they see it there too */}
             <button 
                onClick={cycleTheme}
                className="p-2 rounded-full animate-attention transition-colors"
            >
                <Palette size={20} />
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--text-main)] hover:text-[var(--primary)] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[var(--bg-card)] border-b border-[var(--border)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-4 rounded-md text-base font-bold text-center hover:bg-[var(--bg-secondary)] hover:text-[var(--primary)]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;