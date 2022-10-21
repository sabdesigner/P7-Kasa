//Import Routes
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//Import Sass
import "./styles/main.scss";

import Home from "./pages/Home";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Single from "./pages/Single";

//Import Header + Footer

function App() {
  return (
    <div>
      <div className="App">
        <Router>
        
          <Routes>

            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="single" element={<Single />} />
            <Route path="*" element={<NoMatch />} />

          </Routes>

        </Router>
      </div>
    </div>
  );
}

export default App;
