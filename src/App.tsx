import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import Benefits from './components/Benefits';
import Services from './components/Services';

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
    <section id='work' className='w-full h-screen bg-[#EFF0EF]'>
      <Work/>
    </section>
    <section id='benefits' className='w-full min-h-screen bg-[#EFF0EF] pt-16 pb-6 md:pb-16 flex flex-col items-center'>
      <Benefits/>
    </section>
    <section id='services' className='w-full h-fit md:h-screen bg-[#EFF0EF] py-16 flex flex-col justify-center items-center'>
      <Services/>
    </section>
    <section id='contact' className='w-full min-h-screen bg-[#EFF0EF] py-16'>
      
    </section>
    </>
  );
}

export default App;