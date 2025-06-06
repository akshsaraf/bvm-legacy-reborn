import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const EnhancedNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [{
    label: 'Home',
    href: '#hero',
    id: 'hero'
  }, {
    label: 'About',
    href: '#about',
    id: 'about'
  }, {
    label: 'Why BVM',
    href: '#why-bvm',
    id: 'why-bvm'
  }, {
    label: 'Academics',
    href: '#academics',
    id: 'academics'
  }, {
    label: 'Gallery',
    href: '#gallery',
    id: 'gallery'
  }, {
    label: 'Contact',
    href: '#contact',
    id: 'contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' : 'bg-transparent'}`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-16 px-0 py-[68px]">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            
            <div>
              <h1 className="font-playfair font-bold text-lg text-bvm-navy"></h1>
              <p className="text-xs text-bvm-heritage">
            </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className={`
                  px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
                  relative overflow-hidden group
                  ${activeSection === item.id ? 'text-bvm-navy bg-bvm-gold/20' : 'text-bvm-heritage hover:text-bvm-navy hover:bg-bvm-sky/20'}
                `}>
                {item.label}
                {activeSection === item.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-bvm-gold 
                                animate-fade-in" />}
              </button>)}
            <Button className="ml-4 bg-bvm-navy hover:bg-bvm-heritage shadow-lg 
                             hover:shadow-xl transition-all duration-300 hover:scale-105">
              Admission Inquiry
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block w-full h-0.5 bg-bvm-navy transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-bvm-navy transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-bvm-navy transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border 
                        animate-fade-in">
            <div className="py-4 space-y-1">
              {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className={`
                    block w-full text-left px-4 py-3 text-sm font-medium 
                    transition-colors hover:bg-bvm-sky/20
                    ${activeSection === item.id ? 'text-bvm-navy bg-bvm-gold/10 border-l-2 border-bvm-gold' : 'text-bvm-heritage hover:text-bvm-navy'}
                  `}>
                  {item.label}
                </button>)}
              <div className="px-4 pt-2">
                <Button className="w-full bg-bvm-navy hover:bg-bvm-heritage">
                  Admission Inquiry
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default EnhancedNavigation;