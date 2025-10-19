const Footer = () => {
  return (
    <footer className="w-full py-10 relative overflow-hidden font-main select-none">

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-text text-center border-t border-border-dark pt-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-text  text-lg">Thanks for your visit Mate!</span>
          <i className="fas fa-heart text-red-500 fa-bounce"></i>
        </div>

        <p className="text-text-muted text-sm">© 2025 IAPTeam</p>
      </div>
    </footer>
  );
};

export default Footer;