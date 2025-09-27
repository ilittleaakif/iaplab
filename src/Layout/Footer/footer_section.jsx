import { Heart, Github, MessageCircle, Instagram } from "lucide-react";
import * as Wizard from '../../Data/Wizard'
import pfp from '/Logos/zakaria.png'
import pfp2 from '/Logos/adam.jpeg'
import frontend from '/Assets/frontend.svg'
import backend from '/Assets/backend.svg'
import CodingGuy from '/Assets/GuyCoding.png'


import { DevCard } from "../../Components/DevCard";
const Footer = () => {
  return (
    <footer className="w-full py-10 relative overflow-hidden font-main select-none">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),      repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)    `, }} />


      <div className="relative z-10 max-w-6xl mx-auto px-6 text-text">


        {/* Minimal Developer Cards */}
        <h1 className="text-center my-4 w-fit mx-auto px-2 border border-border-dark text-text-soft font-code tracking-tighter text-sm">Built By</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <DevCard svg={frontend} Name={'ZakariaX'} Logo={pfp} Role={'FrontEnd'} Accent={'second'} WhaLink={'https://wa.me/212673999182'} GitLink={'https://github.com/Zakariaiouiri'} />
          <DevCard svg={backend} Name={'Adaam'} Logo={pfp2} Role={'BackEnd'} Accent={'accent'} WhaLink={'https://wa.me/212656105609'} />
        </div>

        <div className="w-fit font-code tracking-tighter text-sm md:text-lg mx-auto my-6 flex items-center gap-2">
          <span>Are you a web developer?</span>
          <span className="text-fourth font-bold cursor-pointer hover:text-second transition-colors">Team up</span>
        </div>

        <img src={CodingGuy} className="mx-auto md:max-w-52 max-w-1/3" />
        {/* Bottom section */}
        <div className="text-center border-t border-text/10 pt-6">
          <div className="flex items-center  justify-center gap-2 mb-4">
            <span className="text-text/80 text-lg ">Thank you for visiting</span>
            <Heart size={20} fill="red" className="text-red-600 animate-pulse" />
          </div>

          <div className="text-text/50 text-sm">
            <p className="text-xs">© 2025 IAPLAB</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;