import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomersList from "./pages/CustomersList";
import CustomerForm from "./pages/CustomerForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomersList />} />
        <Route path="/customer/:id?" element={<CustomerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
