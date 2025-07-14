// Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// My Creations
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<UserDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default App;
