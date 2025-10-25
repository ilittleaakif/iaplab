import { useNavigate } from "react-router-dom";

const SubHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <header className="w-full text-lg md:text-xl bg-bg border-b-2 border-border font-main flex items-center gap-3 p-4 md:p-6 z-20 text-text sticky top-0">
      <i
        className="fa-solid fa-arrow-left cursor-pointer hover:text-accent transition "
        onClick={() => navigate(-1)}
        aria-label="Go back"
      ></i>
      <span>{title}</span>
    </header>
  );
};
export default SubHeader;