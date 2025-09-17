export const ActionBtn = ({ icon, label, gradient, clickEvent, delay, accent }) => (
    <div
      onClick={() => clickEvent && clickEvent()}
      style={{ animationDelay: delay, '--accent': accent }}
      className={`text-sm md:text-base px-6 py-3 hover:shadow-action flex items-center justify-center gap-2 font-bold font-poppins text-text cursor-pointer transition active:hover:translate-y-[2px]  ${gradient} animate-fadein opacity-0`}
    >
      <span >{label}</span>
      <i className={icon}></i>
    </div>
  );
