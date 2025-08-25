import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
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

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-200 font-mono">
      <div className={`transition-all duration-200 ease-in-out ${
        isScrolled ? 'w-[calc(100%-2rem)] md:w-2/3 rounded-full bg-white/30 backdrop-blur-md mx-4 my-4' : 'w-full'
      } h-12 flex flex-row px-6 md:px-8 items-center justify-between gap-8 md:gap-12`}>
        <div className='font-mono text-base md:text-lg cursor-pointer whitespace-nowrap basis-[150px] md:basis-[200px] text-white flex items-center gap-2'>
          <a href='https://www.maybetarun.in/' className='flex justify-center items-center gap-1 text-[#2D2A32] text-base md:text-lg'>
          MaybeTarun.in
          </a>
        </div>
        
        {/* Desktop menu - hidden on mobile */}
        <div className="hidden md:flex items-center gap-6 md:gap-8 font-mono text-base md:text-lg">
          <a href="#work" className="text-[#2D2A32] hover:underline underline-offset-1 decoration-1 cursor-pointer">
            Work
          </a>
          <a href="#benefits" className="text-[#2D2A32] hover:underline underline-offset-1 decoration-1 cursor-pointer">
            Benefits
          </a>
          <a href="#services" className="text-[#2D2A32] hover:underline underline-offset-1 decoration-1 cursor-pointer">
            Services
          </a>
          <a href="#contact" className="text-[#2D2A32] hover:underline underline-offset-1 decoration-1 cursor-pointer">
            Contact
          </a>
        </div>

        {/* Mobile hamburger menu */}
        <div className="md:hidden relative">
          <button
            onClick={toggleMobileMenu}
            className="text-[#2D2A32] p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile menu popup */}
          {isMobileMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <a 
                href="#work" 
                className="block px-4 py-2 text-[#2D2A32] hover:bg-gray-100 transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Work
              </a>
              <a 
                href="#benefits" 
                className="block px-4 py-2 text-[#2D2A32] hover:bg-gray-100 transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Benefits
              </a>
              <a 
                href="#services" 
                className="block px-4 py-2 text-[#2D2A32] hover:bg-gray-100 transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="block px-4 py-2 text-[#2D2A32] hover:bg-gray-100 transition-colors duration-200"
                onClick={closeMobileMenu}
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