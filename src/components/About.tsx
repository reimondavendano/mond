import React from 'react';
import { MapPin, Phone, Mail, User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" >
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <img
                    src="../assets/img2.png"
                    alt="Professional Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Reimond Mark Avendano</h3>
                  <p className="text-blue-600 font-semibold">Senior Software Engineer</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="mr-3 text-blue-600" size={20} />
                  <span>Malolos, Bulacan</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="mr-3 text-blue-600" size={20} />
                  <span>09959678662</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="mr-3 text-blue-600" size={20} />
                  <span>reimondavendano@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-sm opacity-90">Career Progression</div>
              </div>
            </div>
          </div>

          {/* Professional Overview */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Professional Overview</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a Senior Software Engineer / Full Stack Developer with over 10 years of experience 
                building scalable web applications, and a Scrum Master with 1 year of hands-on experience 
                leading Agile teams.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in full-stack development and thrive in collaborative environments where 
                cross-functional teamwork drives meaningful results. My passion lies in creating 
                innovative solutions that make a real impact.
              </p>
            </div>

            {/* Soft Skills */}
            <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Core Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Technical Leadership',
                  'Problem Solving',
                  'Adaptability',
                  'Time Management',
                  'Collaboration',
                  'Critical Thinking'
                ].map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg hover:from-blue-800/40 hover:to-purple-800/40 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};