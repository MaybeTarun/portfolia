import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ['work', 'benefits', 'services', 'contact'];
      let currentSection = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100;
          
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getNavLinkClass = (section: string) => {
    const baseClass = "transition-all duration-200 cursor-pointer";
    const isActive = activeSection === section;
    
    if (isActive) {
      return `${baseClass} text-[#2D2A32] underline underline-offset-2 font-medium`;
    }
    
    return `${baseClass} text-[#2D2A32] hover:underline hover:underline-offset-1`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-200">
      <div className={`transition-all duration-200 ease-in-out ${
        isScrolled ? 'w-[calc(100%-2rem)] md:w-2/3 rounded-full bg-white/40 backdrop-blur-md mx-4 my-4' : 'w-full'
      } h-16 flex flex-row px-6 md:px-8 items-center justify-between gap-8 md:gap-12`}>
        <div className='text-base md:text-lg cursor-pointer whitespace-nowrap basis-[150px] md:basis-[200px] text-white flex items-center gap-2'>
          <a href='https://www.maybetarun.in/' className='flex justify-center items-center gap-1 text-[#2D2A32] text-base md:text-lg'>
          MaybeTarun.in
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-6 md:gap-8 text-base">
          <a href="#work" className={getNavLinkClass('work')}>
            Work
          </a>
          <a href="#benefits" className={getNavLinkClass('benefits')}>
            Benefits
          </a>
          <a href="#services" className={getNavLinkClass('services')}>
            Services
          </a>
          <a href="#contact" className={getNavLinkClass('contact')}>
            Contact
          </a>
        </div>

        <div className="md:hidden relative">
          <button
            onClick={toggleMobileMenu}
            className="text-[#2D2A32] p-2 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-full right-0 mt-4 w-48 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <a 
                href="#work" 
                className={`block px-4 py-2 transition-colors duration-200 ${activeSection === 'work' ? 'text-[#2D2A32] underline underline-offset-2 font-medium' : 'text-[#2D2A32] hover:underline hover:underline-offset-1'}`}
                onClick={closeMobileMenu}
              >
                Work
              </a>
              <a 
                href="#benefits" 
                className={`block px-4 py-2 transition-colors duration-200 ${activeSection === 'benefits' ? 'text-[#2D2A32] underline underline-offset-2 font-medium' : 'text-[#2D2A32] hover:underline hover:underline-offset-1'}`}
                onClick={closeMobileMenu}
              >
                Benefits
              </a>
              <a 
                href="#services" 
                className={`block px-4 py-2 transition-colors duration-200 ${activeSection === 'services' ? 'text-[#2D2A32] underline underline-offset-2 font-medium' : 'text-[#2D2A32] hover:underline hover:underline-offset-1'}`}
                onClick={closeMobileMenu}
              >
                Services
              </a>
              <a 
                href="#contact" 
                className={`block px-4 py-2 transition-colors duration-200 ${activeSection === 'contact' ? 'text-[#2D2A32] underline underline-offset-2 font-medium' : 'text-[#2D2A32] hover:underline hover:underline-offset-1'}`}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav;