import * as Wizard from "../Data/Wizard";

export const DevCard = ({ Name, Role, Logo, GitLink, InstaLink, WhaLink, svg }) => {
  return (
    <div className="relative group max-w-[280px] flex flex-col items-start justify-between
          w-full h-full overflow-hidden
          border-2 bg-bg-card
           border-gray-500 shadow-[5px_5px_0_rgba(0,0,0,0.2)]">

      {/* Header */}
      <div className="flex items-center gap-3 w-full p-4 border-b border-border-light">
        <div className="flex-1 flex items-center gap-2">
          <img src={Logo} className="h-10 w-10 object-cover rounded-full" />
          <h3 className="text-lg font-semibold text-[var(--local)]">{Name}</h3>
        </div>
        <span className="text-[10px] font-bold px-1 py-0.5 border text-[var(--local)] border-[var(--local)]">{Role}</span>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-2 p-4 text-text-soft text-xl ">
        <i
          onClick={() => Wizard.OpenLink(GitLink)}
          className="fa-brands fa-github cursor-pointer hover:text-accent transition-colors"
        ></i>
        <i
          onClick={() => Wizard.OpenLink(WhaLink)}
          className="fa-brands fa-whatsapp cursor-pointer hover:text-fourth transition-colors"
        ></i>
      </div>

      <img src={svg} className="absolute -right-1 -bottom-2 h-15 w-auto" />
    </div>
  );
};
