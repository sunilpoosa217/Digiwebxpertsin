import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Start Your <span className="text-cyan-400">Project</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch with us today
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-300">dev0@digiwebxperts.in</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <div className="text-gray-300">
                  <p>12-141, Sri Laxmi Nagar Road,</p>
                  <p>Badangipet, Hyderabad,</p>
                  <p>Telangana, India</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                  24/7 Support & Maintenance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                  100% Satisfaction Guarantee
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                  Fast Turnaround Time
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                  Competitive Pricing
                </li>
              </ul>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your company name"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Tell us about your project requirements..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}