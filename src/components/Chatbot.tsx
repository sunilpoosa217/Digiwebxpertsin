import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Show welcome message after 3 seconds
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission to dev0@digiwebxperts.in
      const emailBody = `
New Inquiry from DigiWebXperts.in Website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

Submitted at: ${new Date().toLocaleString()}
      `;

      // In a real implementation, you would send this to your backend
      console.log('Sending email to dev0@digiwebxperts.in:', emailBody);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openChat = () => {
    setIsOpen(true);
    setShowWelcome(false);
    setShowForm(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    setShowForm(false);
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Welcome Popup */}
      {showWelcome && !isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-4 max-w-sm animate-slide-up">
          <div className="flex items-start space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">Welcome to DigiWebXperts! 👋</h4>
              <p className="text-sm text-gray-600 mb-3">
                Have a project in mind? Let's discuss how we can help transform your digital presence!
              </p>
              <button
                onClick={openChat}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Start Conversation
              </button>
            </div>
            <button
              onClick={() => setShowWelcome(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={openChat}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        )}

        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">DigiWebXperts</h3>
                  <p className="text-xs text-blue-100">We're here to help!</p>
                </div>
              </div>
              <button
                onClick={closeChat}
                className="text-white hover:text-blue-200 transition-colors duration-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              {!isSubmitted ? (
                <div>
                  <div className="mb-4">
                    <div className="bg-gray-100 rounded-lg p-3 mb-3">
                      <p className="text-sm text-gray-700">
                        Hi there! 👋 We'd love to learn about your project. Please share your details below and we'll get back to you soon!
                      </p>
                    </div>
                  </div>

                  {showForm && (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <textarea
                            name="message"
                            placeholder="Tell us about your project..."
                            required
                            rows={3}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm font-medium"
                      >
                        {isSubmitting ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Thank you for your inquiry. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setShowForm(true);
                    }}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}