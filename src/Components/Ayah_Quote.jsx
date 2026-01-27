import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import { motion, AnimatePresence } from "motion/react";

const RandomQuery = ({ isAyah }) => {
  const API_URL = isAyah
    ? "https://api.quranhub.com/v1/ayah/random"
    : "https://quotes-api-self.vercel.app/quote";

  const [query, setQuery] = useState({ txt: "", subtxt: "" });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);


  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(query.txt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
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
        setQuery({
          txt: ayah.text || "—",
          subtxt: `${ayah.surah?.name || "Unknown Surah"} — آية ${ayah.numberInSurah || "?"
            }`,
        });
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
    <motion.div
      layout
      className="relative flex flex-col w-full max-w-5xl mx-auto overflow-hidden text-center rounded-lg shadow-xl min-h-[220px] bg-[#fdfbf7] border border-stone-200"
      style={{
        backgroundImage: `
        repeating-linear-gradient(0deg, rgba(75, 85, 99, 0.08), rgba(75, 85, 99, 0.08) 2px, transparent 2px, transparent 6px),
        repeating-linear-gradient(90deg, rgba(107, 114, 128, 0.06), rgba(107, 114, 128, 0.06) 2px, transparent 2px, transparent 6px),
        repeating-linear-gradient(0deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 12px),
        repeating-linear-gradient(90deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 12px)
      `,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
    >

      <div className="flex-1 p-8 md:p-10 flex flex-col justify-center items-center relative z-10">
        <AnimatePresence mode="wait">
          {loading ? (

            <DotLoader color="#1116" size={30} />

          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full flex flex-col gap-5"
            >
              {/* Quote Text */}
              <p
                dir={isAyah ? "rtl" : "ltr"}
                className={`text-text-soft text-xl sm:text-2xl
                  ${isAyah ? "font-arabic" : "font-main"}`}
              >
                {query.txt}
              </p>



            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="backdrop-blur-lg border-t-2 border-border p-3 flex justify-between items-center px-6">
        <p
          className={`text-sm uppercase text-text-soft font-medium ${isAyah ? "font-arabic" : "font-sans"}`}
        >
          {query.subtxt}
        </p>

        <div className="flex items-center">
          {/* regen */}
          <motion.button
            onClick={fetchRandom}
            className="cursor-pointer hover:rotate-90 hover:text-text text-text-muted transition duration-300 p-2"
            title="New Quote"
          >
            <i className="fa-solid fa-rotate text-sm"></i>
          </motion.button>

          {/* copy */}
          <motion.button
            onClick={handleCopy}
            className={`flex hover:text-text text-text-muted cursor-pointer items-center justify-center px-3 py-1 text-sm transition duration-300 `}
          >
            {copied ? (
              <i className="fa-solid fa-check text-text"></i>
            ) : (
              <i className="fa-solid fa-copy"></i>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default RandomQuery;