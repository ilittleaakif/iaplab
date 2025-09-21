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
    <header ref={headerRef} className={`fixed w-full z-50 flex top-0 items-center justify-center p-4 md:p-8 transition-all select-none  ${scrolled ? 'bg-black py-4 md:py-5' : 'bg-transparent'}`} >
      {/* Logo */}
      <div className={`animate-fadein md:text-4xl relative text-3xl font-logo font-extrabold transition flex flex-col items-center`}><div>
        <span className="text-accent drop-shadow-[0_0_12px_var(--accent)]">IAP</span>
        <span className="text-third drop-shadow-[0_0_12px_var(--third)]">LAB</span>
        {/* update */}
      </div>
        <span className='font-cute animate-pulse text-fourth text-shadow-[0_0_10px] md:text-[16px] text-[12px] absolute md:-bottom-2.5 -bottom-2'>Always with u!!</span>
      </div>
    </header >
  );
}

export default Header;
