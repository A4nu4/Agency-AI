import React from "react";
import Navbar from "@src/components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";

const App = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("item") ? localStorage.getItem("theme") : "light",
  );

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
    </div>
  );
};

export default App;
