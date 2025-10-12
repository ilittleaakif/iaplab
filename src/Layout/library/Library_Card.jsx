import { cn } from "@sglara/cn";

export const LibraryCard = ({ title, icon: Icon, onClick, link, className = "" }) => {
  const handleClick = () => (onClick ? onClick() : window.open(link, "_blank"));

  return (
    <div
      onClick={handleClick}
      className={cn(
        "flex relative sm:flex-col gap-3 items-center justify-center text-center rounded-sm",
        "p-4 sm:p-6 border-2 border-border-dark bg-bg-card",
        "cursor-pointer transition-all duration-300",
        "hover:shadow-sm hover:-translate-y-1 hover:border-text",
        "active:shadow-c", className,
      )}
    >
      <Icon className="w-5 h-5 sm:w-8 sm:h-8 text-accent-light" />
      <h3 className="text-sm sm:text-lg font-semibold text-text-soft">{title}</h3>
    </div>
  );
};
