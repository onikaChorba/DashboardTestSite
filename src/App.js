import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <div className="App wrapper">
      <div className="wrapper">
        <Router>
          <div className="main-container">
            <Header />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              {/* <Route path={routes.LESSONS} element={<Lessons />} />
              <Route path={routes.FIND} element={<Find />} />
              <Route path={routes.ABOUT} element={<About />} /> */}
            </Routes>
          </div>
          {/* <Footer /> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
