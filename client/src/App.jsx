import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import PhoneDetails from "./pages/PhoneDetails";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<PhoneDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
