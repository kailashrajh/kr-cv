import { motion } from 'framer-motion';
import { Code, Database, Globe } from 'lucide-react';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (    <section id="about" className="py-20 bg-kanagawa-bgLight">
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
            About Me
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-kanagawa-yellow">
                Passionate Software Developer & Quality Engineer
              </h3>
              <div className="space-y-4 text-kanagawa-fgDark leading-relaxed">
                <p>
                  I'm a dedicated software developer with over 5 years of experience in full-stack development 
                  and software testing. Currently working at Derivco as a Developer L2 and was previously a Software Development 
                  Engineer in Test (SDET) L2, I specialize in building robust, scalable applications and 
                  comprehensive testing solutions.
                </p>
                <p>
                  My journey started with a Bachelor's degree in Computer and Information Sciences from 
                  IIE Varsity College, where I developed a strong foundation in Object-Oriented Programming, 
                  database management, and cloud computing.
                </p>
                <p>
                  I'm passionate about delivering high-quality software solutions and have experience with 
                  modern technologies including React, Angular, .NET, Azure, and various testing frameworks. 
                  I thrive in collaborative environments and enjoy solving complex technical challenges.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid gap-6"
              variants={itemVariants}
            >              <div className="flex items-start space-x-4 p-6 bg-kanagawa-bg rounded-lg border border-kanagawa-wave">
                <Code className="w-8 h-8 text-kanagawa-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-kanagawa-fg mb-2">Full Stack Development</h4>
                  <p className="text-kanagawa-fgDark text-sm">
                    Building end-to-end applications with modern frameworks and best practices
                  </p>
                </div>
              </div>
                <div className="flex items-start space-x-4 p-6 bg-kanagawa-bg rounded-lg border border-kanagawa-wave">
                <Database className="w-8 h-8 text-kanagawa-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-kanagawa-fg mb-2">Test Automation</h4>
                  <p className="text-kanagawa-fgDark text-sm">
                    Creating comprehensive test suites and automation frameworks for quality assurance
                  </p>
                </div>
              </div>
                <div className="flex items-start space-x-4 p-6 bg-kanagawa-bg rounded-lg border border-kanagawa-wave">
                <Globe className="w-8 h-8 text-kanagawa-teal flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-kanagawa-fg mb-2">Cloud & DevOps</h4>
                  <p className="text-kanagawa-fgDark text-sm">
                    Implementing CI/CD pipelines and cloud-based solutions for scalable applications
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
