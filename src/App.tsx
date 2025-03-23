import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gia - Hackathon Judge</h1>
        <p>Welcome to my book website!</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am Gia, a passionate hackathon judge with a love for books and technology. I've been judging hackathons for several years and enjoy seeing innovative projects come to life.
        </p>
      </section>

      <section className="books">
        <h2>My Favorite Books</h2>
        <ul>
          <li>Book 1</li>
          <li>Book 2</li>
          <li>Book 3</li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2024 Gia's Book Website</p>
      </footer>
    </div>
  );
}

export default App
