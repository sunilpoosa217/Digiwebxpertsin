import React from 'react';
import { Globe, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold">DigiWebXperts</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for digital transformation. We create innovative solutions that drive business growth.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button 
                  key={index}
                  className="bg-gray-800 hover:bg-cyan-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Mobile Development</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Portfolio</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-cyan-400 mr-3" />
                <span className="text-sm">dev0@digiwebxperts.in</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-cyan-400 mr-3" />
                <div className="text-sm">
                  <p>12-141, Sri Laxmi Nagar Road,</p>
                  <p>Badangipet, Hyderabad,</p>
                  <p>Telangana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {currentYear} DigiWebXperts. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}