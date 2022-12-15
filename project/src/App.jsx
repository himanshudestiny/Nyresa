import "./App.css";
import Navbar from "./components/Navbar";
import Delivery from "./components/Delivery/Delivery";
import Products from "./components/Products";
import AllRoutes from "./pages/AllRoutes";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Products /> */}
      {/* <ProductDetails /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
