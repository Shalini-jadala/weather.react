
import './App.css';
import Forms from "./Forms";
import Lists from "./Lists";
import Emojis from "./Emojis"

function App() {
  return (
    <div className="container">
      <header className="App-header">
      < Forms />
          <h1>London</h1>
          <Lists />
          <Emojis />
          </header>
      <footer>
        This project was coded by <a href="https://github.com/Shalini-jadala" >Shalini.J</a> and
         <a href="https://github.com/Shalini-jadala/weather.react"> open sourced on Github</a> hosted on <a href=" " >
          Netlify.</a>
      </footer>
    </div>
  );
}

export default App;
