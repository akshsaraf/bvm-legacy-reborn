
import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Clock, Home, FlaskConical, GraduationCap } from 'lucide-react';

const LiveStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { 
      icon: <Users className="h-8 w-8" />, 
      number: 800, 
      suffix: '+', 
      label: 'Students',
      color: 'text-bvm-navy'
    },
    { 
      icon: <Award className="h-8 w-8" />, 
      number: 200, 
      suffix: '+', 
      label: 'Awards & Trophies',
      color: 'text-bvm-gold'
    },
    { 
      icon: <GraduationCap className="h-8 w-8" />, 
      number: 100, 
      suffix: '+', 
      label: 'Faculty Members',
      color: 'text-bvm-heritage'
    },
    { 
      icon: <Clock className="h-8 w-8" />, 
      number: 75, 
      suffix: '+', 
      label: 'Years of Legacy',
      color: 'text-bvm-navy'
    },
    { 
      icon: <Home className="h-8 w-8" />, 
      number: 8, 
      suffix: '', 
      label: 'Residential Hostels',
      color: 'text-bvm-gold'
    },
    { 
      icon: <FlaskConical className="h-8 w-8" />, 
      number: 10, 
      suffix: '+', 
      label: 'Science & Computer Labs',
      color: 'text-bvm-heritage'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        setCurrent(Math.min(Math.floor(increment * step), target));
        
        if (step >= steps) {
          clearInterval(timer);
          setCurrent(target);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [target, isVisible]);

    return (
      <span className="text-4xl md:text-5xl font-bold">
        {current}{suffix}
      </span>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-bvm-sky/10"
    >
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Birla Vidya Mandir at a Glance</h2>
          <div className="w-24 h-1 bg-bvm-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                bg-background rounded-xl p-8 text-center shadow-lg hover:shadow-xl
                transform transition-all duration-500 hover:scale-105 hover:-translate-y-2
                border border-border
                ${isVisible ? 'animate-fade-in' : 'opacity-0'}
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>
              <div className={`${stat.color} mb-2`}>
                <AnimatedNumber 
                  target={stat.number} 
                  suffix={stat.suffix} 
                  isVisible={isVisible} 
                />
              </div>
              <p className="text-bvm-heritage font-medium text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
