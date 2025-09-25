import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

function Header() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const TypedRef = useRef();

  useEffect(() => {
    const typed = new Typed(TypedRef.current, {
      strings: ["Lightful as YOU!!!"],
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
    <header ref={headerRef} className={`fixed w-full z-50 flex top-0 flex-col items-center justify-center p-4 md:p-8 transition-all select-none  ${scrolled ? 'bg-bg/90 py-4 md:py-4' : 'bg-transparent'}`} >
      {/* logo */}
      <div className='relative '>
        <span className="font-bold animate-fadein md:text-4xl text-3xl relative font-logo transition bg-gradient-to-r from-text to-bg-dark  bg-clip-text text-transparent ">IAPLAB</span>
        <p ref={TypedRef} className='font-hand text-text-muted  md:text-[12px] text-[10px] absolute left-1/2 -translate-x-1/2 md:-bottom-[14px] -bottom-[11px] block whitespace-nowrap'></p>
      </div>
    </header >
  );
}

export default Header;