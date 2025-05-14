import linkedin from '../assets/LinkedinLogo.svg';
import twitter from '../assets/XLogo.svg';
import github from '../assets/GithubLogo.svg';
import email from '../assets/EnvelopeSimple.svg';

const Nav = () => {
  return (
    <div className="w-full h-12 flex flex-row px-4 md:px-8 items-center justify-between">
        <div className="font-mono text-base md:text-lg">
            <a href="/">Tarun Gupta</a>
        </div>
        <div className="flex flex-row gap-2 md:gap-4">
            <a href="http://www.linkedin.com/in/maybetarun" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="https://twitter.com/MaybeTarun" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter/X" className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="https://github.com/MaybeTarun" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="mailto:tarun234.tg@gmail.com">
            <img src={email} alt="Email" className="h-5 w-5 md:h-6 md:w-6" />
            </a>
        </div>
    </div>
  )
}

export default Nav