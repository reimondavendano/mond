import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:reimondavendano@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.open(mailtoLink);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:reimondavendano@gmail.com" className="text-white font-semibold hover:text-cyan-400 transition-colors duration-300">
                      reimondavendano@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:09959678662" className="text-white font-semibold hover:text-cyan-400 transition-colors duration-300">
                      09959678662
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white font-semibold">Malolos, Bulacan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Actions */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect & Download</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <a
                  href="https://www.linkedin.com/in/reimond-mark-avenda%C3%B1o-92515797/" target='_blank'
                  className="flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
                >
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center p-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl text-white font-semibold hover:from-gray-800 hover:to-gray-900 transform hover:scale-105 transition-all duration-300"
                >
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
              </div>

              <button className="w-full flex items-center justify-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
            </div>

            {/* Availability */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Availability</h3>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-300">Available for freelance projects</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Currently accepting new opportunities and collaborations
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2024 Reimond Mark Avendano. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};