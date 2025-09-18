import { Heart, Github, MessageCircle, Instagram } from "lucide-react";

import pfp from '../../assets/pfp.png'
import pfp2 from '../../assets/pfp2.jpeg'

const DevCard = ({ Name, Role, Logo, GitLink, InstaLink, WhaLink, Accent }) => {
  return (
    <div
      style={{ borderColor: `var(--${Accent})` }}
      className="group bg-bg-soft/5 backdrop-blur-sm rounded-sm p-4 border border-white/10 hover:border-accent/30 transition-all duration-300 min-w-[280px]">
      <div className="flex items-center gap-3 mb-3">
        <img src={Logo} className="rounded-full h-10 w-10 object-cover" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{Name}</h3>
        </div>
        <div>
          <span
            style={{ color: `var(--${Accent})`, borderColor: `var(--${Accent})` }}
            className="px-3 py-1 text-xs rounded-full border">{Role}</span>
        </div>
      </div>
      {/* Social Links */}
      <div className="flex items-center justify-center gap-2 pt-2">
        <span className="p-2 rounded-full bg-white/5 text-white/60 hover:bg-blue-500/20 hover:text-white cursor-pointer transition-colors duration-200">
          <Github size={16} />
        </span>

        <span className="p-2 rounded-full bg-white/5 text-white/60 hover:bg-green-500/20 hover:text-white cursor-pointer transition-colors duration-200">
          <MessageCircle size={16} />
        </span>

        <span className="p-2 rounded-full bg-white/5 text-white/60 hover:bg-pink-500/20 hover:text-white cursor-pointer transition-colors duration-200">
          <Instagram size={16} />
        </span>
      </div>

    </div>
  )
}


const Footer = () => {
  return (
    <footer className="w-full py-10 relative overflow-hidden font-main">
      {/* Azure Depths Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        {/* Main logo section */}
        <div className="text-center mb-12 font-logo text-5xl">
          <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]">IAP</span>
          <span className="text-violet-400 drop-shadow-[0_0_20px_rgba(167,139,250,0.5)]">LAB</span>
        </div>

        {/* Minimal Developer Cards */}
        <h1 className=" text-center my-6">Built By</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <DevCard Name={'ZakariaX'} Logo={pfp} Role={'FrontEnd'} Accent={'accent'} />
          <DevCard Name={'Adaam'} Logo={pfp2} Role={'Drives'} Accent={'second'} />
        </div>

        {/* Bottom section */}
        <div className="text-center border-t border-white/10 pt-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-white/80 text-lg">Thank you for visiting</span>
            <Heart size={20} fill="red" className="text-red-600 animate-pulse" />
          </div>

          <div className="text-white/50 text-sm">
            <p className="text-xs">© 2025 IAPLAB</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;