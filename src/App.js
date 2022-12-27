import "./App.css";
import Products from "./pages/Products/";
import Cart from './pages/Cart';
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
