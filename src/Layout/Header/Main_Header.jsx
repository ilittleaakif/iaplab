import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

function Header() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const TypedRef = useRef();

  useEffect(() => {
    const typed = new Typed(TypedRef.current, {
      strings: ["Keep learning!"],
      typeSpeed: 80,
      cursorChar: ''
    });
    return () => typed.destroy();
  }, []);

  const handleScroll = () => {
    if (!headerRef.current) return;
    const headerHeight = headerRef.current.offsetHeight;
    setScrolled(window.scrollY > headerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className={`fixed w-full z-50 flex top-0 flex-col items-center justify-center p-4 md:p-8 transition-all select-none  ${scrolled ? 'bg-black py-4 md:py-4' : 'bg-transparent'}`} >
      {/* logo */}
      <div className='relative '>
        <span className="font-bold animate-fadein md:text-4xl text-3xl relative font-logo transition bg-gradient-to-r from-accent to-sixth  bg-clip-text text-transparent drop-shadow-[0_0_25px_var(--sixth)]">IAPLAB</span>
        <p ref={TypedRef} className='font-hand animate-pulse-grow text-third text-shadow-[0_0_10px] md:text-[12px] text-[10px] absolute left-1/2 -translate-x-1/2 md:-bottom-2.5 -bottom-[8px] block whitespace-nowrap'>keep going!</p>
      </div>
    </header >
  );
}

export default Header;