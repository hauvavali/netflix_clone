import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";

function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <Hero />
        <Movies />
      </div>
    </>
  );
}

export default App;
