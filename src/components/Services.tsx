import React from 'react';
import { Code, Smartphone, Search, Palette, ShoppingCart, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.',
    features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Development']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization']
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategies to improve your search rankings and drive organic traffic to your website.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that convert visitors into customers and provide exceptional user experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms that drive sales and provide seamless shopping experiences for your customers.',
    features: ['Shopify Development', 'WooCommerce', 'Payment Integration', 'Inventory Management']
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that increase brand awareness and generate qualified leads for your business.',
    features: ['Social Media Marketing', 'PPC Campaigns', 'Email Marketing', 'Analytics & Reporting']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}