import React, {useState} from 'react';
import './App.css';

const GIFS = ["tal", "qual"];
const DIFFERENT_GIFS = ["bueno", "vale"];

function App() {
  const [gifs, setGifs] = useState(GIFS);
  /*const state = useState([]);
  const gifs = state[0];
  const setGifs = state[1];*/
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <h3>{singleGif}</h3>)
        }
        <button onClick={() => setGifs(DIFFERENT_GIFS)}>
          Cambiar gifs
        </button>
      </section>
    </div>
  );
}

export default App;
