import logo from './logo.svg';
import './App.css';
import './Header.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Do learn React
        </a>
      </header>
    </div>
  );
}

function Test() {
  return (
    <div>
      <Header  title = "My portfolio"/>
    </div>
  );
}

export default Test;

