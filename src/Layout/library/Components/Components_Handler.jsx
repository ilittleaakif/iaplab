import * as utils from '../../../Data/utils'

const InfoCard = ({ title, url, icon = "fa-solid fa-book" }) => (
  <div
    onClick={() => utils.OpenLink(url)}
    className="text-text text-center rounded-md font-main border-2 border-border p-8 sm:p-8 bg-bg/10 backdrop-blur-2xl
      flex flex-col items-center justify-center cursor-pointer transition-all 
      hover:border-border-light gap-4 duration-300"
  >
    <i className={`${icon} text-2xl md:text-3xl `} />
    <div className="font-semibold text-lg md:text-xl">{title}</div>
  </div>
);

export const SemesterContainer = ({ semesterData, sectionRef }) => {
  return (
    <section ref={sectionRef} className="font-main text-text w-full   mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {semesterData.map((item, idx) => (
          <InfoCard key={idx} title={item.title} url={item.Url} icon={item.ClassIcon} />
        ))}
      </div>

    </section>
  );
};
