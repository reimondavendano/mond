import React from 'react';
import { Code, Database, Cloud, Smartphone, Settings, Users } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'HTML5, CSS3, SASS',
        'JavaScript (ES6+), TypeScript',
        'React.js, Angular 15, Vue.js',
        'Bootstrap, Tailwind CSS',
        'JQuery, AJAX, JSON',
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        'Node.js, PHP (Laravel, CodeIgniter)',
        'RESTful API Design',
        'JWT, OAuth Authentication',
        'Next.js, Nuxt.js',
        'NestJS'
      ]
    },
    {
      icon: Database,
      title: 'Database Management',
      color: 'from-purple-500 to-pink-500',
      skills: [
        'MySQL, MsSQL',
        'Redis (NoSQL)',
        'Supabase (PostgreSQL)',
        'Database Design',
        'Query Optimization'
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: 'from-orange-500 to-red-500',
      skills: [
        'AWS (EC2, S3, Lambda)',
        'Docker, CI/CD Pipelines',
        'GitHub Actions, Azure DevOps',
        'Vercel, Hostinger',
        'Infrastructure as Code'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile & Testing',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        'Ionic 3',
        'Jest, Karma, Jasmine',
        'Unit & Integration Testing',
        'ESLint, Prettier',
        'Code Quality Assurance'
      ]
    },
    {
      icon: Users,
      title: 'Agile & Leadership',
      color: 'from-teal-500 to-blue-500',
      skills: [
        'Scrum Master (1 year)',
        'Jira, Azure DevOps',
        'Kanban and Scrum',
        'Team Leadership',
        'Project Management'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit built over 10+ years of software development experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white text-center mb-6">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <Settings className="inline mr-2" size={24} />
              Additional Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'MuleSoft Integration',
                'Strapi (Headless CMS)',
                'Chatbot API Migration',
                'Bamboo CI/CD',
                'Azure Pipelines',
                'GitHub Pages'
              ].map((tech, index) => (
                <div
                  key={tech}
                  className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-3"></div>
                  <span className="text-gray-300 text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <Code className="inline mr-2" size={24} />
              Specializations
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Full-Stack Architecture', level: 95 },
                { title: 'API Development', level: 90 },
                { title: 'Cloud Solutions', level: 85 },
                { title: 'Team Leadership', level: 88 },
                { title: 'Agile Methodologies', level: 92 }
              ].map((spec, index) => (
                <div key={spec.title} className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span className="text-sm font-medium">{spec.title}</span>
                    <span className="text-sm">{spec.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${spec.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};