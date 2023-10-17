import logo from './logo.svg';
import './App.css';
import LearnUseState1 from './pages/LearnUseState1/index';
import LearnUseState2 from './pages/LearnUseState2/index';
import LearnUseContext from './pages/LearnUseContext/index';

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
          Learn React
        </a>
      </header>

      {/* <LearnUseState2 /> */}
      <LearnUseContext />
    </div>
  );
}

export default App;
