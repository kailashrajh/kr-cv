import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = {
    institution: 'IIE Varsity College',
    degree: 'Bachelor of Computer and Information Sciences in Application Development',
    period: 'Sept 2014 - Apr 2019',
    courses: [
      'Object-Oriented Programming in C# and Java',
      'Native Android Development',
      'Database Management Systems',
      'Cloud Computing',
      'Computer Networking',
      'Project Management'
    ]
  };

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

  return (    <section id="education" className="py-20 bg-kanagawa-bg">
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
            Education
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-kanagawa-bgLight rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 border border-kanagawa-wave text-center"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-kanagawa-yellow/20 rounded-full flex items-center justify-center border border-kanagawa-yellow/30">
                  <Award className="w-8 h-8 text-kanagawa-yellow" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-kanagawa-fg mb-2">
                {education.institution}
              </h3>
              
              <h4 className="text-xl font-semibold text-kanagawa-orange mb-4">
                {education.degree}
              </h4>
              
              <div className="flex items-center justify-center text-kanagawa-fgDark text-sm mb-8">
                <Calendar className="w-4 h-4 mr-2" />
                {education.period}
              </div>
              
              <div className="border-t border-kanagawa-wave pt-6">
                <h5 className="text-lg font-semibold text-kanagawa-teal mb-4">
                  Key Courses & Specializations
                </h5>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {education.courses.map((course, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start p-4 bg-kanagawa-bg rounded-lg text-left border border-kanagawa-wave"
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-kanagawa-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-kanagawa-fg">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-kanagawa-green/10 rounded-lg border border-kanagawa-green/30">
                <h5 className="font-semibold text-kanagawa-green mb-2">Academic Focus</h5>
                <p className="text-kanagawa-fgDark text-sm">
                  Specialized in modern software development practices with emphasis on 
                  object-oriented programming, mobile development, and cloud technologies. 
                  Gained comprehensive knowledge in database design, system architecture, 
                  and project management methodologies.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
