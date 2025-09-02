import ProjectLoop from './Loops/ProjectLoop';
import test from '../assets/test.png';
import { motion } from 'framer-motion';

const Work = () => {
  
  const projectline1 = [
    { src: test, href: "https://bento-gen.vercel.app/", alt: "Test" },
    { src: test, href: "https://bento-gen.vercel.app/", alt: "Test" }
  ];

  const projectline2 = [
    { src: test, href: "https://bento-gen.vercel.app/", alt: "Test" },
    { src: test, href: "https://bento-gen.vercel.app/", alt: "Test" }
  ];


  return (
    <div className="w-full h-full">
      <div className="">
        <motion.div className="relative overflow-hidden" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>
          <ProjectLoop
            logos={projectline1}
            speed={60}
            direction="right"
            logoHeight={280}
            gap={30}
            scaleOnHover
            ariaLabel="projects"
          />
          <ProjectLoop
            logos={projectline2}
            speed={60}
            direction="left"
            logoHeight={280}
            gap={30}
            scaleOnHover
            ariaLabel="projects"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Work;