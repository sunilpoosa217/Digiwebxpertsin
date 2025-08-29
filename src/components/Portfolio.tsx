import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'Modern e-commerce solution with advanced features and seamless user experience.',
    image: 'https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    description: 'Cross-platform mobile application for healthcare management and patient care.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React Native', 'Firebase', 'HealthKit', 'Push Notifications'],
  },
  {
    id: 3,
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategy that increased client ROI by 300%.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['SEO', 'PPC', 'Social Media', 'Analytics'],
  },
  {
    id: 4,
    title: 'Corporate Website',
    category: 'Web Development',
    description: 'Professional corporate website with advanced content management system.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Next.js', 'TypeScript', 'CMS', 'SEO'],
  },
  {
    id: 5,
    title: 'Restaurant App',
    category: 'Mobile Development',
    description: 'Food delivery and restaurant management application with real-time tracking.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Flutter', 'Firebase', 'Maps API', 'Payment Gateway'],
  },
  {
    id: 6,
    title: 'Brand Identity Design',
    category: 'Design',
    description: 'Complete brand identity and design system for a tech startup.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Branding', 'Logo Design', 'Style Guide', 'Print Design'],
  }
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Digital Marketing', 'Design'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our latest projects and see how we've helped businesses achieve their digital goals
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-300">
                    <ExternalLink className="h-4 w-4 text-gray-700" />
                  </button>
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-300">
                    <Github className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-cyan-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}