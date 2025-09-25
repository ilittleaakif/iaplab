import * as Wizard from "../Data/Wizard";

export const DevCard = ({ Name, Role, Logo, GitLink, InstaLink, WhaLink, svg }) => {
  return (
    <div className="relative group min-w-[280px]">

      {/* Outer card */}
      <div
        className={`
          relative flex flex-col items-start justify-between
          w-full h-full overflow-hidden
          border-2 bg-bg-card
          shadow-b border-[var(--local)]
        `}
      >
        {/* Header */}
        <div className="flex items-center gap-3 w-full p-4 border-b border-border-light">
          <div className="flex-1 flex items-center gap-2">
            <img src={Logo} className="h-10 w-10 object-cover rounded-full" />
            <h3 className="text-lg font-code font-semibold text-[var(--local)]">{Name}</h3>
          </div>
          <span className="text-[10px] font-bold px-1 py-0.5 border text-[var(--local)] border-[var(--local)]">{Role}</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2 p-4 text-text-soft text-lg">
          <i
            onClick={() => Wizard.OpenLink(GitLink)}
            className="fa-brands fa-github cursor-pointer hover:text-accent transition-colors"
          ></i>
          <i
            onClick={() => Wizard.OpenLink(WhaLink)}
            className="fa-brands fa-whatsapp cursor-pointer hover:text-fourth transition-colors"
          ></i>
          <i
            onClick={() => Wizard.OpenLink(InstaLink)}
            className="fa-brands fa-instagram cursor-pointer hover:text-seventh transition-colors"
          ></i>
        </div>

        <img src={svg} className="absolute -right-1 -bottom-2 h-15 w-auto" />
      </div>
    </div>
  );
};
