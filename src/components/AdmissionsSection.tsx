
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText, DollarSign, ExternalLink } from 'lucide-react';
import GlassyPanel from './GlassyPanel';

const AdmissionsSection = () => {
  const admissionActions = [
    {
      icon: FileText,
      title: "Apply Online",
      description: "Complete your application process digitally",
      action: "Start Application",
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: Download,
      title: "Download Admission Form",
      description: "Get the PDF form for offline submission",
      action: "Download PDF",
      color: "bg-green-50 text-green-600 border-green-200"
    },
    {
      icon: DollarSign,
      title: "View Fee Structure",
      description: "Detailed breakdown of all fees and charges",
      action: "View Details",
      color: "bg-purple-50 text-purple-600 border-purple-200"
    }
  ];

  return (
    <section id="admissions" className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Admissions Open</h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Join the legacy of excellence at BVM Nainital. Applications are now open for the academic year 2025-26.
          </p>
          <div className="mt-6 p-4 bg-bvm-gold/10 rounded-lg border border-bvm-gold/30 max-w-md mx-auto">
            <p className="text-bvm-navy font-semibold">Admission Period: November - March</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {admissionActions.map((action, index) => (
            <GlassyPanel key={index} className="group hover:scale-105 transition-all duration-300">
              <Card className="border-0 shadow-none bg-transparent">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${action.color} group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-bvm-navy text-lg">{action.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-bvm-heritage mb-6 text-sm leading-relaxed">
                    {action.description}
                  </p>
                  <Button className="w-full bg-bvm-navy hover:bg-bvm-heritage text-white">
                    {action.action}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </GlassyPanel>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-white/50 shadow-lg">
            <h3 className="font-playfair text-xl font-semibold text-bvm-navy mb-4">Important Information</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-bvm-heritage">
              <div>
                <p className="font-medium">Age Criteria:</p>
                <p>Class VI: 10-11 years</p>
                <p>Class IX: 13-14 years</p>
              </div>
              <div>
                <p className="font-medium">Required Documents:</p>
                <p>Birth Certificate, TC, Mark Sheets</p>
                <p>Medical Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
