import { X, BookOpen, Code } from "lucide-react";
import pfp from '../assets/pfp.png'
import pfpb from '../assets/pfp2.jpeg'

const OpenLink = (link) => window.open(link, "_blank");


const DevCard = ({ Name, Logo, icon: Icon, Role, Link }) => {

  return (
    <div onClick={() => OpenLink(Link)} className="flex items-center w-full max-w-md gap-4 p-3 pr-6 transition shadow-sm cursor-pointer group bg-bg-soft hover:shadow-md rounded-xl">
      <img src={Logo} className="object-cover w-12 h-12  rounded-full "
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-text font-logo transition group-hover:text-accent group-hover:text-shadow-[0_0_8px_var(--accent)]">{Name}</h3>
        <p className="text-xs text-accent transition group-hover:text-shadow-[0_0_6px_var(--accent)]">{Role}</p>
      </div>
      <Icon className="text-accent w-5 h-5 ml-auto transition group-hover:drop-shadow-[0_0_8px_var(--accent)]" />
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
    <div onClick={handleBackdropClick} className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none font-gortesk bg-black/10 backdrop-blur-sm">

      {/* Container */}
      <div className="flex flex-col items-center w-full max-w-md shadow-xl bg-text md:max-w-lg rounded-2xl font-ibm animate-slideup" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="w-full flex items-center justify-between md:p-6 p-4 border-b border-bg/90 *:text-bg mb-4">
          <h2 className="text-sm font-bold md:text-xl">À propos de notre bibliothèque</h2>
          <X className="p-1 rounded-lg cursor-pointer hover:bg-bg/20" onClick={onClose} size={30} />
        </div>

        {/* Body */}
        <div className="flex flex-col items-center w-full p-6">
          <div className="mb-6 text-center">
            <div className="inline-flex p-3 mb-3 bg-blue-100 rounded-full animate-float">
              <BookOpen size={28} className="text-accent " />
            </div>
            <h3 className="mb-2 md:text-xl text-base  font-semibold text-gray-800 font-gortesk">Salut à toi ! 👋</h3>
            <p className="text-bg-soft font-poppins  md:text-base text-sm">Voici notre petit coin d’internet où nous partageons des livres, des ressources et des découvertes intéressantes. Rien de compliqué, juste des amis qui s’entraident pour apprendre !</p>
          </div>





          {/* Développeur */}

          <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
            <DevCard Link={'https://wa.me/212673999182'} Logo={pfp} Name="ZakariaX" Role="développeur" icon={Code} />
            <DevCard Link={'https://wa.me/212656105609'} Logo={pfpb} Name="Adam" Role="développeur" icon={Code} />
          </div>





          {/* button */}
          <button className="px-8  py-2 my-4 font-bold cursor-pointer font-poppins text-text rounded-xl bg-gradient-to-br from-bg to-bg-soft hover:from-bg-bg hover:to-bg-soft/90" onClick={onClose} >Compris !</button>


        </div>
      </div>
    </div>
  );
};

export default AboutDialog;
