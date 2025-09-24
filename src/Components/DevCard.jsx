import * as Wizard from "../Data/Wizard";

export const DevCard = ({ Name, Role, Logo, GitLink, InstaLink, WhaLink, Accent }) => {
  return (
    <div
      style={{ '--local': `var(--${Accent})` }}
      className="relative group min-w-[280px]">
      {/* Outer card */}
      <div className="relative flex items-center justify-center w-full h-full  overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] bg-[#111]">

        {/* Tighter rotating gradient border */}
        <div className="absolute inset-0 bg-conic from-accent via-sixth to-second blur-[15px] brightness-125 animate-rotateAnim"></div>

        {/* Inner mask */}
        <div className="absolute inset-[1px] bg-bg-dark "></div>

        {/* Content */}
        <div className="relative z-[2] w-full h-full p-4">
          <div className="flex items-center gap-3 mb-3">
            <img src={Logo} className="rounded-full h-10 w-10 object-cover" />
            <h3
              className="flex-1 text-lg font-semibold text-white"
              style={{ textShadow: `0 0 10px var(--local)` }}
            >
              {Name}
            </h3>
            <span
              className="px-2 py-0.5 text-xs rounded-full border"
              style={{
                color: `var(--local)`,
                borderColor: `var(--local)`,
              }}
            >
              {Role}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-start gap-2 pt-2">
            <i
              onClick={() => Wizard.OpenLink(GitLink)}
              className="fa-brands fa-github text-white/40 hover:text-blue-900 cursor-pointer transition-colors"
            ></i>
            <i
              onClick={() => Wizard.OpenLink(WhaLink)}
              className="fa-brands fa-whatsapp text-white/40 hover:text-green-500 cursor-pointer transition-colors"
            ></i>
            <i
              onClick={() => Wizard.OpenLink(InstaLink)}
              className="fa-brands fa-instagram text-white/40 hover:text-orange-400 cursor-pointer transition-colors"
            ></i>
          </div>
        </div>
      </div>

      {/* Local CSS for animation */}
      <style jsx>{`
        @keyframes rotateAnim {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-rotateAnim {
          animation: rotateAnim 20s ease infinite;
        }
      `}</style>
    </div>
  );
};
