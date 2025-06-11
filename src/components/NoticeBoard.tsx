
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Download, ExternalLink, Pin } from 'lucide-react';
import GlassyPanel from './GlassyPanel';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: "Winter Break Schedule 2024",
      date: "2024-12-01",
      type: "announcement",
      priority: "high",
      content: "School will remain closed from December 20, 2024 to January 8, 2025. Hostel students can stay with prior permission.",
      downloadLink: "#"
    },
    {
      id: 2,
      title: "Annual Sports Day 2025",
      date: "2024-11-28",
      type: "event",
      priority: "medium",
      content: "Annual Sports Day will be held on February 15, 2025. Parents are cordially invited to attend.",
      downloadLink: "#"
    },
    {
      id: 3,
      title: "Class XII Board Exam Schedule",
      date: "2024-11-25",
      type: "academic",
      priority: "high",
      content: "CBSE Class XII Board Examinations will commence from February 15, 2025. Detailed schedule attached.",
      downloadLink: "#"
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting",
      date: "2024-11-20",
      type: "meeting",
      priority: "medium",
      content: "PTM scheduled for December 7, 2024. Please confirm your attendance with class teachers.",
      downloadLink: "#"
    },
    {
      id: 5,
      title: "Science Exhibition 2025",
      date: "2024-11-18",
      type: "event",
      priority: "low",
      content: "Annual Science Exhibition will showcase student projects on January 25, 2025.",
      downloadLink: "#"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-yellow-200 bg-yellow-50';
      case 'low': return 'border-green-200 bg-green-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'announcement': return '📢';
      case 'event': return '🎉';
      case 'academic': return '📚';
      case 'meeting': return '👥';
      default: return '📌';
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 relative">
      {/* Cork board background effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574' fill-opacity='0.4'%3E%3Cpath d='M0 0h40v40H0V0z'/%3E%3Cpath d='M20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-width relative">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-bvm-navy mb-6">
            📌 Notice Board
          </h2>
          <p className="text-bvm-heritage text-xl max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and important information
          </p>
          <div className="mt-4 w-24 h-1 bg-bvm-gold mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
            {notices.map((notice, index) => (
              <div
                key={notice.id}
                className={`relative transform transition-all duration-300 hover:scale-[1.02] ${
                  index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                } hover:rotate-0`}
              >
                {/* Pin effect */}
                <Pin className="absolute -top-2 -right-2 text-red-500 z-20 transform rotate-45 drop-shadow-md" size={20} />
                <Pin className="absolute -top-1 -left-1 text-blue-500 z-20 transform rotate-12 drop-shadow-md" size={16} />
                
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/4 w-16 h-6 bg-yellow-200 opacity-70 rounded-sm rotate-12 shadow-md" />
                
                <GlassyPanel className={`p-6 bg-white/90 shadow-lg border-2 ${getPriorityColor(notice.priority)} group hover:bg-white hover:shadow-xl transition-all duration-300`}>
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{getTypeIcon(notice.type)}</span>
                          <div>
                            <CardTitle className="text-bvm-navy text-lg font-semibold leading-tight">
                              {notice.title}
                            </CardTitle>
                            <div className="flex items-center text-bvm-heritage text-sm mt-1">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(notice.date).toLocaleDateString('en-IN', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </div>
                          </div>
                        </div>
                        {notice.priority === 'high' && (
                          <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            URGENT
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-bvm-heritage text-sm leading-relaxed mb-4">
                        {notice.content}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            className="bg-bvm-navy hover:bg-bvm-heritage text-white"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Read More
                          </Button>
                          {notice.downloadLink && (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-bvm-gold text-bvm-navy hover:bg-bvm-gold/10"
                            >
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          )}
                        </div>
                        <div className="text-xs text-bvm-mountain font-medium uppercase tracking-wide">
                          {notice.type}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </GlassyPanel>
                
                {/* Shadow effect */}
                <div className="absolute inset-0 bg-black/5 rounded-xl transform translate-x-1 translate-y-1 -z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative pins scattered around */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-red-400 rounded-full opacity-60" />
        <div className="absolute top-40 right-16 w-2 h-2 bg-blue-400 rounded-full opacity-50" />
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-yellow-400 rounded-full opacity-40" />
        <div className="absolute bottom-20 right-12 w-2 h-2 bg-green-400 rounded-full opacity-60" />
      </div>
    </section>
  );
};

export default NoticeBoard;
