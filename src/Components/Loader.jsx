import { ClimbingBoxLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-bg flex flex-col gap-14 items-center justify-center z-50">
      <ClimbingBoxLoader color="#111" />
    </div>
  );
};