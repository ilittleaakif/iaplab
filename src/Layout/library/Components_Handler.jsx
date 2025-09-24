import { ArrowRight, Grid2X2Plus, ListVideo, BookAIcon } from "lucide-react";
const OpenLink = (link) => window.open(link, "_blank");




export const ModuleCard = ({ title, icon: Icon, Link, accent, ClassIcon = null }) => {
  return (
    <div
      onClick={() => OpenLink(Link)}
      className={`text-text bg-gradient-to-br from-bg-card to-bg md:gap-3 rounded-sm gap-2 border-2 border-border-light md:p-6 p-3 flex md:flex-col items-center md:justify-center hover:-translate-y-1 active:translate-y-1 cursor-pointer transition-all`}>
      {ClassIcon ?
        <i className={ClassIcon}></i>
        :
        <Icon className="w-5 h-5 md:w-8 md:h-8 " />
      }
      <div className="font-bold text-center text-sm md:text-[16px]">{title}</div>
    </div >
  );
};


export const SemesterContainer = ({ extras, youtube, modules, sectionRef }) => {
  return (
    <section ref={sectionRef} className=" font-main space-y-8 text-text">

      {/* Modules */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 pb-3 border-b ">
          <BookAIcon className="h-5 w-5 md:h-6 md:w-6" />
          <h2 className="md:text-lg text-sm font-bold">Modules</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {modules.map((data, idx) => (
            <ModuleCard key={idx} title={data.title} icon={data.icon} Link={data.Url} />
          ))}
        </div>
      </div>

      {/* Youtubes */}
      {youtube?.length > 0 &&
        <div className="space-y-3">
          <div className="flex items-center gap-3 pb-3 border-b">
            <ListVideo className="h-5 w-5 md:h-6 md:w-6" />
            <h2 className="md:text-lg text-sm font-bold">Youtube Playlists</h2>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {youtube.map((data, idx) => (
              <ModuleCard accent={'youtube'} key={idx} Link={data.Url} title={data.title} ClassIcon={'fa-brands fa-youtube text-youtube md:text-2xl '} />
            ))}
          </div>
        </div>
      }

      {/* Extras */}
      {(extras?.length > 0) &&
        <div div className="space-y-3">
          <div className="flex items-center gap-3 pb-3 border-b">
            <Grid2X2Plus className="h-5 w-5 md:h-6 md:w-6" />
            <h2 className="md:text-lg text-sm font-bold">Pictures</h2>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {extras.map((data, idx) => (
              <ModuleCard accent={'fourth'} key={idx} Link={data.Url} title={data.title} icon={data.icon} />
            ))}
          </div>
        </div>
      }
    </section>
  );
};

