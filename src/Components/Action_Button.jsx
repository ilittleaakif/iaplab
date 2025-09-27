import { cn } from "@sglara/cn";

export const ActionBtn = ({ icon, label, clickEvent, delay }) => (
  <button
    onClick={() => clickEvent && clickEvent()}
    style={{ animationDelay: delay }}
    className={cn(
      "w-full md:w-fit mx-auto md:mx-0",
      "px-4 py-2 md:px-4 md:py-3",
      "border-2 border-border-dark text-text-soft text-sm md:text-base",
      "bg-bg/70 backdrop-blur-sm flex items-center justify-center gap-2",
      "font-main font-bold ",
      "cursor-pointer transition-all duration-300 animate-fadein opacity-0",
      "hover:bg-bg hover:text-text hover:shadow-md hover:-translate-y-0.5",
      "active:shadow-c whitespace-nowrap"
    )}
  >
    <span>{label}</span>
    {icon && <i className={icon}></i>}
  </button>
);
