import * as utils from "../../../Data/utils";

const ExtraCard = ({ icon, title, des, Link }) => {
  return (
    <div className={`flex flex-col justify-start bg-bg-card p-4 md:p-6 border-2 
                    border-border rounded-xl
                    text-text shadow-a hover:shadow-c transition-all hover:border-border-dark
                    duration-500 relative group`}
    >

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
      <button onClick={() => utils.OpenLink(Link)}
        className="rounded-full border-2 border-border-dark text-text-soft font-bold font-main w-fit ml-auto px-2 transition-all duration-200 hover:opacity-80 active:opacity-80 cursor-pointer">visit</button>
    </div>
  );
};
export default ExtraCard;
