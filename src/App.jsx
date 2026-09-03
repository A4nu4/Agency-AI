import React from "react";
import Navbar from "@src/components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("item") ? localStorage.getItem("theme") : "light",
  );

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
    </div>
  );
};

export default App;
