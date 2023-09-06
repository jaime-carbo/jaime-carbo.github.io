import logo from './logo.svg';
import './App.css';
import './Header.css';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from './routesConfig';

function App() {
  return (
    <Router>
      <div className="App">
        <Header title="My portfolio" />
        <MyRoutes />
      </div>
    </Router>
  );
}

export default App;

