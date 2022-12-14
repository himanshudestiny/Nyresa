import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <Products />
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
