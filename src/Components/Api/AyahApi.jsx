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

  useEffect(() => { fetchRandomAyah(); }, []);

  if (loading) return <PuffLoader className="mx-auto" color="green" />;
  if (!ayah) return <p className="text-center w-full">-</p>;

  return (
    <div className="mx-auto w-fit flex items-center flex-col text-center px-5 animate-fadein">
      <p className="font-arabic text-text md:text-lg text-base ">"{ayah.text}"</p>
      <p className="mt-2 text-[0.7rem] text-text-muted font-arabic">{ayah.surah?.name} — آية {ayah.numberInSurah}</p>
      <button className="cursor-pointer md:text-sm hover:border-black mt-2 px-3 border border-text-muted font-main text-text-muted transition text-xs" onClick={fetchRandomAyah}>
        new Ayah
      </button>
    </div>
  );
};

export default RandomAyah;
