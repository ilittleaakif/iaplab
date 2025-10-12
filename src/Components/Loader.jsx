import { PuffLoader } from "react-spinners";
export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col gap-2 items-center justify-center z-50">
      <PuffLoader color="gray" />
      <p className="font-main text-center">a Moment...</p>
    </div>
  );
};