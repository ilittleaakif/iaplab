import { Send } from "lucide-react";

const Suggest = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="font-gortesk min-h-screen bg-bg-soft text-text flex items-center justify-center flex-col">
      {/* Header */}
      <h1 className="text-sub font-poppins mb-10">Still in development !</h1>
      <h1 className="text-xl md:text-3xl font-semibold mb-2 text-center font-poppins">Proposez quelque chose ✨</h1>
      <p className="text-text-soft text-sm max-w-10/12 md:text-base mb-6 text-center">Partagez vos idées, suggestions ou retours avec nous.</p>

      {/* Forum */}
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex px-8 flex-col gap-4 w-full md:max-w-1/4 items-center">

        <input
          type="text"
          placeholder="Votre nom"
          className="w-full rounded-xl border border-border bg-bg-soft px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent transition"
        />

        <textarea
          placeholder="Écrivez votre suggestion..."
          rows={4}
          className="w-full rounded-xl border border-border bg-bg-soft px-4 py-3 text-base resize-none focus:outline-none focus:ring-2 focus:ring-accent transition"
        />
        <button className="px-4 md:px-8 cursor-pointer flex items-center justify-center gap-2 bg-accent text-bg font-medium py-3 rounded-xl shadow-md hover:-translate-y-1 hover:text-text active:scale-95 transition-transform" type="submit">
          <Send size={18} />
          <span>Envoyer la suggestion</span>
        </button>
      </form>
    </div>
  );
};

export default Suggest;
