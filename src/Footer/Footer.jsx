import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bg-soft text-text py-10 flex flex-col items-center justify-center select-none">
      <div className="text-3xl font-logo md:text-4xl mb-4 relative">
        <span className="text-accent text-shadow-[0_0_20px_var(--color-accent)]">IAP</span>
        <span className="text-sub text-shadow-[0_0_20px_var(--color-sub)]">lab</span>
      </div>

      <div className="text-text-soft font-ibm flex items-center gap-2 text-sm md:text-base">
        <span>Merci pour votre visite</span>
        <Heart size={18} className="text-accent animate-pulse" />
      </div>
    </footer>
  );
};

export default Footer;
