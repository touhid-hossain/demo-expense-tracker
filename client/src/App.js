import Graph from "./components/Graph";
import Merge from "./components/Merge";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container mx-auto pt-10 pb-20 mx-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>
        {/* grid Columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* First Part */}
          <Graph></Graph>
          {/* Second Part */}
          <Merge />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
