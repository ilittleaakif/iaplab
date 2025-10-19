export const LibraryCard = ({ title, onClick, link, className = "" }) => {
  const handleClick = () => (onClick ? onClick() : window.open(link, "_blank"));

  return (
    <div
      onClick={handleClick}
      className="flex sm:flex-col gap-3 items-center justify-center text-center rounded-sm 
        p-4 sm:p-6 border-2 border-border bg-bg-card shadow-a
        cursor-pointer transition-all duration-500
        hover:shadow-c hover:-translate-y-0.5 hover:rounded-br-2xl hover:rounded-tl-2xl hover:border-border-dark active:shadow-c"
    >
      <i className="fa-solid fa-graduation-cap text-accent"></i>
      <p className="text-sm sm:text-lg font-semibold text-text-soft">{title}</p>
    </div>
  );
};
