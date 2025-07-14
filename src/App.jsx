import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import MyStack from './components/MyStack.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<About />} />
        <Route path="/stack" element={<MyStack />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

