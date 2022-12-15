import "./App.css";
import Navbar from "./components/Navbar";
import Delivery from "./components/Delivery/Delivery";
import Products from "./components/Products";
import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Products />
    </div>
  );
}

export default App;
