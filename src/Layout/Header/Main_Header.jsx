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
    <header ref={headerRef} className={`fixed w-full z-50 flex top-0 items-center justify-center p-4 md:p-8 transition-all select-none  ${scrolled ? 'bg-bg/90 backdrop-blur-md py-4 md:py-5' : 'bg-transparent'}`} >
      {/* Logo */}
      <div
        className={`md:text-4xl text-3xl font-logo font-extrabold transition flex items-center`}>
        <span className="text-accent drop-shadow-[0_0_12px_var(--accent)]">IAP</span>
        <span className="text-sub drop-shadow-[0_0_12px_var(--sub)]">LAB</span>
      </div>
    </header >
  );
}

export default Header;
