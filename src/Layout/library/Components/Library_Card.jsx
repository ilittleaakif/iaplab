const LibraryCard = ({ title, onClick, link, icon }) => {
  const handleClick = () => (onClick ? onClick() : window.open(link, "_blank"));
  return (
    <div
      onClick={handleClick}
      className="flex flex-col gap-3 items-center justify-center rounded-xs
        px-4 py-6 sm:p-6 border-2 border-border bg-bg-card shadow-a
        cursor-pointer transition-all duration-500
        hover:shadow-c hover:-translate-y-0.5 hover:border-border-dark"
    >
      <i className={`sm:text-2xl text-lg ${icon} text-accent`}></i>
      <p className="text-sm sm:text-lg font-semibold text-text-soft">{title}</p>
    </div>
  );
};
export default LibraryCard;
