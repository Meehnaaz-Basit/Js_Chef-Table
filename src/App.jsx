import "./App.css";
import Header from "./Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="container mx-auto max-w-[1200px] w-[90%] lg-w[84%]">
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}

export default App;
