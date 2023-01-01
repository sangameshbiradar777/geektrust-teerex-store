import "./App.css";
import Products from "./pages/Products/";
import Cart from "./pages/Cart";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/thanks' element={<Thanks />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
