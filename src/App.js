import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import OrderSummary from "./orderSummary";
import MessageSumary from "./components/messageSumary";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>}/>
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="message-summary" element={<MessageSumary />} />
        <Route path="#" element={<NoMatch />} />
       
      </Routes>
    </>
  );
}


export default App;
