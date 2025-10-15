import { useState } from "react";
import { Send } from "lucide-react";
import { db } from "../../Data/FirebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import SplitText from "../../Assets/SplitText";
import { useParams } from "react-router-dom";
import SubHeader from "../../Components/SubHeader";

import svga from '/Assets/003.svg'
import svgb from '/Assets/004.svg'

const Form = () => {
  const { action } = useParams();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const Strings = action === "suggest"
    ? {
      head: "Share Your Idea ✨",
      p: "Give us your suggestions, feedback, or thoughts.",
      namePlaceholder: "Your Name",
      messagePlaceholder: "Write your suggestion...",
      buttonText: "Send Suggestion",
      svg: svga
    }
    : {
      head: "Wanna Team Up?",
      p: "Drop your details below and let’s create something amazing together!",
      namePlaceholder: "Your Name",
      messagePlaceholder: "Write your message...",
      buttonText: "Send Message",
      svg: svgb
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setLoading(true);

    try {
      await addDoc(collection(db, "suggestions"), {
        name,
        message,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setName("");
      setMessage("");
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120,119,198,0.1) 0%, transparent 50%)`,
      }} className="font-main min-h-screen text-text bg-bg-soft relative pb-20 sm:pb-0">


      <SubHeader title={action === "teamup" ? "Team Up With Us" : "Provide a Suggestion"} />

      <img src={Strings.svg} className=" animate-m3leg mt-20 mx-auto object-cover h-auto w-fit max-w-[14rem] px-5 md:mx-auto " />

      {/* Heading */}
      <div className="w-full max-w-xl mx-auto font-main mb-12 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-center">
          {Strings.head}
        </h1>
        <p className="text-text-soft text-sm sm:text-base md:text-lg text-center">
          {Strings.p}
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-lg mx-auto px-4"
      >
        <input
          type="text"
          required
          placeholder={Strings.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-sm text-sm border border-border bg-bg/60 px-4 py-3  focus:outline-none focus:ring-2 focus:ring-accent transition"
        />

        <textarea
          placeholder={Strings.messagePlaceholder}
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-sm text-sm border border-border bg-bg/60 px-4 py-3  resize-none focus:outline-none focus:ring-2 focus:ring-accent transition"
        />

        <button
          type="submit"
          disabled={loading}
          className={`flex rounded-md w-fit mx-auto duration-300 items-center justify-center gap-2 px-4 md:px-8 py-2 bg-eighth text-bg font-medium shadow-c transition-transform  ${loading ? "cursor-not-allowed opacity-70" : "cursor-pointer hover:-translate-y-1"}`}
        >
          <i className="fa-solid fa-paper-plane"></i>
          <span>{loading ? 'Sending ...' : 'Submit'}</span>
        </button>

        {success && (<p className="animate-fadein bg-green-500 text-sm text-bg px-2 py-1  text-center mt-2">Forum sent successfully!</p>)}
        {error && (<p className="animate-fadein bg-red-500 text-sm text-bg px-2 py-1  text-center mt-2">An error occurred. Please try again later.</p>)}

      </form>
    </div>
  );
};

export default Form;
