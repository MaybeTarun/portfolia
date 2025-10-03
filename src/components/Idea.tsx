import Microwave from '../assets/microwave.webp';
import Bulb from '../assets/bulb.webp';
import Web from '../assets/web.webp';
import { motion } from 'framer-motion';

const Idea = () => {
  return (
    <div className="w-full h-full mt-32 px-8 py-52 lg:py-44 lg:px-32 flex flex-col lg:flex-row justify-center items-center">
      <div className="flex items-start justify-start text-left w-full h-full">
        <motion.div className="relative" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>
          <h2 className="text-[clamp(3.5rem,6vw,8rem)] leading-[clamp(3rem,6vw,7rem)] font-semibold text-[#EFF0EF] uppercase">
            If you've<br/> got the<br/> idea
          </h2>
          <img 
            src={Bulb} 
            alt="Bulb" 
            className="absolute -bottom-6 right-12 lg:right-16 rotate-12 w-24 h-24 lg:w-40 lg:h-40"
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-end justify-end text-right w-full h-full">
        <motion.div className="relative" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>
          <img 
            src={Microwave} 
            alt="Microwave" 
            className="absolute -top-28 lg:-top-36 right-16 lg:right-32 w-36 h-36 lg:w-48 lg:h-48 -rotate-[2deg]"
          />
          <img 
            src={Web} 
            alt="Rotating Website" 
            className="absolute -top-[60px] lg:-top-[72px] right-[136px] lg:right-[224px] w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] webrotate"
          />
          <h2 className="text-[clamp(3.5rem,6vw,8rem)] leading-[clamp(3rem,6vw,7rem)] font-semibold text-[#EFF0EF] uppercase">
            leave the<br/> rest to me
          </h2>
          <p className="uppercase text-[clamp(1rem,3vw,1.2rem)] text-[#bcbabd]">"I will cook"</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Idea;
