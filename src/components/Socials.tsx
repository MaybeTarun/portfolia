import linkedin from '../assets/LinkedinLogo.svg';
import twitter from '../assets/XLogo.svg';
import github from '../assets/GithubLogo.svg';
import email from '../assets/EnvelopeSimple.svg';

const Socials = () => {
  return (
    <div className="flex flex-row justify-end basis-[150px] md:basis-[200px]">
      <a 
        href="http://www.linkedin.com/in/maybetarun" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-1 py-2 md:p-2 rounded-full transition-transform duration-200 hover:scale-110 color-white"
      >
        <img src={linkedin} alt="LinkedIn" className="h-4 w-4 md:h-6 md:w-6" />
      </a>
      
      <a 
        href="https://twitter.com/MaybeTarun" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-1 py-2 md:p-2 rounded-full transition-transform duration-200 hover:scale-110"
      >
        <img src={twitter} alt="Twitter/X" className="h-4 w-4 md:h-6 md:w-6" />
      </a>
      
      <a 
        href="https://github.com/MaybeTarun" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-1 py-2 md:p-2 rounded-full transition-transform duration-200 hover:scale-110"
      >
        <img src={github} alt="GitHub" className="h-4 w-4 md:h-6 md:w-6" />
      </a>
      
      <a 
        href="mailto:tarun234.tg@gmail.com"
        className="px-1 py-2 md:p-2 rounded-full transition-transform duration-200 hover:scale-110"
      >
        <img src={email} alt="Email" className="h-4 w-4 md:h-6 md:w-6" />
      </a>
    </div>
  )
}

export default Socials