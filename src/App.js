import "./App.css";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { TextField } from "@mui/material";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
