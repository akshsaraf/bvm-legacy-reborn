
import React from 'react';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import Footer from '@/components/Footer';
import AdmissionsSection from '@/components/AdmissionsSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, FileText, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <EnhancedNavigation />
      
      {/* Back to Home Button */}
      <div className="container-width pt-20 pb-4">
        <Link to="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-bvm-navy to-bvm-mountain py-16">
        <div className="container-width text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
            Admissions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join the BVM Family • Excellence Awaits • Apply Today
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <AdmissionsSection />
      
      {/* Additional Admission Information */}
      <section className="section-padding bg-bvm-sky/10">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
              <Users className="h-12 w-12 text-bvm-navy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-bvm-navy mb-3">Eligibility</h3>
              <p className="text-bvm-heritage">
                Classes 6-11 admission based on entrance test and interview. 
                Age criteria and previous academic records considered.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
              <FileText className="h-12 w-12 text-bvm-navy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-bvm-navy mb-3">Documents</h3>
              <ul className="text-bvm-heritage text-sm space-y-1">
                <li>• Transfer Certificate</li>
                <li>• Mark Sheets (Last 2 years)</li>
                <li>• Birth Certificate</li>
                <li>• Medical Certificate</li>
                <li>• Passport Photos</li>
              </ul>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
              <Calendar className="h-12 w-12 text-bvm-navy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-bvm-navy mb-3">Important Dates</h3>
              <p className="text-bvm-heritage">
                Application opens: January<br/>
                Entrance Test: March<br/>
                Interviews: April<br/>
                Session Begins: July
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-bvm-navy hover:bg-bvm-heritage mr-4">
              <Download className="h-4 w-4 mr-2" />
              Download Brochure
            </Button>
            <Button variant="outline" className="border-bvm-navy text-bvm-navy hover:bg-bvm-navy hover:text-white">
              Apply Online
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Admissions;
