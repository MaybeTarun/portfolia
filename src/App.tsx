import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Wave from './assets/wave.svg';
import Idea from './components/Idea';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 1.0, 
      touchMultiplier: 2.0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }   

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
    <Nav/>
    <Hero/>
    <section id='work' className='w-full h-fit pb-16 pt-24 bg-[#EFF0EF]'>
      <Work/>
    </section>
    <section id='benefits' className='w-full min-h-screen bg-[#EFF0EF] pt-20 pb-6 md:pb-16 flex flex-col items-center'>
      <Benefits/>
    </section>
    <section id='services' className='w-full h-fit md:h-screen bg-[#EFF0EF] py-16 flex flex-col justify-center items-center'>
      <Services/>
    </section>
    <section id="idea" className="relative w-full h-screen bg-[#2D2A32] overflow-hidden">
      <div className='w-full h-32 bg-[#EFF0EF] block md:hidden'></div>
      <img src={Wave} alt="wave" className="relative w-full h-auto object-cover z-0"/>
      <img src={Wave} alt="wave flipped" className="absolute bottom-0 left-0 w-full h-auto object-cover rotate-180 z-0 md:-mb-28"/>
      <div className='absolute inset-0 z-10 flex items-center justify-center'><Idea /></div>
    </section>
    <section id='contact' className='w-full h-screen bg-[#EFF0EF] overflow-hidden'>
      <Contact/>
    </section>
    </>
  );
}

export default App;