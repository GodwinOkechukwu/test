import "./App.css";
import DealOverview from "./components/DealOverview";
import mockDeal from "./data/MockDeals";
import marketBenchmarks from "./data/marketBenchMarks";
function App() {
  return (
    <div className="">
      <DealOverview marketBenchmarks={marketBenchmarks} deal={mockDeal} />
    </div>
  );
}

export default App;
