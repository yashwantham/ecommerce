
import Mockman from "mockman-js"
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/HomePage/HomePage";
import { WishlistPage} from "./pages/WishlistPage/WishlistPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { ProductlistPage } from "./pages/ProductlistPage/ProductlistPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage"
import { LoginPage } from "./pages/Authentication/LoginPage/LoginPage";
import { SignupPage } from "./pages/Authentication/signup/SignupPage";

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
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
