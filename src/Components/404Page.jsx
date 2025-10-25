import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="font-main flex flex-col min-h-screen bg-bg text-text-soft items-center justify-center gap-4 px-6 text-center">

      <h1 className="font-extrabold text-6xl font-main text-text">404</h1>
      <h4 className="text-lg md:text-2xl font-semibold">
        <span>Huuuh?...</span> <br />
        <span>this page seems to be on vacation 🏖️</span>
      </h4>
      <p className="text-text-muted max-w-lg text-sm sm:text-base">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-6 py-2 bg-eighth text-white rounded-full hover:shadow-c hover:-translate-y-0.5 transition duration-300 font-semibold 
        hover:bg-accent-dark cursor-pointer"
      >
        Go home
      </button>
    </div>
  );
};
export default ErrorPage;
