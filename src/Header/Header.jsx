import { useEffect, useRef, useState } from 'react';
import { Youtube, Inbox, Info, MenuIcon, MessageCircleQuestionMark } from 'lucide-react';
import { tempInboxData } from './InboxData';



import AboutDialog from './About';
import InboxDialog from './Inbox';

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
  const NavbarItem = ({ lab, icon: Icon, clickEvent }) => {
    return (
      <div onClick={() => clickEvent && clickEvent()} className={`rounded-lg px-2 flex text-text items-center gap-0.5 cursor-pointer transition hover:bg-second`}>
        <Icon className='h-4' />
        <span className='font-semibold uppercase font-poppins'>{lab}</span>

      </div>
    );
  };

  // {DropDown}
  const DropDown = ({ visible = false }) => {

    // {Drop Down Item}
    const DropDownItem = ({ icon: Icon, lab, clickEvent }) => {
      return (
        <li onClick={() => clickEvent && clickEvent()} className="flex items-center justify-between w-full p-4 text-sm text-text cursor-pointer font-poppins ">
          <span className='font-semibold'>{lab}</span>
          <Icon className="w-5 h-5" />
        </li>
      );
    };
    return visible && (
      <ul className={`absolute right-0 mt-2 min-w-48 rounded-md flex flex-col items-center bg-bg overflow-hidden transition`}>
        <DropDownItem lab="Inbox" icon={Inbox} clickEvent={openInbox} />
        <DropDownItem lab="Youtube" icon={Youtube} clickEvent={() => window.open('https://www.youtube.com/@WrittenArt-u4r', '_blank', 'noopener,noreferrer')} />
        <DropDownItem lab="Contact" icon={MessageCircleQuestionMark} clickEvent={() => console.log('Contact clicked')} />
        <DropDownItem lab="About" icon={Info} clickEvent={openDialog} />
      </ul>
    );
  };



  return (
    <>
      <header ref={headerRef} className={`fixed w-full z-50 flex top-0 items-center justify-between p-6 md:p-8 transition-all select-none  ${scrolled ? 'bg-bg/90 backdrop-blur-md py-4 md:py-5' : 'bg-transparent'}`} >

        {/* Logo */}
        <div
          className={`md:text-4xl leading-none text-3xl font-logo font-extrabold transition flex items-end`}>
          <span className="text-accent drop-shadow-[0_0_12px_var(--accent)]">IAP</span>
          <span className="text-sub drop-shadow-[0_0_12px_var(--sub)]">lab</span>
          <span className="text-text-soft text-sm font-gortesk ml-1">Beta</span>
        </div>

        {/* Navbar */}
        <div className={`md:flex hidden items-center gap-4 list-none`}>
          <NavbarItem lab="Inbox" icon={Inbox} clickEvent={openInbox} />
          <NavbarItem lab="Youtube" icon={Youtube} clickEvent={() => window.open('https://www.youtube.com/@WrittenArt-u4r', '_blank', 'noopener,noreferrer')} />
          <NavbarItem lab="Contact" icon={MessageCircleQuestionMark} clickEvent={() => console.log('Contact clicked')} />
          <NavbarItem lab="About" icon={Info} clickEvent={openDialog} />
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
