import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { HeaderQuotes } from '../../Data/Library_Datas';

function Header() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const TypedRef = useRef();

  const len = HeaderQuotes.length;
  const RandomQuote = HeaderQuotes[Math.floor(Math.random() * len)];

  useEffect(() => {
    const typed = new Typed(TypedRef.current, {
      strings: [RandomQuote],
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
    <header ref={headerRef} className={`fixed w-full z-50 flex top-0 flex-col items-center justify-center p-4 sm:p-8 transition-all select-none  ${scrolled ? 'bg-bg py-2 sm:py-4' : 'bg-transparent'}`} >
      {/* logo */}
      <div className='relative'>
        <h1 className="font-bold animate-fadein sm:text-4xl tracking-tighter px-4 text-3xl relative font-logo transition bg-gradient-to-r from-text to-text-soft  bg-clip-text text-transparent">IAPLAB</h1>
        <p ref={TypedRef} className='font-hand text-fifth sm:text-[14px] text-[11px] absolute left-1/2 -translate-x-1/2 sm:-bottom-[16px] -bottom-[10px] block whitespace-nowrap'></p>
      </div>
    </header >
  );
}

export default Header;