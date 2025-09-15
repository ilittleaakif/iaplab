import { useState } from "react";
import { CalendarRange, ChevronDown, ArrowRight, DiamondPlus } from "lucide-react";

const OpenLink = (link) => window.open(link, "_blank");

const ExtraCard = ({ title, icon: Icon, Link }) => {
  return (
    <div onClick={() => OpenLink(Link)} className="flex items-center justify-between px-6 py-4 transition cursor-pointer text-text bg-youtube active:*:text-text active:bg-youtube/90">
      <p className="font-semibold text-center md:text-lg">{title}</p>
      <Icon />
    </div>
  );
};


export const SectionBlock = ({ extras, semester, modules, sectionRef }) => {
  const [showExtras, setShowExtras] = useState(false);

  const ModuleCard = ({ title, icon: Icon, Link }) => {
    return (
      <div
        onClick={() => OpenLink(Link)}
        className="text-bg p-6 border-2 border-border flex flex-col items-center justify-center hover:-translate-y-[3px] hover:text-text hover:bg-bg active:bg-bg active:text-text cursor-pointer transition">
        <Icon className="w-8 h-8 mb-2" />
        <div className="font-bold text-center text-md">{title}</div>
      </div>
    );
  };


  return (
    <section ref={sectionRef} className="p-6 space-y-8 bg-text shadow-md">

      {/* Header */}
      <div className="flex items-center gap-3 pb-3 border-b text-bg uppercase">
        <CalendarRange />
        <h2 className="text-lg font-bold">{semester}</h2>
      </div>

      {/* Modules */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {modules.map((mod, i) => (
          <ModuleCard key={i} title={mod.title} icon={mod.icon} Link={mod.Url} />
        ))}
      </div>

      {/* Extras */}
      {extras?.length > 0 &&
        <>
          <div className="flex items-center justify-between pb-3 border-b">
            <div className="flex items-center gap-3 uppercase">
              <DiamondPlus />
              <h2 className="text-lg font-bold">Extras</h2>
            </div>
            <ChevronDown className={`w-6 h-6 cursor-pointer transition-transform ${showExtras ? "rotate-180" : "rotate-0"}`} onClick={() => setShowExtras(!showExtras)} />
          </div>

          {showExtras &&
            <div className="grid items-center w-full grid-cols-1 gap-4 transition-all md:grid-cols-2">
              {extras.map((extra, i) => (
                <ExtraCard key={i} Link={extra.Url} title={extra.title} icon={extra.icon} />
              ))}
            </div>
          }
        </>
      }
    </section>
  );
};

export const UnivCard = ({ icon: Icon, title, des, btn, accent, Link }) => {
  return (
    <div onClick={() => OpenLink(Link)} style={{borderColor: `var(--${accent})`}} className={`flex flex-col h-f justify-between p-8 transition-shadow shadow-lg bg-text border-2 hover:shadow-xl`}>
      <div className="flex items-center mb-4">
        <Icon className={`md:w-8 md:h-8 w-6 h-6 mr-3`} style={{ color: `var(--${accent})` }} />
        <h2 className="text-lg font-semibold md:text-xl text-bg">{title}</h2>
      </div>
      <p className="mb-6 text-bg-soft">{des}</p>
      <button
        style={{ color: `var(--${accent})` }}
        className={`cursor-pointer inline-flex items-center  font-medium hover:underline`}>
        <span>{btn}</span>
        <ArrowRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  )
}