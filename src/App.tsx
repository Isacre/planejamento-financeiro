import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/conta" element={<Dashboard />} />
          <Route path="/graficos" element={<Dashboard />} />
          <Route path="/fluxo" element={<Dashboard />} />
          <Route path="/preferencias" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
