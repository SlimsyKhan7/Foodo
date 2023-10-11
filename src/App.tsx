import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Navbar } from './containers/Navbar/Navbar'
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
