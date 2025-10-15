import { useEffect, useRef, useState } from 'react';

function Header() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

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
      <h1 className="font-bold animate-fadein sm:text-4xl tracking-tighter px-4 text-3xl relative font-logo transition bg-gradient-to-r from-text via-text-soft to-text-muted  bg-clip-text text-transparent">IAPLAB</h1>
    </header >
  );
}

export default Header;