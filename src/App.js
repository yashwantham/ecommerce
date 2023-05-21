
import Mockman from "mockman-js"
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage/HomePage";
import { WishlistPage} from "./pages/WishlistPage/WishlistPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { ProductlistPage } from "./pages/ProductlistPage/ProductlistPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/productlist" element={<ProductlistPage/>}/>
        <Route path="/wishlist" element={<WishlistPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/mockman" element={<Mockman/>}/>
      </Routes>
      
      
     
      
      <Footer/>
    </div>
  );
}

export default App;
