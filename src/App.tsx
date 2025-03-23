import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>About Me</h1>
        <p>
          I am a software developer with a passion for building things that make a difference.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>Here are some of my projects:</p>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>You can reach me at:</p>
        <p>Email: example@example.com</p>
      </section>

      <footer>
        <p>&copy; 2023 My Name</p>
      </footer>
    </>
  )
}

export default App
