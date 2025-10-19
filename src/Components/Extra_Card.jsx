import * as utils from "../Data/utils";

export const ExtraCard = ({ icon, title, des, btn, Link, clickEvent = null }) => {
  return (
    <div className={`flex flex-col justify-between h-fit bg-bg-card p-4 md:p-6 border-2 border-border rounded-xl rounded-tr-none text-text shadow-c transition-all hover:border-eighth duration-500 relative group`}>

      {/* dot */}
      <div className="absolute h-3 w-3 -top-1.5  -left-1.5 md:-top-1 md:-left-1 rounded-sm rotate-180 group-hover:bg-eighth group-hover:h-4 group-hover:w-4 bg-border transition-all duration-300" ></div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-4 text-text-soft">
        <i className={icon}></i>
        <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
      </div>

      {/* Description */}
      <p className="mb-4 text-text-soft text-sm md:text-base leading-relaxed">
        {des}
      </p>

      {/* Button */}
      <button onClick={clickEvent ? clickEvent : () => utils.OpenLink(Link)}
        className="font-bold w-fit ml-auto text-eighth hover:underline hover:text-eighth/60 transition-all duration-200 active:underline cursor-pointer">  {btn}</button>
    </div>
  );
};
