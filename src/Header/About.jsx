import { X, BookOpen, Users, Coffee, Code } from "lucide-react";
import pfp from '../assets/pfp.png'

const Row = ({ Title, icon: Icon, IconColor }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
    <div className={`p-2 rounded ${IconColor} bg-opacity-20`}>
      <Icon size={16} className={IconColor} />
    </div>
    <span className="text-gray-700 text-sm sm:text-base">{Title}</span>
  </div>
);

const AboutDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10 backdrop-blur-sm select-none"
    >
      <div
        className="w-full max-w-md md:max-w-lg bg-white shadow-xl rounded-2xl font-ibm animate-slideup"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Headerr */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 gap-3 md:gap-0">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-gortesk">À propos de notre bibliothèque</h2>
            <p className="text-sm hidden md:inline text-gray-500">Un simple espace de partage de ressources 📚</p>
          </div>
          <X className="text-dark cursor-pointer p-1 rounded-full hover:bg-dark/20" onClick={onClose} size={30} />
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="mb-6 text-center">
            <div className="inline-flex p-3 mb-3 bg-blue-100 rounded-full animate-float">
              <BookOpen size={28} className="text-blue-600 " />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800 font-gortesk">Salut à toi ! 👋</h3>
            <p className="leading-relaxed text-gray-600 font-poppins">Voici notre petit coin d’internet où nous partageons des livres, des ressources et des découvertes intéressantes. Rien de compliqué, juste des amis qui s’entraident pour apprendre !</p>
          </div>

          {/* Features */}
          <div className="mb-6 space-y-4">
            <Row Title="Partager des livres & ressources" icon={BookOpen} IconColor="text-blue-600" />
            <Row Title="S’entraider" icon={Users} IconColor="text-green-600" />
            <Row Title="Fait avec vigilance (merci le café ☕)" icon={Coffee} IconColor="text-purple-600" />

            {/*  */}

          </div>



          {/* Développeur */}
          <div className="p-4 text-center rounded-xl bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-lg font-semibold text-gray-800 font-ibm">Réalisé par</span>
              <Code />
            </div>
          </div>

          <div className="w-full p-3 bg-dark rounded-full flex items-center gap-2">
            <img src={pfp} className="h-12 aspect-square rounded-full object-cover" />
            <div className="flex font-grotesk flex-col items-start content-center text-light">
              <span className="font-bold">Zakaria Iouiri</span>
              <span className="text-[13px] font-light">Développeur FullStack</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-center p-6 border-t border-gray-100">
            <button className="cursor-pointer font-poppins font-bold px-6 py-2 text-white rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg" onClick={onClose} >Compris !</button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AboutDialog;
