import { useEffect, useRef, useState } from 'react';
import { Youtube, Inbox, Info, MenuIcon, MessageCircleQuestionMark } from 'lucide-react';
import { tempInboxData } from './inbox_datas';

import AboutDialog from './about_dialog';
import InboxDialog from './inbox_dialog';

function Header() {
  const headerRef = useRef(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isInboxOpen, setIsInboxOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const DropRef = useRef(null);


  const handleScroll = () => {
    if (!headerRef.current) return;
    const headerHeight = headerRef.current.offsetHeight;
    setScrolled(window.scrollY > headerHeight);
  };

  const handleClickOutside = (e) => (DropRef.current && !DropRef.current.contains(e.target)) && setIsDropDown(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const openInbox = () => setIsInboxOpen(true);
  const closeInbox = () => setIsInboxOpen(false);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // {Header Navbar Item}
  const NavbarItem = ({ lab, icon, clickEvent }) => {
    return (
      <div onClick={() => clickEvent && clickEvent()} className={`text-xs  bg-second px-3 py-1 flex text-text items-center gap-1 cursor-pointer transition shadow-[3px_3px_0_var(--text-soft)] hover:shadow-none hover:translate-[3px]`}>
        <i className={icon}></i>
        <span className='font-poppins uppercase font-bold'>{lab}</span>
      </div>
    );
  };

  // {Drop Down Item}
  const DropDownItem = ({ icon, lab, clickEvent }) => {
    return (
      <li onClick={() => clickEvent && clickEvent()} className="flex items-center justify-between w-full p-4 text-sm text-text cursor-pointer font-poppins ">
        <span className='font-semibold'>{lab}</span>
        <i className={icon}></i>
      </li>
    );
  };
  // {DropDown}
  const DropDown = ({ visible = false }) => {
    return visible && (
      <ul className={`absolute right-0 mt-2 min-w-48 flex flex-col items-center bg-bg overflow-hidden transition`}>
        <DropDownItem lab="Inbox" icon={'fa-solid fa-inbox'} clickEvent={openInbox} />
        <DropDownItem lab="Youtube" icon={'fa-brands fa-youtube'} clickEvent={() => window.open('https://www.youtube.com/@WrittenArt-u4r', '_blank', 'noopener,noreferrer')} />
        <DropDownItem lab="About" icon={'fa-solid fa-circle-info'} clickEvent={openDialog} />
      </ul>
    );
  };



  return (
    <>
      <header ref={headerRef} className={`fixed w-full z-50 flex top-0 items-center justify-between p-4 md:p-8 transition-all select-none  ${scrolled ? 'bg-bg/90 backdrop-blur-md py-4 md:py-5' : 'bg-transparent'}`} >

        {/* Logo */}
        <div
          className={`md:text-4xl leading-none text-3xl font-logo font-extrabold transition flex items-end `} translate='no'>
          <span className="text-accent drop-shadow-[0_0_12px_var(--accent)]">IAP</span>
          <span className="text-sub drop-shadow-[0_0_12px_var(--sub)]">LAB</span>
          <span className="text-text-soft text-sm font-gortesk ml-1">Stable</span>
        </div>

        {/* Navbar */}
        <div className={`md:flex hidden items-center gap-4 list-none`}>
          <NavbarItem lab="Inbox" icon={"fa-solid fa-inbox"} clickEvent={openInbox} />
          <NavbarItem lab="Youtube" icon={'fa-brands fa-youtube'} clickEvent={() => window.open('https://www.youtube.com/@WrittenArt-u4r', '_blank', 'noopener,noreferrer')} />
          <NavbarItem lab="About" icon={'fa-solid fa-circle-info'} clickEvent={openDialog} />
        </div>

        {/* Mobile Navbar */}
        <div ref={DropRef} className='relative md:hidden'>
          <MenuIcon className='cursor-pointer text-text' onClick={() => setIsDropDown((prev) => !prev)} />
          <DropDown visible={isDropDown} />
        </div>

      </header >

      <AboutDialog isOpen={isDialogOpen} onClose={closeDialog} />
      <InboxDialog isOpen={isInboxOpen} onClose={closeInbox} items={tempInboxData} />

    </>
  );
}

export default Header;
