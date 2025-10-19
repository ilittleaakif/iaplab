import { useEffect, useState } from "react";
import { DotLoader, PuffLoader } from "react-spinners";

const RandomQuery = ({ isAyah }) => {
  const API_URL = (isAyah)
    ? "https://api.quranhub.com/v1/ayah/random"
    : "https://quotes-api-self.vercel.app/quote";

  const [query, setQuery] = useState({ txt: "", subtxt: "" });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(query.txt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Clipboard error:", err);
    }
  };

  const fetchRandom = async () => {
    setLoading(true);
    try {
      const resp = await fetch(API_URL);
      const data = await resp.json();

      if (isAyah) {
        const ayah = data.data || data;
        setQuery({ txt: ayah.text || "—", subtxt: `${ayah.surah?.name || "Unknown Surah"} — آية ${ayah.numberInSurah || "?"}`, });
      } else {
        setQuery({ txt: data.quote, subtxt: data.author });
      }
    } catch (err) {
      console.error("Error fetching:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    query &&
    <div className="py-6 px-5 w-full flex flex-col items-center justify-center text-center *:animate-fadein min-h-[140px] md:min-h-[180px] transition-all duration-300 ease-in-out">
      {loading ? (
        <div className="flex justify-center items-center min-h-[100px]">
          <DotLoader color="#FECB4A" />
        </div>
      ) : (
        <>
          <p className={`text-text-soft ${isAyah ? 'font-quran' : 'font-main'}`}>
            “{query.txt}”
          </p>

          <p className={`mt-3 text-xs font-bold text-text-muted ${isAyah ? 'font-arabic' : 'font-main'}`}>
            {query.subtxt}
          </p>

          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              onClick={fetchRandom}
              className="cursor-pointer duration-300 text-xs md:text-sm px-3 py-1
                         border border-text-soft rounded-full font-main text-text-soft
                         hover:bg-fourth hover:text-bg hover:border-fourth
                         transition-colors"
            >
              {isAyah ? "new Ayah" : "new Quote"}
            </button>

            <button
              onClick={handleCopy}
              className={`cursor-pointer duration-300 text-xs md:text-sm px-3 py-1 border rounded-full font-main transition-all
                ${copied
                  ? "bg-accent-light text-bg border-accent-light"
                  : "border-text-soft text-text-soft hover:bg-accent hover:text-bg hover:border-accent-light"
                }`}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RandomQuery;
