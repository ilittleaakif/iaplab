import { useState } from "react";
import * as utils from '../../../Data/utils'

const InfoCard = ({ title, url, icon = "fa-solid fa-book" }) => (
  <div
    onClick={() => utils.OpenLink(url)}
    className="text-text-soft font-main border-2 border-border p-4 sm:p-6 bg-bg-card 
      flex flex-col items-center md:justify-center justify-start cursor-pointer transition-all 
      hover:border-border-dark hover:shadow-c gap-4 duration-300"
  >
    <i className={`${icon} text-xl md:text-3xl `} />
    <div className="font-semibold text-sm md:text-base">{title}</div>
  </div>
);

/* ---------- Main Container ---------- */
export const SemesterContainer = ({ semesterData, sectionRef }) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Modules",
      icon: "fa-solid fa-book",
      data: semesterData.modules?.map((m) => ({
        title: m.title,
        url: m.Url,
        icon: m.ClassIcon,
      })),
    },
    {
      title: "Playlists",
      id: 2,
      icon: "fa-brands fa-youtube",
      data: semesterData.youtubeTutorials?.map((y) => ({
        title: y.title,
        url: y.Url,
        icon: "fa-brands fa-youtube text-red-500",
      })),
    },
    {
      title: "Extras",
      id: 3,
      icon: "fa-solid fa-globe",
      data: semesterData.onlineResources?.map((r) => ({
        title: r.title,
        url: r.Url,
        icon: "fa-solid fa-book text-blue-500",
      })),
    },
  ].filter((tab) => tab.data?.length > 0);

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section ref={sectionRef} className="font-main text-text w-full max-w-7xl mx-auto">
      {/* ---------- Tabs Navigation ---------- */}
      <nav className="flex w-full items-center justify-center border-b border-border mb-6 gap-x-2 relative">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer flex-1 text-sm sm:text-lg flex items-center justify-center gap-2 px-4 py-2 transition-all relative z-10
                ${isActive ? 'text-accent' : 'text-text-muted hover:text-accent/70'}
                `}
            >
              <i className={`${tab.icon}`} />
              <span>{tab.title}</span>
            </button>
          );
        })}
        <div
          className="absolute bottom-0 h-0.5 bg-accent/50 transition-all duration-300 ease-out"
          style={{
            width: `${100 / tabs.length}%`,
            left: `${(tabs.findIndex(tab => tab.id === activeTab) * 100) / tabs.length}%`
          }}
        />
      </nav>

      {/* ---------- Cards Grid ---------- */}
      {currentTab?.data?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {currentTab.data.map((item, idx) => (
            <InfoCard key={idx} title={item.title} url={item.url} icon={item.icon} />
          ))}
        </div>
      ) : (
        <p className="text-center text-text/60 mt-6">Aucune ressource disponible.</p>
      )}
    </section>
  );
};
