export const ActionBtn = ({ icon, label, clickEvent, delay, Accent }) => (
  <button
    onClick={() => clickEvent && clickEvent()}
    style={{ animationDelay: delay, '--local': `var(--${Accent})` }}
    className={`w-full sm:w-fit mx-auto sm:mx-0 rounded-sm px-4 py-2
      border-2 border-border hover:border-border-dark text-text-soft sm:text-base
      flex items-center justify-center gap-2 font-main font-bold
      cursor-pointer transition-all duration-500 animate-fadein opacity-0
      hover:shadow-c hover:-translate-y-0.5 active:shadow-c whitespace-nowrap 
      ${Accent ? 'bg-[var(--local)] text-white' : 'bg-bg-card'}`}
  >
    <span>{label}</span>
    <i className={icon}></i>
  </button>
);
