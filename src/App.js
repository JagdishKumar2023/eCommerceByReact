import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ShopCategory from "./Pages/ShopCategory";
import Loginsignup from "./Pages/Loginsignup";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Footer/Footer";
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import kid_banner from "./Assets/banner_kids.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="mens" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="womens" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kids" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Loginsignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
