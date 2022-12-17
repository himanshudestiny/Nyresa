import "./App.css";
import Navbar from "./components/Navbar";
import Delivery from "./components/Delivery/Delivery";
import Products from "./components/Products";
import AllRoutes from "./pages/AllRoutes";
import ProductDetails from "./components/ProductDetails";
import Payment from "./components/Payment/Payment";
import Confirm from "./components/Confirm/Confirm";
import Address from "./components/Delivery/Address";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Products />
      <ProductDetails /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
