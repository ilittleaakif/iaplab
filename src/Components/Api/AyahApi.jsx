import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const RandomAyah = () => {
  const [ayah, setAyah] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomAyah = async () => {
    setLoading(true);
    try {
      const resp = await fetch("https://api.quranhub.com/v1/ayah/random");
      const data = await resp.json();
      setAyah(data.data || data);
    } catch (err) {
      console.error("Error fetching ayah:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomAyah();
  }, []);

  return (
    <div className="mx-auto w-fit flex flex-col items-center text-center px-5 animate-fadein min-h-[120px] md:min-h-[160px] transition-all duration-300 ease-in-out">
      {loading ? (
        <PuffLoader className="mx-auto" color="violet" />
      ) : ayah ? (
        <>
          <p className="font-quran text-text md:text-lg ">
            "{ayah.text}"
          </p>
          <p className="mt-2 text-[0.7rem] text-text-muted font-arabic">
            {ayah.surah?.name} — آية {ayah.numberInSurah}
          </p>
          <button
            onClick={fetchRandomAyah}
            className="cursor-pointer md:text-sm mt-2 px-3
              border hover:bg-green-400 hover:text-bg hover:border-green-400
              border-text-soft rounded-full font-main text-text-soft transition text-xs"
          >
            New Ayah
          </button>
        </>
      ) : (
        <p className="text-center w-full">-</p>
      )}
    </div>
  );
};

export default RandomAyah;
