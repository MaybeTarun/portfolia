import ProjectLoop from './Loops/ProjectLoop';
import { motion } from 'framer-motion';
import bento from '../assets/bento.png';
import mana from '../assets/mana.png';
import aaargh from '../assets/aaargh.png';
import metalc from '../assets/metalc.png';
import portfolio from '../assets/portfolio.png';
import surgeon from '../assets/surgeon.png';
import cognify from '../assets/cognify.png';

const Work = () => {
  
  const projectline1 = [
    { src: bento, href: "https://bento-gen.vercel.app/", alt: "Bento Gen" },
    { src: mana, href: "https://manahouse.in/", alt: "Mana House" },
    { src: aaargh, href: "https://aaargh.vercel.app/", alt: "Aaargh!!" },
    { src: cognify, href: "https://github.com/MaybeTarun/Cognify", alt: "Cognify" }
  ];

  const projectline2 = [
    { src: surgeon, href: "https://surgeonrkl.com/", alt: "Surgeon Portfolio" },
    { src: metalc, href: "https://old.manahouse.in/", alt: "Metalc Productions" },
    { src: portfolio, href: "https://maybetarun.vercel.app/", alt: "old portfolio" }
  ];


  return (
    <div className="w-full h-full">
      <div className="">
        <motion.div className="relative overflow-hidden" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>
          <ProjectLoop
            logos={projectline1}
            speed={60}
            direction="right"
            logoHeight={300}
            gap={30}
            scaleOnHover
            ariaLabel="projects"
          />
          <ProjectLoop
            logos={projectline2}
            speed={60}
            direction="left"
            logoHeight={300}
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