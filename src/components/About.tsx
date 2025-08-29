import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every project we undertake is focused on delivering measurable results and ROI for our clients.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'We prioritize understanding your unique needs and goals to deliver personalized solutions.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of trends and leverage cutting-edge technologies to give you a competitive edge.'
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in design, development, and digital marketing practices.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">DigiWebXperts</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a passionate team of digital experts committed to transforming businesses 
              through innovative web solutions and strategic digital marketing.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With over 5 years of experience, we've helped hundreds of businesses establish 
              their digital presence, increase online visibility, and achieve sustainable growth. 
              Our approach combines creativity with data-driven strategies to deliver exceptional results.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-500 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 transition-colors duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}