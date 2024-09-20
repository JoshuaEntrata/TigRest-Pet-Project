import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex gap-10">
          <img src={logo} className="w-20 h-20" alt="logo" />
          <h1 className="text-purple-500 bg-blue-800">Hello world</h1>
        </div>

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
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </header>
    </div>
  );
}

export default App;
