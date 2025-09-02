import { motion } from 'framer-motion';

function Benefits() {
  return (
    <>
      <motion.h1 className="text-[clamp(2rem,4vw,4rem)] tracking-tighter font-extrabold text-[#2D2A32]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>Ready when you are</motion.h1>
      <motion.p className="text-[clamp(0.8rem,3vw,1.3rem)] tracking-tight font-light text-[#2D2A32] mb-8" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>The instant alternative to hiring a developer.</motion.p>
      
      <div className="w-full px-4 md:px-0 md:w-1/2 flex flex-col md:flex-row gap-3 md:gap-6">

        <motion.div className="bg-[#2D2A32] rounded-[2rem] p-8 text-[#EFF0EF] md:w-1/2 flex flex-col justify-between" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>
          <h3 className="text-xl font-semibold mb-4 text-[#EFF0EF]">An Awesome Developer</h3>
          <p className="text-base md:text-lg leading-relaxed text-[#bcbabd]">With 4+ years of experience, you&apos;ll always work directly with the same awesome developer on every project. No hand-offs. No middlemen. Just quality work.</p>
        </motion.div>
        
        <div className="flex flex-col gap-3 md:gap-6 md:w-1/2">
          <motion.div className="bg-white rounded-[2rem] p-8" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-semibold mb-4 text-[#2D2A32]">Project-based pricing</h3>
            <p className="text-base md:text-lg leading-relaxed text-[#6c696f]">No monthly retainers or hidden costs. Get transparent, fair pricing for each project with no surprises.</p>
          </motion.div>
          
          <motion.div className="bg-white rounded-[2rem] p-8" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-semibold mb-4 text-[#2D2A32]">Pause anytime</h3>
            <p className="text-base md:text-lg leading-relaxed text-[#6c696f]">Short of work this month? Put your project on hold and resume when you're ready. No pressure, no commitments.</p>
          </motion.div>
        </div>

      </div>

      <div className="w-full px-4 md:px-0 md:w-1/2 flex flex-col mt-3 md:mt-6 md:flex-row gap-3 md:gap-6">
              
        <div className="flex flex-col gap-3 md:gap-6 md:w-1/2">
          <motion.div className="bg-white rounded-[2rem] p-8" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-semibold mb-4 text-[#2D2A32]">No hiring hassle</h3>
            <p className="text-base md:text-lg leading-relaxed text-[#6c696f]">Skip the CV reviews, interviews, and onboarding. I'm ready to start coding immediately on your project.</p>
          </motion.div>
          
          <motion.div className="bg-white rounded-[2rem] p-8" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-semibold mb-4 text-[#2D2A32]">Start this week</h3>
            <p className="text-base md:text-lg leading-relaxed text-[#6c696f]">No waiting for availability or scheduling conflicts. Get your project started immediately, not weeks from now.</p>
          </motion.div>
        </div>

        <motion.div className="bg-[#DAD9DA] rounded-[2rem] p-8 text-[#EFF0EF] md:w-1/2 flex flex-col justify-between" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>
          <h3 className="text-xl font-semibold mb-4 text-[#2D2A32]">Always available</h3>
          <p className="text-base md:text-lg leading-relaxed text-[#615e64]">As a dedicated freelancer, I'm flexible and available when you need me <span className="italic text-[#615e64]">(maybe not on holidays)</span>. No waiting for team schedules or availability slots.</p>
        </motion.div>

      </div>
      
    </>
  )
}

export default Benefits