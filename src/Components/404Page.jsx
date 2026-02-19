import { useNavigate } from "react-router-dom";
import error from '/Assets/mid/lost.svg';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className='flex flex-col items-center justify-center min-h-screen'
      style={{
        background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `,
      }}
    >
      <img src={error} className='w-full max-w-md sm:max-w-lg animate-float' />
      <p className='font-cute sm:text-xl text-base text-[#9c774e]'>What am I doing here ?</p>

      <button
        onClick={() => navigate("/")}
        className="mt-4 px-6 py-2 bg-eighth text-white rounded-full hover:shadow-c hover:-translate-y-0.5 transition duration-300 font-semibold 
        hover:bg-accent-dark cursor-pointer"
      >
        Go home
      </button>
    </section>
  )
}

export default ErrorPage;
