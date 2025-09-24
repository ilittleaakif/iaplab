import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon, MailIcon, CopyIcon, UserIcon, BookOpenIcon, } from "lucide-react";
import { DATAS } from '../../Data/Library_Datas'
import { useEffect } from "react";
import * as wizard from '../../Data/Wizard'

const ProfMails = () => {
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }, []);

  const { name } = useParams();
  const targetSemester = DATAS.find((s) => s.semester === name);
  const navigate = useNavigate();

  if (!targetSemester) return (<h2 className="text-center text-text mt-20">Semestre introuvable !</h2>);

  const MailsDatas = Array.isArray(targetSemester.AcMails) ? targetSemester.AcMails : [];

  return (
    <div className=" min-h-screen relative overflow-hidden font-main">
      {/* Background */}
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(circle at top, #1c1c1c, #000000)", }} />

      {/* Header */}
      <header className="w-full flex gap-4 items-center p-6 z-20 text-text">
        <ArrowLeftIcon
          className="cursor-pointer hover:text-blue-400 transition"
          onClick={() => navigate(-1)}
        />
        <span className="text-xl font-bold">{targetSemester.semester}</span>
      </header>

      {/* Content */}
      <div className="w-full md:px-16 px-4 py-6 mx-auto z-20">
        {MailsDatas.length === 0 ? (
          <p className="text-center text-lg text-text-soft">Aucun mail disponible pour ce semestre.</p>
        ) : (
          MailsDatas.map((data, idx) => (
            <div
              key={idx}
              className="bg-bg p-5 text-text mb-6 border border-border"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between mb-3">
                {/* prof Name */}
                <div className="flex items-center gap-3 border-b border-text/40">
                  <UserIcon className="text-text-soft w-5 h-5" />
                  <h2 className="text-lg font-semibold ">{data.Name}</h2>
                </div>

                {/* Copy btn */}
                <button
                  onClick={() => wizard.copyToClipboard(data.Mail)}
                  className="flex items-center rounded-md gap-2 px-2 py-1 text-sm bg-accent/20 cursor-pointer hover:bg-accent/10 transition text-text">
                  <CopyIcon className="w-3 h-3" />
                  <span>Copy</span>
                </button>
              </div>

              {/* Module */}
              <div className="flex items-center gap-2 mb-2 text-sub/80">
                <BookOpenIcon className="w-5 h-5 text-sub" />
                <p className="text-sm">{data.Module}</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <MailIcon className="text-accent w-5 h-5" />
                <a href={`mailto:${data.Mail}`} className="text-accent hover:underline">{data.Mail}</a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProfMails;
