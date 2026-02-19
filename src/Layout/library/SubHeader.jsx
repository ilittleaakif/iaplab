import { useNavigate } from "react-router-dom";
const SubHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <header className="w-full select-none text-xl md:text-2xl font-bold font-main flex items-center gap-3 p-8 md:p-10 z-20 text-text sticky top-0">
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