import Socials from './Socials';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="mt-16 w-full h-full flex flex-col justify-center items-center">
      <motion.div className='w-full h-fit z-40' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}><Socials/></motion.div>
      <motion.h2 className="w-full px-4 md:px-0 md:w-[80%] text-[clamp(4rem,8vw,8rem)] leading-[clamp(3.5rem,8vw,7rem)] tracking-tighter font-bold text-center text-[#2D2A32]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>Think less.</motion.h2>
      <motion.h2 className="w-full px-4 md:px-0 md:w-[80%] text-[clamp(4rem,8vw,8rem)] leading-[clamp(3.5rem,8vw,7rem)] tracking-tighter font-bold text-center text-[#2D2A32]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: true }}>Wait less.</motion.h2>
      <motion.h2 className="w-full px-4 md:px-0 md:w-[80%] text-[clamp(4rem,8vw,8rem)] leading-[clamp(3.5rem,8vw,7rem)] tracking-tighter font-bold text-center text-[#2D2A32]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
        Click {" "}
        <a href='mailto:tarun234.tg@gmail.com?subject=I clicked Yes 😎'><span className="relative inline-block px-6 py-2 z-0 cursor-pointer hover:scale-95 transition-all duration-200">
          <span className="relative inline-block z-10 -rotate-12 text-[#EFF0EF]">Yes</span>
          <span className="pointer-events-none absolute -inset-1 -rotate-12 bg-[#2D2A32] border-2 border-[#EFF0EF] rounded-[1rem] md:rounded-[2rem] -z-10" />
        </span></a>
      </motion.h2>
      <motion.p className="w-full px-6 md:px-0 md:w-[40vw] text-[clamp(2rem,3vw,3rem)] leading-[clamp(2rem,3vw,3rem)] tracking-tight font-semibold text-right text-[#2D2A32]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>to work <br/> with me.</motion.p>
    </div>
  )
}

export default Contact