import "./App.css";
import Products from "./pages/Products/";
import Cart from "./pages/Cart";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Thanks from "./pages/Thanks";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
