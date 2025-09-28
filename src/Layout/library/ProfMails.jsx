import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon, MailIcon, CopyIcon, UserIcon, BookOpenIcon, } from "lucide-react";
import { DATAS } from '../../Data/Library_Datas'
import { useEffect } from "react";
import * as wizard from '../../Data/Wizard'
import SubHeader from "../../Components/SubHeader";

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
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),  repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),  repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),  repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)`, }} />

      {/* Header */}
      <SubHeader title={`${targetSemester.semester} - Emails des profs`} />

      {/* Content */}
      <div className="w-full md:px-16 px-4 py-6 mx-auto z-20">
        {MailsDatas.length === 0 ? (<p className="text-center text-lg text-text-soft">Aucun mail disponible pour ce semestre.</p>) : (

          MailsDatas.map((data, idx) => (
            <div
              key={idx}
              className="bg-bg border border-border p-6 mb-6 shadow-md hover:shadow-lg transition"
            >
              {/* Module */}
              <div className="flex items-center gap-2 mb-4 text-sub/80">
                <BookOpenIcon className="w-5 h-5 text-accent" />
                <p className="text-sm font-medium">{data.Module}</p>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-accent">
                  <MailIcon className="w-5 h-5" />
                  <p className="font-semibold break-all">{data.Mail}</p>
                </div>

                {/* Copy */}
                <button
                  onClick={() => wizard.copyToClipboard(data.Mail)}
                  className="flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-accent/10 text-accent font-medium hover:bg-accent hover:text-white transition"
                >
                  <CopyIcon className="w-4 h-4" />
                  <span>Copy</span>
                </button>
              </div>
            </div>
          ))

        )}
      </div>
    </div>
  );
};

export default ProfMails;
