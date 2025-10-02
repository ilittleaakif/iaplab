import { useState } from "react";
import { Send } from "lucide-react";
import { db } from "../../Data/FirebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import SplitText from "../../Assets/SplitText";
import { useParams } from "react-router-dom";
import SubHeader from "../../Components/SubHeader";

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
      sendingText: "Sending...",
      successMessage: "Suggestion sent successfully!",
      errorMessage: "An error occurred. Please try again later.",
    }
    : {
      head: "Wanna Team Up?",
      p: "Drop your details below and let’s create something amazing together!",
      namePlaceholder: "Your Name",
      messagePlaceholder: "Write your message...",
      buttonText: "Send Message",
      sendingText: "Sending...",
      successMessage: "Message sent successfully!",
      errorMessage: "An error occurred. Please try again later.",
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
    <div className="font-main min-h-screen text-text bg-bg-soft relative">
      {/* Background Gradients */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{backgroundImage: `radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%), radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,}}
      />

      <SubHeader title={action === "teamup" ? "Team Up With Us" : "Provide a Suggestion"} />

      {/* Heading */}
      <div className="w-full max-w-xl mx-auto font-main my-12 px-4">
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
          className="w-full border border-border bg-bg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent transition"
        />

        <textarea
          placeholder={Strings.messagePlaceholder}
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-border bg-bg px-4 py-3 text-base resize-none focus:outline-none focus:ring-2 focus:ring-accent transition"
        />

        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 px-4 md:px-8 py-3 bg-accent text-bg font-medium  shadow-md transition-transform hover:-translate-y-1 active:scale-95 ${loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
        >
          <Send size={18} />
          <span>{loading ? Strings.sendingText : Strings.buttonText}</span>
        </button>

        {success && (
          <SplitText
            text={Strings.successMessage}
            className="bg-green-500 text-xs text-bg px-2 py-1  text-center mt-2"
            delay={40}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        )}

        {error && (
          <SplitText
            text={Strings.errorMessage}
            className="bg-red-500 text-xs text-bg px-2 py-1  text-center mt-2"
            delay={40}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        )}
      </form>
    </div>
  );
};

export default Form;
