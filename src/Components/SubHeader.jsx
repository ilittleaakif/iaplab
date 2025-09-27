import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SubHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <header className="w-full font-code flex items-center gap-3 p-4 md:p-6 z-20 text-text sticky top-0">
      <ArrowLeftIcon
        className="cursor-pointer hover:text-accent transition"
        onClick={() => navigate(-1)} />
      <span className="text-[15px] md:text-xl">{title}</span>
    </header>
  )
}

export default SubHeader;