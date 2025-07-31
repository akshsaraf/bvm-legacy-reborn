import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, FileText, MessageCircle, Bell, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import NewsletterSubscription from './NewsletterSubscription';

const QuickActions = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      icon: FileText,
      title: "Apply for Admission",
      description: "Start your journey with BVM",
      action: () => navigate('/admissions'),
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Contact Us",
      description: "Get in touch with our team",
      action: () => navigate('/contact'),
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Calendar,
      title: "School Events",
      description: "Check upcoming events",
      action: () => navigate('/news'),
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      icon: Trophy,
      title: "Our Achievements",
      description: "See our success stories",
      action: () => navigate('/about'),
      color: "bg-amber-500 hover:bg-amber-600"
    },
    {
      icon: Users,
      title: "Campus Life",
      description: "Explore student life",
      action: () => navigate('/campus-life'),
      color: "bg-rose-500 hover:bg-rose-600"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-muted/50 to-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bvm-navy mb-4">
            Quick Actions
          </h2>
          <p className="text-lg text-bvm-heritage max-w-2xl mx-auto">
            Everything you need to know about BVM is just a click away
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <Card key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full ${action.color} flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}>
                  <action.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-bvm-navy">{action.title}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  onClick={action.action}
                  className="w-full bg-bvm-gold hover:bg-bvm-gold/90 text-bvm-navy font-semibold"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="text-center mb-8">
          <h3 className="font-playfair text-2xl font-bold text-bvm-navy mb-4">
            Stay Updated with BVM
          </h3>
          <p className="text-bvm-heritage mb-8">
            Subscribe to receive the latest news, events, and updates directly in your inbox
          </p>
        </div>
        <div className="flex justify-center">
          <NewsletterSubscription />
        </div>
      </div>
    </section>
  );
};

export default QuickActions;