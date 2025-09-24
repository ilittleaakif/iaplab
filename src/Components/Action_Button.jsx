export const ActionBtn = ({ icon, label, gradient, clickEvent, delay, accent }) => (
  <div
    onClick={() => clickEvent && clickEvent()}
    style={{ animationDelay: delay, '--accent': accent }}
    className={`border-2 border-[var(--accent)] text-[var(--accent)] text-sm md:text-base  md:px-8 px-5 py-3 bg-gradient-to-br from-black to-bg rounded-full hover:shadow-action flex items-center justify-center gap-2 font-semibold font-poppins cursor-pointer transition  ${gradient} animate-fadein opacity-0`}
  >
    <span className="text-text">{label}</span>
    <i className={icon}></i>
  </div>
);