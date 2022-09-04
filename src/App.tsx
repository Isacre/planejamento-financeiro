import Dashboard from "./layout/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountDetails from "./pages/AccountDetails";
import UserAnalytics from "./pages/UserAnalytics";
import CashFlow from "./pages/CashFlow";
import ConfigMenu from "./pages/ConfigMenu";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="home" element={<Home />} />
            <Route path="conta" element={<AccountDetails />} />
            <Route path="graficos" element={<UserAnalytics />} />
            <Route path="fluxo" element={<CashFlow />} />
            <Route path="preferencias" element={<ConfigMenu />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
