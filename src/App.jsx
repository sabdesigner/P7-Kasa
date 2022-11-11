//Import Routes
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Import normalize
import 'normalize.css'

//Import Sass
import './styles/main.scss'

import Loading from './layouts/Loading'
import Header from './layouts/Header'

import Home from './pages/Home'
import About from './pages/About'
import NoMatch from './pages/NoMatch'
import Single from './pages/Single'

import Footer from './layouts/Footer'

//Import Header + Footer

function App() {
    return (
        <div>
            <Loading />
            <div className="App">
                <Router>
                    <Header />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="/logements/:cardId" exact strict element={<Single />} />
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </div>
    )
}

export default App
