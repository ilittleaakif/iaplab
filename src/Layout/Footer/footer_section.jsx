import { Heart } from "lucide-react";
import * as Wizard from '../../Data/Wizard'
import pfp from '/Logos/zakaria.png'
import pfp2 from '/Logos/adam.jpeg'
import frontend from '/Assets/frontend.svg'
import backend from '/Assets/backend.svg'
import CodingGuy from '/Assets/GuyCoding.png'


import { DevCard } from "./DevCard";
import { useNavigate } from "react-router-dom";
const Footer = () => {

  const navigate = useNavigate();
  return (
    <footer className="w-full py-10 relative overflow-hidden font-main select-none">

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-text">

        {/* Minimal Developer Cards */}
        {/* <h1 className="my-4 rounded-md w-fit mx-auto px-2 border border-text-soft text-text-soft text-sm">Built By</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <DevCard svg={frontend} Name={'Zakaria'} Logo={pfp} Role={'FrontEnd'} WhaLink={'https://wa.me/212673999182'} GitLink={'https://github.com/Zakariaiouiri'} />
          <DevCard svg={backend} Name={'Adaam'} Logo={pfp2} Role={'BackEnd'} WhaLink={'https://wa.me/212656105609'} />
        </div>

        <div className="my-8">
          <img src={CodingGuy} className="mx-auto md:max-w-[260px] w-full" />
          <div className="w-fit text-sm sm:text-lg mx-auto flex items-center justify-center gap-2 flex-wrap">
            <span>Are you a web developer?</span>
            <span
              className="text-accent font-bold cursor-pointer hover:text-accent-light transition-colors"
              onClick={() => navigate('/form/teamup')}
            >team up</span>
          </div>
        </div> */}

        {/* Bottom section */}
        <div className="text-center border-t border-border-dark pt-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-text  text-lg">Thank you for visiting</span>
            <Heart size={20} fill="red" className="text-youtube animate-pulse" />
          </div>

          <div className="text-text-muted text-sm">
            <p>© 2025 IAPTeam</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;