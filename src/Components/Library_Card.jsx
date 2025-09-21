import { cn } from "@sglara/cn";


export const LibraryCard = ({ title, icon: Icon, iconClass = null, accent, onClick, link, className = "" }) => {
  const handleClick = () => (onClick) ? onClick() : window.open(link, "_blank");

  return (
    <div
      onClick={handleClick}
      style={{'--local': `var(--${accent})`}}
      className={cn(
        `flex gap-3 bg-gradient-to-br from-bg-card to-bg from items-center justify-center border-[var(--local)] 
        md:p-6 p-4 text-center cursor-pointer border-2 shadow-[0_0_2px_var(--local)] transition-all hover:shadow-[0_0_10px_var(--local)]`,
        "active:translate-y-1.5 hover:-translate-y-1.5",
        className
      )}
    >
      {iconClass ?
        <i className={iconClass}></i>
        :
        <Icon className={`w-4 h-4 md:w-6 md:h-6 text-[var(--local)]`} />
      }
      <h3 className="text-sm md:text-lg font-bold text-text">{title}</h3>
    </div>
  );
};
