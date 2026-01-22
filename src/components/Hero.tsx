import { CoolMode } from './magicui/cool-mode';
import { motion } from 'framer-motion';
import Baymax from './Baymax';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#EFF0EF] flex flex-col justify-center items-center text-[#2D2A32]">
      
      <CoolMode>
        <motion.div
          className="mb-2 mt-[10%] border-2 border-[#dad9da] text-[#939195] rounded-full py-2 px-6 select-none cursor-crosshair z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          5+ Happy Clients
        </motion.div>
      </CoolMode>

      <div className="relative flex justify-center w-full px-4 md:px-0 md:w-[80%]">
        <motion.div
          className="absolute -top-[70%] lg:-top-[55%] left-2 lg:-left-10 hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Baymax shadowX={4} shadowY={-4} />
        </motion.div>

        <motion.div
          className="absolute -top-[50%] md:-top-[120%] lg:-top-[40%] right-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Baymax shadowX={-4} shadowY={-4} />
        </motion.div>

        <motion.div
          className="absolute -bottom-[130%] md:-bottom-[260%] lg:-bottom-[70%] left-4 lg:left-[15%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Baymax shadowX={-4} shadowY={-4} />
        </motion.div>

        <motion.div
          className="absolute -top-[70%] md:-top-[140%] left-2 lg:left-[43.2%] lg:-top-[90%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Baymax shadowX={4} shadowY={-4} helmetOn={true}/>
        </motion.div>

        <motion.div
          className="absolute -bottom-[115%] md:-bottom-[220%] lg:-bottom-[115%] right-[10%] md:right-4 lg:right-[10%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Baymax shadowX={4} shadowY={-4} />
        </motion.div>

        <motion.h1
          className="text-[clamp(4rem,8vw,8rem)] leading-[clamp(3.5rem,8vw,7rem)] tracking-[-0.075em] font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Onboard a kick-ass developer. Today.
        </motion.h1>
      </div>

      <motion.p
        className="w-full px-4 md:px-0 py-8 text-center text-[clamp(1rem,3vw,1.5rem)] leading-snug tracking-tight font-normal"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Replace weeks of recruiting with seconds.
        <br className="hidden md:block" />
        Hire a cool freelance developer now.
      </motion.p>

      <motion.a
        href="mailto:tarun234.tg@gmail.com"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <button className="-mt-4 bg-[#2d2a32] text-white text-[clamp(1rem,2.5vw,1.125rem)] font-semibold rounded-full px-8 md:px-10 py-4 md:py-6 hover:scale-105 transition-all duration-200">
          Start Today
        </button>
      </motion.a>
    </div>
  );
};

export default Hero;
