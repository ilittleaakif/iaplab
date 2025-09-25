import { ArrowRight } from "lucide-react";
import * as Wizard from "../Data/Wizard";

export const ExtraCard = ({ icon: Icon, title, des, btn, Link, clickEvent = null }) => {
  return (
    <div
      className={`
        flex flex-col justify-between h-fit
        p-4 md:p-6 border-2 border-border bg-bg-card
        text-text shadow-md transition-all duration-300 
         hover:shadow-lg hover:border-fourth
      `}
    >
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
      <button onClick={clickEvent ? clickEvent : () => Wizard.OpenLink(Link)} className="font-medium inline-flex text-fourth hover:underline active:underline cursor-pointer">  {btn}</button>
    </div>
  );
};
