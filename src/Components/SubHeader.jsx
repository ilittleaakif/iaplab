import { useNavigate } from "react-router-dom";

const SubHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-bg border-b border-border font-main flex items-center gap-3 p-4 md:p-6 z-20 text-text sticky top-0">
      <i
        className="fa-solid fa-arrow-left cursor-pointer hover:text-accent transition text-lg md:text-xl"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      ></i>
      <span className="text-[15px] md:text-xl">{title}</span>
    </header>
  );
};

export default SubHeader;
