import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React - Login
        </p>
        <div data-netlify-identity-menu></div>
          <a
            className="App-link"
            href="https://docs.netlify.com/visitor-access/identity/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify Identity
          </a>
      </header>
    </div>
  );
}

export default App;
