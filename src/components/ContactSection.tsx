
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Copy, MessageCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import GlassyPanel from './GlassyPanel';

const ContactSection = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
      duration: 2000,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@birlavidyamandir.com",
      action: () => copyToClipboard("info@birlavidyamandir.com", "Email")
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91-9410337707",
      action: () => copyToClipboard("+919410337707", "WhatsApp number")
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-5942-235307",
      action: () => copyToClipboard("+915942235307", "Phone number")
    }
  ];

  return (
    <section id="contact" className="section-padding bg-heritage-gradient text-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Ready to join the BVM family? We're here to help with all your queries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <GlassyPanel className="bg-white/10 border-white/20">
              <Card className="border-0 shadow-none bg-transparent text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-bvm-gold">
                    <MapPin className="mr-3 h-6 w-6" />
                    Visit Our Campus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">
                    Birla Vidya Mandir<br />
                    Tallital, Nainital - 263002<br />
                    Uttarakhand, India
                  </p>
                  <div className="mt-4 p-3 bg-white/10 rounded-lg border border-white/20">
                    <div className="flex items-center text-bvm-gold mb-2">
                      <Clock className="mr-2 h-4 w-4" />
                      <span className="font-medium">Office Hours</span>
                    </div>
                    <p className="text-sm">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </GlassyPanel>

            {/* Quick Contact Actions */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <GlassyPanel key={index} className="bg-white/10 border-white/20 group hover:bg-white/20 transition-all duration-300">
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-bvm-gold rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="h-6 w-6 text-bvm-navy" />
                      </div>
                      <div>
                        <div className="text-sm text-bvm-gold font-medium">{contact.label}</div>
                        <div className="text-lg font-semibold">{contact.value}</div>
                      </div>
                    </div>
                    <Button
                      onClick={contact.action}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 hover:text-bvm-gold"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </GlassyPanel>
              ))}
            </div>
          </div>

          {/* Admission Inquiries */}
          <GlassyPanel className="bg-white/10 border-white/20">
            <Card className="border-0 shadow-none bg-transparent text-white">
              <CardHeader>
                <CardTitle className="text-bvm-gold text-2xl">Admission Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h4 className="font-semibold text-bvm-gold mb-2">Principal's Office</h4>
                  <p className="text-lg">Mr. Anil Kumar Sharma</p>
                  <p className="text-sm opacity-90">Available for meetings by appointment</p>
                </div>

                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h4 className="font-semibold text-bvm-gold mb-2">Admission Period</h4>
                  <p className="text-lg font-medium">November - March</p>
                  <p className="text-sm opacity-90">Applications processed on rolling basis</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-bvm-gold">What We Offer</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bvm-gold rounded-full mr-3"></div>
                      Campus tours for prospective families
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bvm-gold rounded-full mr-3"></div>
                      Detailed curriculum information
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bvm-gold rounded-full mr-3"></div>
                      Scholarship and fee assistance guidance
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bvm-gold rounded-full mr-3"></div>
                      Hostel facility information
                    </li>
                  </ul>
                </div>

                <Button className="w-full bg-bvm-gold text-bvm-navy hover:bg-bvm-gold/90 font-semibold">
                  Schedule Campus Visit
                </Button>
              </CardContent>
            </Card>
          </GlassyPanel>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
