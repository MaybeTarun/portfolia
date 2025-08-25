import { CoolMode } from './magicui/cool-mode';

const Hero = () => {
  
  return (
    <div className='w-full min-h-screen bg-[#EFF0EF] flex flex-col justify-center items-center text-[#2D2A32]'>
      <CoolMode><div className="mb-2 md:mb-0 mt-20 md:mt-28 border border-[#939195] text-[#6c696f] rounded-full py-2 px-6 select-none cursor-grab z-20">Loved By Clients</div></CoolMode>
      <h1 className="w-full px-4 md:px-0 md:w-[80%] text-[clamp(4rem,8vw,8rem)] leading-[clamp(3.5rem,8vw,7rem)] tracking-tighter font-bold font-mono text-center">Onboard a kick-ass developer. Today.</h1>
      <p className="w-full px-4 md:px-0 py-8 md:py-12 text-center text-[clamp(1rem,3vw,1.5rem)] leading-snug tracking-tight font-light font-mono">Replace weeks of recruiting with minutes.<br className="hidden md:block"/> Hire a cool freelance developer now.</p>
      <a href="/"><button className="-mt-4 bg-[#2d2a32] text-white text-[clamp(1rem,2.5vw,1.125rem)] font-semibold rounded-full px-8 md:px-10 py-4 md:py-6 font-mono hover:scale-105 transition-all duration-200">Start Today</button></a>
    </div>
  );
}

export default Hero;