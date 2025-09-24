import { cn } from "@sglara/cn";

export const LibraryCard = ({ title, icon: Icon, onClick, link, className = "" }) => {
  const handleClick = () => (onClick) ? onClick() : window.open(link, "_blank");

  return (
    <div
      onClick={handleClick}
      className={cn(
        `flex md:flex-col gap-3 bg-gradient-to-br from-bg-card to-bg-dark  from items-center justify-center
        md:p-6 p-4 text-center cursor-pointer border-border-light border-2 shadow-[0_0_0px_var(--second)] transition-all hover:shadow-[0_0_4px_var(--local)]`,
        "active:translate-y-1.5 hover:-translate-y-1.5",
        className
      )}
    >
      <Icon className={`w-4 h-4 md:w-8 md:h-8 text-second`} />
      <h3 className="text-sm md:text-lg font-bold text-text">{title}</h3>
    </div>
  );
};
