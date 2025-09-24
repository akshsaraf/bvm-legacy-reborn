import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
const EnhancedNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    label: 'Home',
    href: '/',
    id: 'home'
  }, {
    label: 'About',
    href: '/about',
    id: 'about'
  }, {
    label: 'Campus Life',
    href: '/campus-life',
    id: 'campus-life'
  }, {
    label: 'Academics',
    href: '/academics',
    id: 'academics'
  }, {
    label: 'Results',
    href: '/results',
    id: 'results'
  }, {
    label: 'Gallery',
    href: '/gallery',
    id: 'gallery'
  }, {
    label: 'Admissions',
    href: '/admissions',
    id: 'admissions'
  }, {
    label: 'News',
    href: '/news',
    id: 'news'
  }, {
    label: 'Contact',
    href: '/contact',
    id: 'contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const isCurrentPage = (href: string) => {
    return location.pathname === href;
  };
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' : 'bg-transparent'}`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-16 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/lovable-uploads/f6e2ab58-4e8d-4de4-805d-baa1a97d46f2.png" alt="BVM Logo" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <h1 className="font-playfair font-bold text-bvm-navy text-xs">Birla Vidya Mandir</h1>
              <p className="text-xs text-bvm-heritage">Nainital • Since 1947</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => <Link key={item.label} to={item.href} className={`
                  px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
                  relative overflow-hidden group
                  ${isCurrentPage(item.href) ? 'text-bvm-navy bg-bvm-gold/20' : 'text-bvm-heritage hover:text-bvm-navy hover:bg-bvm-sky/20'}
                `}>
                {item.label}
                {isCurrentPage(item.href) && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-bvm-gold animate-fade-in" />}
              </Link>)}
            <Button className="ml-4 bg-bvm-navy hover:bg-bvm-heritage shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
        {isMobileMenuOpen && <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
            <div className="py-4 space-y-1">
              {navItems.map(item => <Link key={item.label} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`
                    block w-full text-left px-4 py-3 text-sm font-medium 
                    transition-colors hover:bg-bvm-sky/20
                    ${isCurrentPage(item.href) ? 'text-bvm-navy bg-bvm-gold/10 border-l-2 border-bvm-gold' : 'text-bvm-heritage hover:text-bvm-navy'}
                  `}>
                  {item.label}
                </Link>)}
              <div className="px-4 pt-2">
                
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default EnhancedNavigation;