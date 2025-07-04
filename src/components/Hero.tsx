import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="section-container text-center text-kanagawa-fg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-raleway mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-kanagawa-fgDark">KAILASH</span>{' '}
            <span className="text-kanagawa-fg">RAJH</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-kanagawa-yellow mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer | Test Automation Specialist
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-kanagawa-fgDark">kailash.rajh@gmail.com</p>
            <span className="hidden sm:inline-block text-kanagawa-teal">|</span>
            <p className="text-kanagawa-fgDark">071-605-3159</p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              onClick={scrollToAbout}
              className="bg-kanagawa-blue hover:bg-kanagawa-purple text-kanagawa-fg font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
            >
              View My Work
            </button>
            <a 
              href="#contact"
              className="bg-transparent border-2 border-kanagawa-orange text-kanagawa-orange hover:bg-kanagawa-orange hover:text-kanagawa-bg font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-kanagawa-teal opacity-70 hover:opacity-100" />
      </motion.div>
    </section>
  );
};

export default Hero;
