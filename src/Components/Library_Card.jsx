import { cn } from "@sglara/cn";

export const LibraryCard = ({ title, icon: Icon, onClick, link, className = "" }) => {
  const handleClick = () => (onClick ? onClick() : window.open(link, "_blank"));

  return (
    <div
      onClick={handleClick}
      className={cn(
        "flex md:flex-col gap-3 items-center justify-center text-center",
        "p-4 md:p-6 border-2 border-border-dark bg-bg-card",
        "cursor-pointer transition-all duration-300",
        "hover:shadow-md hover:-translate-y-1 hover:border-text",
        "active:shadow-c",
        className
      )}
    >
      <Icon className="w-6 h-6 md:w-10 md:h-10 text-second transition-colors duration-300 group-hover:text-accent" />
      <h3 className="text-sm md:text-lg font-semibold text-text-soft">{title}</h3>
    </div>
  );
};
