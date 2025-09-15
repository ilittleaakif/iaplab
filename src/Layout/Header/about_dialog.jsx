import { X, BookOpen, Code } from "lucide-react";
import pfp from '../../assets/pfp.png'
import pfpb from '../../assets/pfp2.jpeg'

const OpenLink = (link) => window.open(link, "_blank");


const DevCard = ({ Name, Logo, icon: Icon, Role, Link }) => {
  return (
    <div onClick={() => OpenLink(Link)} className="flex items-center bg-bg w-full gap-3 rounded-sm p-3 pr-6 transition cursor-pointer group">
      <img src={Logo} className="object-cover w-12 h-12  rounded-full "
      />
      <div className="flex flex-col justify-center">
        <h3 className="animate-pulse-grow text-accent font-logo transition group-hover:text-accent group-hover:text-shadow-[0_0_8px_var(--accent)]">{Name}</h3>
        <p className="animate-pulse-grow text-xs text-accent/90 transition group-hover:text-shadow-[0_0_6px_var(--accent)]">{Role}</p>
      </div>
      <Icon className="animate-pulse-grow text-accent w-5 h-5 ml-auto transition group-hover:drop-shadow-[0_0_8px_var(--accent)]" />
    </div>
  );
};





const AboutDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    // overlay
    <div onClick={handleBackdropClick} className="fixed inset-0 z-50 flex items-center justify-center select-none bg-black/10 backdrop-blur-sm">

      {/* Container */}
      <div className="flex font-main flex-col items-center md:w-full md:max-w-lg max-w-11/12 shadow-xl bg-text animate-slideup" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="w-full flex items-center justify-between md:p-6 py-2 px-4 border-b border-bg/90 text-bg md:mb-4">
          <h2 className="text-sm font-poppins font-bold md:text-xl">À propos</h2>
          <X className="p-1 border cursor-pointer shadow-[3px_3px_0_var(--bg)] active:shadow-none active:translate-[3px] transition" onClick={onClose} size={30} />
        </div>

        {/* Body */}
        <div className="flex flex-col items-center w-full p-6">
          <div className="mb-6 text-center flex flex-col items-center">
            <div className="inline-flex p-3 mb-3 bg-blue-100 rounded-full animate-float">
              <BookOpen size={28} className="text-accent " />
            </div>
            <span className="mb-2 md:text-xl text-base font-semibold text-bg">Salut à toi ! 👋</span>
            <p className="text-bg-soft md:text-base text-sm">Voici notre petit coin d’internet où nous partageons des livres, des ressources et des découvertes intéressantes. Rien de compliqué, juste des amis qui s’entraident pour apprendre !</p>
          </div>


          {/* Développeur */}
          <span className="font-bold font-gortesk my-3">Built by</span>
          <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
            <DevCard Link={'https://wa.me/212673999182'} Logo={pfp} Name="ZakariaX" Role="développeur" icon={Code} />
            <DevCard Link={'https://wa.me/212656105609'} Logo={pfpb} Name="Adam" Role="développeur" icon={Code} />
          </div>



          {/* button */}
          <div
            className="px-8 py-2 my-4 font-bold cursor-pointer font-poppins bg-bg-soft text-text shadow-[3px_3px_0_var(--bg)] active:shadow-none active:translate-[3px] transition"
            onClick={onClose}
          >Compris !</div>


        </div>
      </div>
    </div>
  );
};

export default AboutDialog;
