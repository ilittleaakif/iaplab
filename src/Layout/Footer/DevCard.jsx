import * as Wizard from "../../Data/Wizard";

export const DevCard = ({ Name, Role, Logo, GitLink, WhaLink, svg }) => {
  return (
    <div className="relative group max-w-[250px] flex flex-col items-start justify-between
          w-full h-fit overflow-hidden
          border-2 bg-bg-card border-border-dark rounded-md">

      {/* Header */}
      <div className="flex items-center gap-3 w-full p-4 border-b border-border">
        <div className="flex-1 flex items-center gap-2">
          <img src={Logo} className="h-10 w-10 object-cover rounded-full" />
          <h3 className="text-lg font-bold text-[var(--local)]">{Name}</h3>
        </div>
        <span className="text-[10px] rounded-md font-bold px-1 py-0.5 border text-text border-text-soft">{Role}</span>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-2 p-3 *:cursor-pointer text-text-muted text-2xl">
        {GitLink &&
          <i
            onClick={() => Wizard.OpenLink(GitLink)}
            className="fa-brands fa-github hover:text-accent-light transition-colors"
          ></i>
        }
        {WhaLink &&
          <i
            onClick={() => Wizard.OpenLink(WhaLink)}
            className="fa-brands fa-whatsapp hover:text-fourth transition-colors"
          ></i>}
      </div>
      <img src={svg} className="absolute -right-1 -bottom-2 h-16 w-auto" />

    </div>
  );
};
