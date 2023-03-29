import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
