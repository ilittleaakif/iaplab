import { useState } from "react";
import { ArrowLeftIcon, Send } from "lucide-react";
import { db } from "../../Data/FirebaseConfig"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import SplitText from "../../Assets/SplitText";
import { useNavigate } from "react-router-dom";
import SubHeader from "../../Components/SubHeader";

const Suggest = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);




  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !suggestion) return;
    setLoading(true);

    try {
      await addDoc(collection(db, "suggestions"), {
        name,
        suggestion,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setName("");
      setSuggestion("");
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-main min-h-screen text-text  ">
      <div className="absolute inset-0 -z-20" style={{ backgroundImage: `  radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),  radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`, }} />

      <SubHeader title='' />

      {/* Heading */}

      <div className="w-fit mx-auto font-code my-20">
        <h1 className="text-xl md:text-3xl font-main font-semibold mb-2 text-center">Proposez quelque chose ✨</h1>
        <p className="text-text-soft text-sm max-w-4xl md:text-base mb-6 text-center">Partagez vos idées, suggestions ou retours avec nous.</p>
      </div>

      {/* Forum */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-fit mx-auto items-center"
      >
        <input
          type="text"
          required
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-border bg-bg-soft px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent transition"
        />

        <textarea
          placeholder="Écrivez votre suggestion..."
          required
          rows={4}
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          className="w-full  border border-border bg-bg-soft px-4 py-3 text-base resize-none focus:outline-none focus:ring-2 focus:ring-accent transition"
        />
        <button
          className={`px-4 md:px-8 cursor-pointer flex items-center justify-center gap-2 bg-accent text-bg font-medium py-3  shadow-md hover:-translate-y-1 hover:text-text active:scale-95 transition-transform ${loading ? 'pointer-events-none' : ""}`}
          type="submit"
          disabled={loading}
        >
          <Send size={18} />
          <span>{loading ? "Envoi..." : "Envoyer la suggestion"}</span>
        </button>

        {success && <SplitText
          text="Suggestion envoyée avec succès !"
          className="bg-green-500 text-xs text-bg px-2"
          delay={40}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 10 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />}

        {error && <SplitText
          text="Une erreur est survenue. Veuillez réessayer plus tard."
          className="bg-red-500 text-xs text-bg px-2"
          delay={40}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 10 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />}
      </form>
    </div>
  );
};

export default Suggest;
