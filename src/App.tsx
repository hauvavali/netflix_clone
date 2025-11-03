import "./App.css";
import Hero from "./components/Hero";
import TrendingNow from "./components/TrendingNow";

function App() {
  return (
    <main>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Hero />
        <TrendingNow />
      </div>
    </main>
  );
}

export default App;
