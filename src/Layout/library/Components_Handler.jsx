import { CalendarRange, ArrowRight, Layers, Youtube } from "lucide-react";

const OpenLink = (link) => window.open(link, "_blank");



export const ExtraCard = ({ title, icon: Icon, Link }) => {
  return (
    <div
      onClick={() => OpenLink(Link)}
      className="text-accent gap-3 border-2 border-accent p-6 flex flex-col items-center justify-center hover:-translate-y-1 active:translate-y-1 cursor-pointer transition-all">
      <Icon className="w-8 h-8 " />
      <div className="font-bold text-text-soft text-center text-md">{title}</div>
    </div>
  );
};

export const ModuleCard = ({ title, icon: Icon, Link }) => {
  return (
    <div
      onClick={() => OpenLink(Link)}
      className="text-text gap-3 border-2 border-text p-6 flex flex-col items-center justify-center hover:-translate-y-1 active:translate-y-1 cursor-pointer transition-all">
      <Icon className="w-8 h-8 " />
      <div className="font-bold text-center text-md">{title}</div>
    </div>
  );
};

export const YoutubeCard = ({ title, Link }) => {
  return (
    <div
      onClick={() => OpenLink(Link)}
      className="text-youtube gap-3 border-2 border-youtube p-6 flex flex-col items-center justify-center hover:-translate-y-1 active:translate-y-1 cursor-pointer transition-all">
      <Youtube className="w-8 h-8" />
      <div className="font-bold text-center text-md">{title}</div>
    </div>
  );
};





export const SemesterContainer = ({ extras, youtube, modules, sectionRef }) => {
  return (
    <section ref={sectionRef} className="md:p-6 p-4 space-y-8 text-text">

      {/* Modules */}
      <>
        <div className="flex items-center gap-3 pb-3 border-b">
          <CalendarRange />
          <h2 className="text-lg font-bold">Modules</h2>
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
            <div className="flex items-center gap-3">
              <Layers />
              <h2 className="text-lg font-bold">Youtube Playlists</h2>
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
            <div className="flex items-center gap-3">
              <Layers />
              <h2 className="text-lg font-bold">Pictures</h2>
            </div>
          </div>


          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            {extras.map((extra, i) => (
              <ExtraCard key={i} Link={extra.Url} title={extra.title} icon={extra.icon} />
            ))}
          </div>
        </>
      }
    </section>
  );
};

export const UnivCard = ({ icon: Icon, title, des, btn, Link, clickEvent = null }) => {
  return (
    <div
      className={`bg-gradient-to-br  to-[#1d1d1d] from-[#111] rounded-xl text-text flex flex-col justify-between md:p-6 p-4 h-fit transition-all`}>

      <div className="flex items-center mb-4">
        <Icon className={`md:w-8 md:h-8 w-6 h-6 mr-3`} />
        <h2 className="text-lg font-bold md:text-xl">{title}</h2>
      </div>

      <p className="mb-6 text-text-soft">{des}</p>
      <button
        onClick={clickEvent ? clickEvent : () => OpenLink(Link)}
        className={`cursor-pointer inline-flex items-center gap-2 font-medium hover:underline`}>
        <span>{btn}</span>
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 " />
      </button>
    </div>
  )
}