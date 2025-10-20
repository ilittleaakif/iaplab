import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();



  return (
    <div style={{
      background: `
         radial-gradient(ellipse 80% 60% at 5% 40%, rgba(175, 109, 255, 0.48), transparent 67%),
        radial-gradient(ellipse 70% 60% at 45% 45%, rgba(255, 100, 180, 0.41), transparent 67%),
        radial-gradient(ellipse 62% 52% at 83% 76%, rgba(255, 235, 170, 0.44), transparent 63%),
        radial-gradient(ellipse 60% 48% at 75% 20%, rgba(120, 190, 255, 0.36), transparent 66%),
        linear-gradient(45deg, #f7eaff 0%, #fde2ea 100%)
      `,
    }}
      className="font-main flex flex-col min-h-screen bg-bg text-text-soft items-center justify-center gap-4 p-6 text-center">
      <h1 className="font-extrabold text-6xl font-code text-text">404</h1>
      <h4 className="text-xl md:text-2xl font-semibold">
        Uh-oh... This page seems to be on vacation 🏖️
      </h4>
      <p className="text-text-muted max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-6 py-2 bg-eighth text-white rounded-full hover:shadow-c hover:-translate-y-0.5 transition duration-300 font-semibold 
        hover:bg-accent-dark cursor-pointer"
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
