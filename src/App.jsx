import { NonConstructibleChange } from "./components/NonConstructibleChange";
import { SmallestDiference } from "./components/SmallestDiference";

export const App = () => {
  return (
    <div className="bg-gray-600 h-screen flex flex-col items-center">
      <h1 className="text-3xl text-center mt-2 pb-2 bg-slate-200 w-2/5 font-bold text-gray-800 rounded-lg">
        42i Challenge técnico
      </h1>
      <div className="mt-4 flex">
        <NonConstructibleChange />
        <SmallestDiference />
      </div>
    </div>
  );
};
