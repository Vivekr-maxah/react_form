import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./commonComponent/Layout";
import Rings from "./component/Rings";
import Bracelets from "./component/Bracelets";
import Earrings from "./component/Earrings";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

const App = () => {
  return (
    /* <Form /> */
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
