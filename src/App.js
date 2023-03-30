import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Customers } from "./pages/Customers/Customers";
import routes from "./routes";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route exact path={routes.CUSTOMERS} element={<Customers />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
