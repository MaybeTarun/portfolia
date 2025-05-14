import hero from '../assets/hero.png';
import hero2 from '../assets/hero2.png';
import Nav from './Nav';

const Hero = () => {
  return (
    <div className="w-full h-dvh flex flex-col">
      <Nav />
      <div className="flex-1 flex items-center justify-center p-8 md:p-12 w-full">
        <div className="w-full max-w-3xl aspect-[3/4] sm:aspect-[3/2] overflow-hidden relative group">
          <img 
            src={hero} 
            alt="yeah thats me" 
            className="w-full h-full object-cover object-right scale-90 sm:scale-100"
          />
          
          <img 
            src={hero2} 
            alt="alternative view" 
            className="absolute inset-0 w-full h-full object-cover object-right scale-90 sm:scale-100 
                     opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;