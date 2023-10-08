import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import './styles/reset.css';
import './styles/App.css'

import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Intro from './components/homePage/intro/Intro';
import InfoSection from './components/homePage/infoSection/InfoSection'
import Card from './components/homePage/card/Card';
import Gallery from './components/homePage/gallery/Gallery';
import Review from './components/homePage/review/Review';
import Hotels from './components/subPage/Hotels'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sub" element={<SubPage />} />
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Intro />
      <InfoSection />
      <Card />
      <Gallery />
      <Review />
    </div>
  )
}

function SubPage() {
  return (
    <div>
      <Hotels />
    </div>
  )
}

export default App;
