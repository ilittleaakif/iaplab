import { Heart } from "lucide-react";
import * as Wizard from '../../Data/Wizard'
import pfp from '/Logos/zakaria.png'
import pfp2 from '/Logos/adam.jpeg'
import frontend from '/Assets/frontend.svg'
import backend from '/Assets/backend.svg'
import CodingGuy from '/Assets/GuyCoding.png'


import { DevCard } from "../../Components/DevCard";
import { useNavigate } from "react-router-dom";
const Footer = () => {

  const navigate = useNavigate();
  return (
    <footer className="w-full py-10 relative overflow-hidden font-main select-none">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),      repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)    `, }} />


      <div className="relative z-10 max-w-6xl mx-auto px-6 text-text">


        {/* Minimal Developer Cards */}
        <h1 className="text-center shadow-[2px_2px_0_gray] my-4 w-fit mx-auto px-2 border border-border-dark text-text-soft text-sm">Built By</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <DevCard svg={frontend} Name={'ZakariaX'} Logo={pfp} Role={'FrontEnd'} Accent={'second'} WhaLink={'https://wa.me/212673999182'} GitLink={'https://github.com/Zakariaiouiri'} />
          <DevCard svg={backend} Name={'Adaam'} Logo={pfp2} Role={'BackEnd'} Accent={'accent'} WhaLink={'https://wa.me/212656105609'} />
        </div>

        <div className="my-8">
          <img src={CodingGuy} className="mx-auto md:max-w-[260px] w-full" />
          <div className="w-fit font-code tracking-tighter text-sm md:text-lg mx-auto flex items-center justify-center gap-2 flex-wrap">
            <span>Are you a web developer?</span>
            <span
              className="text-[#009DE9] font-bold cursor-pointer hover:text-second transition-colors"
              onClick={() => navigate('/form/teamup')}
            >Team up</span>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center border-t border-border-dark pt-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-text  text-lg">Thank you for visiting</span>
            <Heart size={20} fill="red" className="text-youtube animate-pulse" />
          </div>

          <div className="text-text-muted text-sm">
            <p className="text-xs">© 2025 IAPLAB</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;