import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-heritage-gradient text-white" role="contentinfo">
      <div className="container-width">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/f6e2ab58-4e8d-4de4-805d-baa1a97d46f2.png" 
                  alt="BVM Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-white">Birla Vidya Mandir</h3>
                <p className="text-sm text-white/80">Nainital • Since 1947</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              A premier residential school nestled in the Himalayas at 7,800 feet, 
              committed to excellence in education and character development for over 75 years.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Follow us on Facebook"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                aria-label="Follow us on Instagram"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                aria-label="Follow us on YouTube"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                aria-label="Follow us on Twitter"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-bvm-gold">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/about" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    About BVM
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/campus-life" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Campus Life
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/academics" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Academics
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/admissions" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/gallery" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/news" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    News & Achievements
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-bvm-gold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-bvm-gold flex-shrink-0" />
                <div>
                  <p className="text-white/90">
                    Birla Vidya Mandir<br />
                    Nainital, Uttarakhand 263001<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-bvm-gold flex-shrink-0" />
                <a 
                  href="tel:+915942235567" 
                  className="text-white/90 hover:text-white transition-colors focus:outline-none focus:text-white"
                >
                  +91 5942 235567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-bvm-gold flex-shrink-0" />
                <a 
                  href="mailto:info@bvmnainital.org" 
                  className="text-white/90 hover:text-white transition-colors focus:outline-none focus:text-white"
                >
                  info@bvmnainital.org
                </a>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-bvm-gold">Important</h4>
            <nav aria-label="Important links navigation">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Online Fee Payment
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Student Portal
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Parent Portal
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Alumni Network
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Career Opportunities
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm text-center md:text-left">
              © 2024 Birla Vidya Mandir, Nainital. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
              >
                Terms & Conditions
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors focus:outline-none focus:text-white"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;