import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar'
import { Container } from 'react-bootstrap';
import { Practice } from './pages/Practice';

function App() {

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
