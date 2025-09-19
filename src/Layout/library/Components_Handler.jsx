import { CalendarRange, ArrowRight, Layers, Import, Youtube, YoutubeIcon, Video, Play } from "lucide-react";

const OpenLink = (link) => window.open(link, "_blank");

export const ExtraCard = ({ title, icon: Icon, Link }) => {
  return (
    <div onClick={() => OpenLink(Link)} className="rounded-md flex items-center gap-3 px-6 py-4 transition cursor-pointer text-text bg-bg-soft active:*:text-text active:bg-bg-soft/90">
      <Icon />
      <p className="font-semibold text-center md:text-lg">{title}</p>
    </div>
  );
};

export const ModuleCard = ({ title, icon: Icon, Link }) => {
  return (
    <div
      onClick={() => OpenLink(Link)}
      className="rounded-md text-text bg-bg-soft p-6 border-2 border-text-soft flex flex-col items-center justify-center hover:text-text hover:bg-gradient-to-br hover:from-bg hover:to-bg/80 active:bg-bg active:text-text cursor-pointer transition-all">
      <Icon className="w-8 h-8 mb-2" />
      <div className="font-bold text-center text-md">{title}</div>
    </div>
  );
};

export const YoutubeCard = ({ title, Link }) => {
  return (
    <div
      onClick={() => OpenLink(Link)}
      className="rounded-md text-youtube p-6 border-2 border-border flex flex-col items-center justify-center hover:text-text hover:bg-gradient-to-br hover:from-red-500 hover:to-red-700     active:bg-red-100 active:text-red-700 cursor-pointer transition-all">
      <Youtube className="w-8 h-8 mb-2" />
      <div className="font-bold text-center text-md">{title}</div>
    </div>
  );
};




export const SemesterContainer = ({ extras, youtube, modules, sectionRef }) => {
  return (
    <section ref={sectionRef} className="md:p-6 p-4 space-y-6 shadow-md text-text">

      {/* Modules */}
      <>
        <div className="flex items-center gap-3 pb-3 border-b   uppercase">
          <CalendarRange />
          <h2 className="text-lg font-bold">MODULES</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {modules.map((mod, i) => (
            <ModuleCard key={i} title={mod.title} icon={mod.icon} Link={mod.Url} />
          ))}
        </div>
      </>

      {/* Youtubes */}
      {youtube?.length > 0 &&
        <>
          <div className="flex items-center justify-between pb-3 border-b">
            <div className="flex items-center gap-3 uppercase">
              <Layers />
              <h2 className="text-lg font-bold">YOUTUBE COURSES</h2>
            </div>
          </div>

          <div className="grid items-center w-full grid-cols-1 gap-4 transition-all md:grid-cols-3">
            {youtube.map((yt, i) => (
              <YoutubeCard key={i} Link={yt.Url} title={yt.title} icon={yt.icon} />
            ))}
          </div>
        </>
      }

      {/* Extras */}
      {extras?.length > 0 &&
        <>
          <div className="flex items-center justify-between pb-3 border-b">
            <div className="flex items-center gap-3 uppercase">
              <Layers />
              <h2 className="text-lg font-bold">OTHER RESSOURCES</h2>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {extras.map((extra, i) => (
              <ExtraCard key={i} Link={extra.Url} title={extra.title} icon={extra.icon} />
            ))}
          </div>
        </>
      }
    </section>
  );
};

export const UnivCard = ({ icon: Icon, title, des, btn, accent, Link, clickEvent = null }) => {
  return (
    <div
      style={{ backgroundColor: `var(--${accent})` }}
      className={`text-text h-fit md:h-auto  flex flex-col justify-between md:p-8 p-4 transition-all border-2 border-text hover:shadow-xl`}>

      <div className="flex items-center mb-4">
        <Icon className={`md:w-8 md:h-8 w-6 h-6 mr-3`} />
        <h2 className="text-lg font-semibold md:text-xl">{title}</h2>
      </div>
      <p className="mb-6 text-text-soft">{des}</p>
      <button
        onClick={clickEvent ? clickEvent : () => OpenLink(Link)}

        className={` cursor-pointer inline-flex items-center  font-medium hover:underline`}>
        <span>{btn}</span>
        <ArrowRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  )
}