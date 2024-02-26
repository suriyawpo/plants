import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Forms from "./Pages/Forms";
import Footer from "./Pages/Footer";

const App = () => {
    return (
        <div className="bg-green-50">
            <Home />

            <Product />
            <About />
            <Forms />
            <Footer />
        </div>
    );
};

export default App;
