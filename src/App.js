import './App.css';
import netlifyIdentity from 'netlify-identity-widget';

netlifyIdentity.init();

function App() {

  const openLoginWidget = () => {
    netlifyIdentity.open('login');
  }

  const callFunction = () => {
    const user = netlifyIdentity.currentUser();
    console.log(user)
    fetch("/.netlify/functions/protected-function", user && {
      headers : {
        Authorization: "Bearer " + user.token.access_token
      }
    })
    .then(x => {
      return x.json()
    })
    .then(res => {
      if(res.data === "NOT ALLOWED") {
        netlifyIdentity.open('login');
      } else {
        alert(res.data)
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React - Login
        </p>
        <button onClick={openLoginWidget}>{"Log in"}</button>
        <button onClick={callFunction}>{"Call Function"}</button>
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
