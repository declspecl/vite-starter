import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Hello, my name is Gavin D'Hondt. I am 19 years old and I love programming.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>I am a student at Oakland University.</p>
      <p>I enjoy coding and learning new technologies.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>Email: redacted@gmail.com</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
