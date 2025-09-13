import { useNavigate } from "react-router-dom";
import SplitText from "../assets/SplitText";

function Support() {
  const navigate = useNavigate();
  return (
    <div className="flex font-gortesk h-full w-full items-center justify-center gap-2 flex-col bg-bg text-text min-h-screen ">
      <SplitText
        text="Not available yet :)"
        className="md:text-3xl text-xl font-semibold text-center text-text"
        delay={70}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 10 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      <button onClick={() => navigate(-1)} className="animate-slideup bg-text-soft text-bg px-8 py-1 rounded-md cursor-pointer">Back</button>
    </div>
  );
}

export default Support;