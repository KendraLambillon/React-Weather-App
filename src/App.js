import './App.css';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by {""}
          <a href="#" target='_blank'>Kendra Lambillon</a> {""}
          and is {""}
          <a href="#" target='_blank'>open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
