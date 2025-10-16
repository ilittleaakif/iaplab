import { HashLoader } from "react-spinners";
export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col gap-8 items-center justify-center z-50">
      <HashLoader color="black" />
      <p className="font-main text-center">a miliSecond...</p>
    </div>
  );
};