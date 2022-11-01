//Import Routes
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//Import Sass
import "./styles/main.scss";

import Header from "./layouts/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Single from "./pages/Single";

import Footer from "./layouts/Footer";

//Import Header + Footer

function App() {
  return (
    <div>
      <div className="App">
        <Router>
        <Header />
          <Routes>

            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="single" element={<Single />} />
            <Route path="*" element={<NoMatch />} />

          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
