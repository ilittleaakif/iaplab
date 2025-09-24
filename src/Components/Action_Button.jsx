import { cn } from "@sglara/cn";

export const ActionBtn = ({ icon, label, clickEvent, delay, accent }) => (
  <div
    onClick={() => clickEvent && clickEvent()}
    style={{
      animationDelay: delay,
      "--local": `var(--${accent})`,
    }}
    className={cn(
      "border-2 w-full md:w-fit mx-auto",
      "border-[var(--local)] text-[var(--local)] text-sm md:text-base",
      "md:px-12 md:py-3 px-3 py-2",
      "bg-transparent flex items-center justify-center gap-2 font-semibold font-poppins ",
      "cursor-pointer transition-all duration-300 animate-fadein opacity-0",
      "hover:bg-[var(--local)] hover:text-white hover:shadow-lg hover:-translate-y-0.5",
      "active:scale-95 active:shadow-md"
    )}
  >
    <span>{label}</span>
    {icon && <i className={icon}></i>}
  </div>
);
