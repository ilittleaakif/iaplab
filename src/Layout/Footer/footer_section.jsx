import { Heart, Github, MessageCircle, Instagram } from "lucide-react";
import * as Wizard from '../../Data/Wizard'
import pfp from '/Logos/zakaria.png'
import pfp2 from '/Logos/adam.jpeg'

const DevCard = ({ Name, Role, Logo, GitLink, InstaLink, WhaLink, Accent }) => {
  return (
    <div
      style={{ '--local': `var(--${Accent})` }}
      className="group rounded-sm p-4 border-2 border-[var(--local)] min-w-[280px]">

      <div className="flex items-center gap-3 mb-3">
        <img src={Logo} className="rounded-full h-10 w-10 object-cover" />
        <h3 className="flex-1 text-lg text-shadow-[0_0_10px_var(--local)] font-semibold text-text">{Name}</h3>

        <span className="px-2 text-[var(--local)] border-[var(--local)] py-0.5 text-xs rounded-full border ">{Role}</span>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-start gap-2 pt-2">
        <i
          onClick={() => Wizard.OpenLink(GitLink)}
          className="fa-brands fa-github rounded-full text-white/40 hover:text-blue-900 cursor-pointer transition-colors"></i>
        <i
          onClick={() => Wizard.OpenLink(GitLink)}
          className="fa-brands fa-whatsapp rounded-full text-white/40 hover:text-whatsapp cursor-pointer transition-colors"></i>
        <i
          onClick={() => Wizard.OpenLink(GitLink)}
          className="fa-brands fa-instagram rounded-full text-white/40 hover:text-orange-400 cursor-pointer transition-colors"></i>
      </div>

    </div>
  )
}


const Footer = () => {
  return (
    <footer className="w-full py-10  relative overflow-hidden font-main select-none">
      {/* Azure Depths Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">


        {/* Minimal Developer Cards */}
        <h1 className=" text-center my-4">Built By</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <DevCard Name={'ZakariaX'} Logo={pfp} Role={'FrontEnd'} Accent={'second'} WhaLink={'https://wa.me/212673999182'} GitLink={'https://github.com/Zakariaiouiri'} />
          <DevCard Name={'Adaam'} Logo={pfp2} Role={'BackEnd'} Accent={'accent'} WhaLink={'https://wa.me/212656105609'} />
        </div>

        <div className="w-fit text-sm md:text-lg mx-auto my-6 flex items-center gap-2">
          <span>Are you a web developer?</span>
          <span className="text-accent font-bold cursor-pointer hover:text-second transition-colors">Team up</span>
        </div>

        {/* Bottom section */}
        <div className="text-center border-t border-text/10 pt-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-text/80 text-lg">Thank you for visiting</span>
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