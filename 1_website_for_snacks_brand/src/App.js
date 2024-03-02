import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quality from "./components/Quality";
import CallToAction from "./components/CallToAction";
import AboutFounder from "./components/AboutFounder";
import CountdownTimer from "./components/CountdownTimer";
import Form from "./components/Form";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFormOpen(true);
    }, 15000);
  }, []);

  function closeForm() {
    setIsFormOpen(false);
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Quality />
      <CallToAction />
      <CountdownTimer />
      <AboutFounder />
      {isFormOpen && <Form closeForm={closeForm} isFormOpen={isFormOpen} />}
    </>
  );
}

export default App;
