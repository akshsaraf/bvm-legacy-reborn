
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Star, Award } from 'lucide-react';
import GlassyPanel from './GlassyPanel';

const ResultsSection = () => {
  const topScorers = [
    { name: "Dhairya Jain, Harsh Agarwal", score: "98.2%", subject: "Commerce", class: "XII" },
    { name: "Chitransh Bhatnagar", score: "97.2%", subject: "Science", class: "XII" },
    { name: "Prianshu Gariya", score: "95.6%", subject: "Commerce", class: "XII" }
  ];

  const resultStats = [
    { label: "Class XII Pass Rate", value: "100%", icon: Trophy },
    { label: "90%+ Scorers", value: "45%", icon: Star },
    { label: "First Division", value: "89%", icon: Award }
  ];

  return (
    <section id="results" className="section-padding bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Academic Excellence</h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Our students consistently achieve outstanding results, reflecting our commitment to academic excellence.
          </p>
        </div>

        {/* Result Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {resultStats.map((stat, index) => (
            <GlassyPanel key={index} className="text-center group hover:scale-105 transition-all duration-300">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <stat.icon className="h-12 w-12 mx-auto text-bvm-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-bvm-navy mb-2">{stat.value}</div>
                  <div className="text-bvm-heritage font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </GlassyPanel>
          ))}
        </div>

        {/* Top Scorers */}
        <div className="mb-12">
          <h3 className="font-playfair text-2xl font-semibold text-bvm-navy text-center mb-8">
            🏆 Top Performers 2024
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topScorers.map((scorer, index) => (
              <GlassyPanel key={index} className="group hover:scale-105 transition-all duration-300">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-bvm-gold rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">#{index + 1}</span>
                    </div>
                    <CardTitle className="text-center text-bvm-navy text-lg">{scorer.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <div className="text-2xl font-bold text-bvm-gold mb-1">{scorer.score}</div>
                    <div className="text-sm text-bvm-heritage">{scorer.subject}</div>
                    <div className="text-xs text-bvm-mountain mt-1">Class {scorer.class}</div>
                  </CardContent>
                </Card>
              </GlassyPanel>
            ))}
          </div>
        </div>

        {/* Detailed Results Tabs */}
        <GlassyPanel className="max-w-4xl mx-auto">
          <Tabs defaultValue="class12" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/50">
              <TabsTrigger value="class12" className="data-[state=active]:bg-bvm-navy data-[state=active]:text-white">
                Class XII Results
              </TabsTrigger>
              <TabsTrigger value="class10" className="data-[state=active]:bg-bvm-navy data-[state=active]:text-white">
                Class X Results
              </TabsTrigger>
            </TabsList>
            
           
            
            <TabsContent value="class10" className="mt-6 p-6">
              <div className="text-center">
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 max-w-md mx-auto">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">92.3%</div>
                  <div className="text-yellow-700 font-medium">Overall Average</div>
                  <div className="text-sm text-yellow-600 mt-2">All students passed with flying colors</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </GlassyPanel>
      </div>
    </section>
  );
};

export default ResultsSection;
