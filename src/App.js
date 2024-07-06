import "./App.css";
import Navigation from "./Customer/components/Naviga/Navigation/Navigation";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Customer/components/Footer/Footer";
import CustomerRouter from "./Customer/Routers/CustnomerRouter";

function App() {
  return (
    <BrowserRouter> {/* Ensure BrowserRouter wraps your entire app */}
      <div className="">
        <div>
          <Navigation />
          <Routes>
            <Route path="/*" element={<CustomerRouter />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
