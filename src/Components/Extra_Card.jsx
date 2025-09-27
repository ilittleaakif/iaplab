import * as Wizard from "../Data/Wizard";

export const ExtraCard = ({ icon: Icon, title, des, btn, Link, clickEvent = null }) => {
  return (
    <div
      className={`
        flex flex-col justify-between h-fit bg-bg-card
        p-4 md:p-6 border-2 border-border
        text-text shadow-md transition-all
        hover:shadow-lg hover:border-fourth relative group`}
    >
      {/* dot */}
      <div className="absolute h-3 w-3 md:h-4 md:w-4   -top-1.5 -left-1.5 md:-top-2 md:-left-2 rounded-full group-hover:bg-fourth group-hover:h-5 group-hover:w-5 bg-border transition-all"></div>


      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 md:w-7 md:h-7 text-text-soft" />
        <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
      </div>

      {/* Description */}
      <p className="mb-4 text-text-soft text-sm md:text-base leading-relaxed">
        {des}
      </p>

      {/* Button */}
      <button onClick={clickEvent ? clickEvent : () => Wizard.OpenLink(Link)} className="font-medium inline-flex text-fourth hover:underline hover:text-text-soft transition-all  active:underline cursor-pointer">  {btn}</button>
    </div>
  );
};
