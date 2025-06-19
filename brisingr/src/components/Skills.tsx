import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    languages: [
      { name: 'C#', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 80 }
    ],
    technologies: [
      'Blazor', 'Angular', 'React', 'Vue.js', 'Node.js', 'Express',
      '.NET Framework/Core', 'ADO.NET', 'WPF', 'Capacitor', 'Ionic'
    ],
    databases: [
      'MSSQL', 'Firebase', 'Entity Framework'
    ],
    cloud: [
      'Azure Cloud', 'Azure AI Services', 'Azure Pipelines', 'Docker', 'Kubernetes', 'Terraform'
    ],
    testing: [
      'NUnit', 'Playwright', 'WireMock', 'FluentAssertions', 'Test Automation', 'CI/CD'
    ],
    tools: [
      'Git', 'GitHub', 'Azure DevOps', 'Dapr', 'Traefik', 'Google Maps API', 'Stripe'
    ]
  };

  const softSkills = [
    'Problem-solving',
    'Effective Communication',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Solution Delivery'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (    <section id="skills" className="py-20 bg-kanagawa-bg">
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
            Skills & Technologies
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="space-y-8">              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold mb-6 text-kanagawa-yellow">Programming Languages</h3>
                <div className="space-y-4">
                  {skills.languages.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-kanagawa-fg">{skill.name}</span>
                        <span className="text-sm text-kanagawa-fgDark">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-kanagawa-wave rounded-full h-2">
                        <motion.div
                          className="bg-kanagawa-blue h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 text-kanagawa-orange">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-kanagawa-blue/20 text-kanagawa-blue rounded-full text-sm font-medium border border-kanagawa-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 text-kanagawa-green">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((db, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-kanagawa-green/20 text-kanagawa-green rounded-full text-sm font-medium border border-kanagawa-green/30"
                    >
                      {db}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Cloud, Testing & Tools */}
            <div className="space-y-8">              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 text-kanagawa-teal">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.cloud.map((cloud, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-kanagawa-teal/20 text-kanagawa-teal rounded-full text-sm font-medium border border-kanagawa-teal/30"
                    >
                      {cloud}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 text-kanagawa-purple">Testing & QA</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.testing.map((test, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-kanagawa-purple/20 text-kanagawa-purple rounded-full text-sm font-medium border border-kanagawa-purple/30"
                    >
                      {test}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 text-kanagawa-orange">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-kanagawa-orange/20 text-kanagawa-orange rounded-full text-sm font-medium border border-kanagawa-orange/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 text-kanagawa-pink">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-kanagawa-bgLight rounded-lg shadow-sm border border-kanagawa-wave"
                    >
                      <div className="w-2 h-2 bg-kanagawa-pink rounded-full mr-3"></div>
                      <span className="text-kanagawa-fg text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
