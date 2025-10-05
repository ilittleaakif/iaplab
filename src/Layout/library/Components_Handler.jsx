import { useState } from "react";
import { Grid2x2, Video, BookOpen, Image } from "lucide-react";

const OpenLink = (link) => window.open(link, "_blank");

export const ModuleCard = ({ title, icon: Icon, Link, ClassIcon = null }) => {
  return (
    <div
      onClick={() => OpenLink(Link)}
      className={`text-text font-main md:gap-3 gap-2 border-2 border-border md:p-6 p-3 flex md:flex-col items-center md:justify-center cursor-pointer transition-all hover:border-border-dark`}>
      {ClassIcon ? (
        <i className={ClassIcon}></i>
      ) : (
        <Icon className="w-5 h-5 md:w-8 md:h-8" />
      )}
      <div className="font-semibold tracking-tight text-center text-[12px] md:text-[16px]">
        {title}
      </div>
    </div>
  );
};

export const SemesterContainer = ({ extras, youtube, modules, pictures, sectionRef }) => {
  const [activeTab, setActiveTab] = useState("modules");

  // Define tabs based on available content
  const tabs = [
    { id: "modules", label: "Modules", icon: BookOpen, content: modules, show: modules?.length > 0 },
    { id: "youtube", label: "YouTube", icon: Video, content: youtube, show: youtube?.length > 0 },
    { id: "pictures", label: "Pictures", icon: Image, content: pictures, show: pictures?.length > 0 },
    { id: "extras", label: "Extras", icon: Grid2x2, content: extras, show: extras?.length > 0 }
  ].filter(tab => tab.show);

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section ref={sectionRef} className="font-code text-text">
      {/* Navigation Bar */}
      <div className="border-b border-border mb-6">
        <nav className="flex flex-wrap justify-between md:justify-start md:gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center justify-center gap-2 flex-1 md:flex-none
                  px-3 py-2 md:px-5 md:py-3 rounded-t-md
                  border-b-2 transition-all whitespace-nowrap cursor-pointer
                    ${isActive
                    ? 'border-text text-text font-semibold'
                    : 'border-transparent text-text/60 hover:text-text hover:border-text/30'
                  }
          `}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>


      {/* Content Area */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {currentTab?.content?.map((data, idx) => (
          <ModuleCard
            key={idx}
            title={data.title}
            icon={data.icon}
            Link={data.Url}
            ClassIcon={activeTab === "youtube" ? "fa-brands fa-youtube text-youtube md:text-2xl" : data.ClassIcon}
          />
        ))}
      </div>
    </section>
  );
};