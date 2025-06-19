import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Derivco',
      positions: [
        {
          title: 'Developer L2',
          period: 'July 2024 - May 2025',
          current: true
        },
        {
          title: 'Software Development Engineer in Test (SDET) L2',
          period: 'July 2024 - May 2025',
          current: false 
        },
        {
          title: 'Software Development Engineer in Test (SDET) L1',
          period: 'June 2023 - June 2024',
          current: false
        }
      ],
      achievements: [
        'Developed a test harness that enabled full automation of end-to-end testing in Azure Pipelines, eliminating the reliance on environments',
        'Played a pivotal role in designing and architecting a new messaging system that enables any web application to integrate with the messaging system',
        'Developed a logging service and backend communication API that sends and manages the state of millions of messages to users across various countries',
        'Developed a Frontend UI that displays promotion messages sent from the backend',
        'Implemented continuous integration and delivery processes, reducing the feedback loop and increasing deployment frequency',
        'Conducted performance and load testing to analyze system behavior under different workloads, resulting in optimized application performance',
        'Utilized testing frameworks and tools like NUnit, Playwright, WireMock, and FluentAssertions for comprehensive testing',
        'Led efforts to improve test automation infrastructure and test data management, resulting in increased test efficiency'
      ]
    },
    {
      company: 'Iteiga Technologies',
      positions: [
        {
          title: 'Full Stack Developer',
          period: 'Dec 2020 - Present',
          current: true
        }
      ],
      projects: [
        {
          name: 'Customer Portal',
          period: 'Jan 2023 - Present',
          description: 'Leading the development of a web-based customer portal which enables customers to manage service subscriptions, view invoices, manage banking details, and create support tickets.',
          technologies: 'Blazor WASM, .NET 6 LTS, DevExpress'
        },
        {
          name: 'FTTH Order Portal',
          period: 'Oct 2022 - Dec 2022',
          description: 'Led the development of an order-portal for customers to find and order fibre services based on their location with ISP integration.',
          technologies: 'Angular, Bootstrap, .NET Framework, Google Maps, Stripe, TypeScript'
        },
        {
          name: 'IOT Installer App',
          period: 'Aug 2022 - Sep 2022',
          description: 'Built an app that connects to company workflow engine providing installers with schedules and job cards, including photo evidence verification.',
          technologies: 'Native Android (Java), BLE device integration, LoRa network integration'
        },
        {
          name: 'Call Agent Ticketing Project',
          period: 'Feb 2022 - Jun 2022',
          description: 'Led development of integration features for the company\'s workflow engine and REST API system, improving call agent productivity from 10s to 100s of calls per day.',
          technologies: 'WPF, REST APIs, Data Integration'
        }
      ]
    },
    {
      company: 'SoftServe Digital Development',
      positions: [
        {
          title: 'Junior Developer',
          period: 'Aug 2020 - Dec 2020',
          current: false
        }
      ],
      achievements: [
        'Designed, developed, and maintained both new and existing code',
        'Translated mock-ups and wireframes into functioning front-end code',
        'Maintained and created hosting environments, websites, emails, and client credentials',
        'Built and managed numerous WordPress sites',
        'Implemented SEO optimization, Google Analytics reporting, and Google Ads'
      ],
      technologies: 'CSS, Razor View (.NET), Bootstrap, Angular, JavaScript, ASP.NET Core MVC, C#, Entity Framework, SQL'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (    <section id="experience" className="py-20 bg-kanagawa-bgLight">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-kanagawa-fg"
            variants={itemVariants}
          >
            Professional Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-kanagawa-wave h-full"></div>

            {experiences.map((exp, expIndex) => (
              <motion.div 
                key={expIndex}
                className="relative mb-12"
                variants={itemVariants}
              >                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-kanagawa-orange rounded-full border-4 border-kanagawa-bgLight shadow-lg"></div>

                <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                  <div className={`${expIndex % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>                    <div className="bg-kanagawa-bg rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 border border-kanagawa-wave">
                      <h3 className="text-2xl font-bold text-kanagawa-fg mb-2">{exp.company}</h3>
                      
                      {exp.positions.map((pos, posIndex) => (
                        <div key={posIndex} className="mb-4">
                          <h4 className="text-lg font-semibold text-primary-600">{pos.title}</h4>
                          <div className="flex items-center text-gray-500 text-sm mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            {pos.period}
                            {pos.current && <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Current</span>}
                          </div>
                        </div>
                      ))}

                      {exp.achievements && (
                        <div className="mt-4">
                          <h5 className="font-semibold text-gray-700 mb-2">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.slice(0, 4).map((achievement, achIndex) => (
                              <li key={achIndex} className="text-gray-600 text-sm flex items-start">
                                <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {exp.projects && (
                        <div className="mt-4">
                          <h5 className="font-semibold text-gray-700 mb-3">Key Projects:</h5>
                          <div className="space-y-3">
                            {exp.projects.slice(0, 2).map((project, projIndex) => (
                              <div key={projIndex} className="p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-between mb-1">
                                  <h6 className="font-semibold text-gray-800">{project.name}</h6>
                                  <span className="text-xs text-gray-500">{project.period}</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.split(', ').slice(0, 3).map((tech, techIndex) => (
                                    <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {exp.technologies && (
                        <div className="mt-4">
                          <h5 className="font-semibold text-gray-700 mb-2">Technologies:</h5>
                          <p className="text-sm text-gray-600">{exp.technologies}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
