import React from 'react';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Freelance Full-Stack Developer & Entrepreneur',
      company: 'Self-Employed',
      period: 'July 2024 – Present',
      location: 'Remote',
      type: 'Freelance',
      description: 'Embraced a unique blend of personal growth and professional development during this period. After taking a necessary break for health and rejuvenation, I channeled my refreshed energy into building my own computer shop business.',
      achievements: [
        'Salon Management System: Developed with Next.js and React',
        'Coffee Shop E-commerce Platform: Built using Headless CMS, Nuxt.js, and Vue.js',
        'Retail Operations System: Engineered with NestJS (backend) and Angular (frontend)',
        'Utilized Vercel, Hostinger for deployments, and Supabase for database management'
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Scrum Master',
      company: 'Accenture',
      period: 'Sept 2023 – June 2024',
      location: 'Philippines',
      type: 'Full-time',
      description: 'Focused on helping Agile teams stay aligned, productive, and continuously improving with a servant-leadership mindset.',
      achievements: [
        'Led daily stand-ups, sprint planning, reviews, and retrospectives',
        'Maintained Kanban boards in Azure DevOps ensuring smooth task flow',
        'Supported two Agile teams (QA and Developers) with coaching and best practices',
        'Coordinated deployments across all environments from testing to production'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Accenture',
      period: 'Feb 2019 – Sept 2023',
      location: 'Philippines',
      type: 'Full-time',
      description: 'Successfully led and delivered three major projects, demonstrating flexibility across the full tech stack.',
      achievements: [
        'Woolworth: Built responsive web interfaces using AngularJS and React.js',
        'Hawaiian Airlines: Supported enterprise APIs using MuleSoft Anypoint Platform',
        'My Scheduling: Led end-to-end upgrade from Angular 2 to Angular 15',
        'Designed and deployed AWS Lambda functions for backend logic'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Mobile Developer',
      company: 'Kata Digital',
      period: 'March 2018 – Dec 2018',
      location: 'Philippines',
      type: 'Full-time',
      description: 'Designed, built, and maintained cross-platform mobile apps using the Ionic framework.',
      achievements: [
        'Developed cross-platform mobile applications',
        'Ensured smooth performance on iOS and Android',
        'Implemented responsive and visually appealing designs',
        'Collaborated with design and backend teams'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Junior Developer / Web Developer',
      company: 'Yondu Inc.',
      period: 'Feb 2017 – Feb 2018',
      location: 'Philippines',
      type: 'Full-time',
      description: 'Developed, maintained, and improved web applications using CodeIgniter framework.',
      achievements: [
        'Built backend features and APIs for internal tools',
        'Maintained and improved existing web applications',
        'Collaborated with cross-functional teams',
        'Implemented best practices in web development'
      ],
      color: 'from-indigo-500 to-green-500'
    },
    {
      title: 'Junior Developer / Web Developer',
      company: 'Simplex Inc.',
      period: 'Feb 2016 – Nov 2016',
      location: 'Philippines',
      type: 'Full-time',
      description: 'Built and maintained web applications using a custom PHP framework, working across both backend and frontend.',
      achievements: [
        'Developed and maintained full-stack web applications using a proprietary PHP framework.',
        'Engineered user-centric web solutions, spanning backend logic to intuitive interfaces.',
        'Ensured high performance and seamless user experience across all web applications.',
        'Collaborated cross-functionally to deliver robust and efficient web-based tools.'
      ],
      color: 'from-red-500 to-blue-500'
    },
    {
      title: 'Software Engineer',
      company: 'Isoft System Inc.',
      period: 'Feb 2013 – Feb 2016',
      location: 'Philippines',
      type: 'Full-time',
      description: 'Built and maintained websites using CodeIgniter, Laravel, Restful APIs and MySQL. Worked on both backend and frontend tasks.',
      achievements: [
        'Developed and maintained full-stack web applications using CodeIgniter, Laravel, RESTful APIs, and MySQL.',
        'Engineered seamless user experiences by integrating robust backend systems with intuitive front-end interfaces.',
        'Built and optimized web platforms from conception to deployment, ensuring high performance and data integrity.',
        'Leveraged expertise in modern web technologies to deliver scalable and efficient digital solutions.'
      ],
      color: 'from-yellow-500 to-black-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            A journey of continuous growth and innovation across diverse projects and technologies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Header */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${exp.color} mb-3`}>
                        <Briefcase size={12} className="mr-1" />
                        {exp.type}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-3">{exp.company}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2 text-blue-600" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-blue-600" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center mb-3">
                        <Award size={16} className="mr-2 text-blue-600" />
                        <span className="font-semibold text-white">Key Achievements</span>
                      </div>
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-start p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg hover:from-blue-800/40 hover:to-purple-800/40 transition-all duration-300"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { number: '10+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
            { number: '5+', label: 'Companies Worked', color: 'from-green-500 to-teal-500' },
            { number: '15+', label: 'Technologies Used', color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};