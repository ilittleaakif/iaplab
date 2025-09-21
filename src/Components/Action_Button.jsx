export const ActionBtn = ({ icon, label, gradient, clickEvent, delay, accent }) => (
  <div
    onClick={() => clickEvent && clickEvent()}
    style={{ animationDelay: delay, '--accent': accent }}
    className={`rounded-full text-sm md:text-base md:px-8 px-5 py-3 hover:shadow-action flex items-center justify-center gap-2 font-bold font-poppins text-text cursor-pointer transition  ${gradient} animate-fadein opacity-0`}
  >
    <span >{label}</span>
    <i className={icon}></i>
  </div>
);