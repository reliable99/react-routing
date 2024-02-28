import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import OrderSummary from "./components/orderSummary";
import NoMatch from "./components/NoMatch";
import Product from "./components/Product";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import NewRules from "./components/NewRules";
import Newnews from "./components/Newnews";
import Oldnews from "./components/Oldnews";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="#" element={<NoMatch />} />
        <Route path="product" element={<Product />} >
          <Route path="featured" element={<FeaturedProduct/>}/>
          <Route path="new" element={<NewProduct/>}/>
           </Route>
           <Route path="newr" element={<NewRules />}>
            <Route path="new" element={<Newnews/>}/>d
            <Route path="old" element={<Oldnews/>}/>
           </Route>
      </Routes>
    </>
  );
}

export default App;
