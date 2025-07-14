
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const EnhancedNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/', id: 'home' },
    { 
      label: 'About', 
      href: '/about', 
      id: 'about',
      dropdown: [
        { label: 'School History', href: '/about#history' },
        { label: 'Principal\'s Desk', href: '/about#principal' },
        { label: 'Vision & Values', href: '/about#vision' }
      ]
    },
    { 
      label: 'Campus Life', 
      href: '/campus-life', 
      id: 'campus-life',
      dropdown: [
        { label: 'Daily Schedule', href: '/campus-life#schedule' },
        { label: 'Hostel Life', href: '/campus-life#hostel' },
        { label: 'Traditions', href: '/campus-life#traditions' },
        { label: 'Events', href: '/campus-life#events' }
      ]
    },
    { 
      label: 'Academics', 
      href: '/academics', 
      id: 'academics',
      dropdown: [
        { label: 'CBSE Curriculum', href: '/academics#curriculum' },
        { label: 'Results', href: '/academics#results' },
        { label: 'Achievements', href: '/academics#achievements' }
      ]
    },
    { 
      label: 'Gallery', 
      href: '/gallery', 
      id: 'gallery',
      dropdown: [
        { label: 'Campus Photos', href: '/gallery#campus' },
        { label: 'Student Art', href: '/gallery#art' },
        { label: 'Events', href: '/gallery#events' }
      ]
    },
    { 
      label: 'Admissions', 
      href: '/admissions', 
      id: 'admissions',
      dropdown: [
        { label: 'Process', href: '/admissions#process' },
        { label: 'Eligibility', href: '/admissions#eligibility' },
        { label: 'Apply Online', href: '/admissions#apply' }
      ]
    },
    { label: 'News', href: '/news', id: 'news' },
    { label: 'Contact', href: '/contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const isCurrentPage = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-16 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/lovable-uploads/f6e2ab58-4e8d-4de4-805d-baa1a97d46f2.png" 
                alt="BVM Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1 className="font-playfair font-bold text-lg text-bvm-navy">Birla Vidya Mandir</h1>
              <p className="text-xs text-bvm-heritage">Nainital • Since 1947</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <div key={item.label} className="relative">
                <div className="flex items-center">
                  <Link
                    to={item.href}
                    onClick={closeDropdown}
                    className={`
                      px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
                      relative overflow-hidden group
                      ${isCurrentPage(item.href) 
                        ? 'text-bvm-navy bg-bvm-gold/20' 
                        : 'text-bvm-heritage hover:text-bvm-navy hover:bg-bvm-sky/20'
                      }
                    `}
                  >
                    {item.label}
                    {isCurrentPage(item.href) && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-bvm-gold animate-fade-in" />
                    )}
                  </Link>
                  
                  {item.dropdown && (
                    <button
                      onClick={() => handleDropdownToggle(item.id)}
                      className="p-1 text-bvm-heritage hover:text-bvm-navy"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.id ? 'rotate-180' : ''
                      }`} />
                    </button>
                  )}
                </div>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.id && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-border py-2 animate-fade-in">
                    {item.dropdown.map(subItem => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        onClick={closeDropdown}
                        className="block px-4 py-2 text-sm text-bvm-heritage hover:text-bvm-navy hover:bg-bvm-sky/20 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button className="ml-4 bg-bvm-navy hover:bg-bvm-heritage shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Admission Inquiry
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block w-full h-0.5 bg-bvm-navy transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block w-full h-0.5 bg-bvm-navy transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-full h-0.5 bg-bvm-navy transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
            <div className="py-4 space-y-1">
              {navItems.map(item => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      block w-full text-left px-4 py-3 text-sm font-medium 
                      transition-colors hover:bg-bvm-sky/20
                      ${isCurrentPage(item.href) 
                        ? 'text-bvm-navy bg-bvm-gold/10 border-l-2 border-bvm-gold' 
                        : 'text-bvm-heritage hover:text-bvm-navy'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Mobile Dropdown Items */}
                  {item.dropdown && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map(subItem => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2 text-xs text-bvm-heritage hover:text-bvm-navy hover:bg-bvm-sky/10"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-bvm-navy hover:bg-bvm-heritage">
                  Admission Inquiry
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
