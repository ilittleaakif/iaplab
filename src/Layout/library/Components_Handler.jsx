import { useState } from "react";
import { Copy } from "lucide-react";

const openLink = (url) => url && window.open(url, "_blank");

const InfoCard = ({ title, url, icon = "fa-solid fa-book" }) => (
  <div
    onClick={() => openLink(url)}
    className="text-text-soft rounded-sm  font-main border-2 border-border p-4 sm:p-6 bg-bg-card 
      flex md:flex-col items-center md:justify-center justify-start cursor-pointer transition-all 
      hover:border-border-dark hover:shadow-md md:gap-4 gap-2 text-center"
  >
    <i className={`${icon} text-lg md:text-3xl`} />
    <div className="font-semibold text-sm md:text-base">{title}</div>
  </div>
);

/* ---------- Main Container ---------- */
export const SemesterContainer = ({ semesterData, sectionRef }) => {
  const [activeTab, setActiveTab] = useState("modules");

  const tabs = [
    {
      id: "modules",
      icon: "fa-solid fa-book ",
      data: semesterData.modules?.map((m) => ({
        title: m.title,
        url: m.Url,
        icon: m.ClassIcon,
      })),
    },
    {
      id: "playlists",
      icon: "fa-brands fa-youtube",
      data: semesterData.youtubeTutorials?.map((y) => ({
        title: y.title,
        url: y.Url,
        icon: "fa-brands fa-youtube text-red-500",
      })),
    },
    {
      id: "extras",
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
    <section ref={sectionRef} className="font-main text-text">
      {/* ---------- Tabs Navigation ---------- */}
      <nav className="flex w-full border-b border-border mb-6 gap-y-4 gap-x-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer text-xs sm:text-lg flex items-center justify-center gap-2 px-4 py-2 rounded-t-md border-b-2 transition-all
                ${isActive
                  ? "border-text text-text font-semibold flex-4"
                  : "flex-1 border-transparent text-text/60 hover:text-text hover:border-text/30"}`}
            >
              <i className={`${tab.icon}`} />
              {
                isActive &&
                <span>{tab.id}</span>
              }
            </button>
          );
        })}
      </nav>

      {/* ---------- Cards Grid ---------- */}
      {currentTab?.data?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
