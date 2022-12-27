import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "NYRESA";
  }, []);

  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
