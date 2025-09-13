import { ArrowLeftIcon, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SplitText from "../assets/SplitText";

function ProvideSection() {
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const [Provider, setProvider] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your contribution! 🎉");
    setFile(null);
    setLink("");
  };

  return (
    <div className=" relative flex bg-bg *:animate-fadein  flex-col items-center justify-center min-h-screen p-8 font-gortesk text-text ">
      <SplitText
        text="Not available yet :)"
        className="md:text-3xl text-xl font-semibold text-center text-text mb-5"
        delay={70}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 10 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      <div className="flex items-center gap-2 ">
        <h1 className="text-5xl">Hello student!</h1>
        <Heart size={30} fill="red" />
      </div>
      <h4 className="mt-2 text-center text-light/70 font-gortesk ">
        Share useful documents, pictures, or even drive links that could help other students!
      </h4>

      <form className="flex flex-col w-full max-w-md gap-4 mt-8 animate-slideUp" onSubmit={handleSubmit} >
        <label className="p-4 font-semibold text-center transition-all duration-300  border-2 border-violet border-dashed rounded-lg cursor-pointer hover:border-violet-light">
          <input
            required
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
          <span>{file ? file.name : "Click to choose a file"}</span>
        </label>

        <input
          type="text"
          value={Provider}
          placeholder="Type your name (optional)..."
          required
          onChange={(e) => setProvider(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg outline-none transition-colors duration-300 focus:border-indigo-700 focus:shadow-[0_0_6px_rgba(79,70,229,0.4)]"
        />

        <input
          type="text"
          placeholder="Please add a description about the document..."

          value={link}
          required
          onChange={(e) => setLink(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg outline-none transition-colors duration-300 focus:border-indigo-700 focus:shadow-[0_0_6px_rgba(79,70,229,0.4)]"
        />



        <button type="submit" className="py-3 font-bold text-white transition bg-indigo-700 rounded-lg cursor-pointer hover:bg-indigo-500">Send</button>
      </form>

      <ArrowLeftIcon className="absolute left-8 top-8 cursor-pointer" onClick={() => navigate('/')}/>
    </div>
  );
}

export default ProvideSection;
