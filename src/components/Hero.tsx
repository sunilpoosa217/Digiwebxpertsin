import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900"></div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Digital Solutions That
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed animate-fade-in-delay-1">
            We craft exceptional digital experiences that transform businesses and engage audiences worldwide
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-2">
            <button 
              onClick={scrollToContact}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-delay-3">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-cyan-400 mr-1" />
                <span className="text-2xl font-bold">500+</span>
              </div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-cyan-400 mr-1" />
                <span className="text-2xl font-bold">200+</span>
              </div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-cyan-400 mr-1" />
                <span className="text-2xl font-bold">5+</span>
              </div>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}