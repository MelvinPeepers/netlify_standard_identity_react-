import './App.css';
import netlifyIdentity from 'netlify-identity-widget';

netlifyIdentity.init();

function App() {

  const loginWidget = () => {
    netlifyIdentity.open('login');
  }
  const signupWidget = () => {
    netlifyIdentity.open('signup');
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React - Login
        </p>
        <button onClick={signupWidget}>Sign up</button>
        <button onClick={loginWidget}>Login</button>
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
