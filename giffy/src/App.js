import React, {useEffect, useState} from 'react';
import './App.css';

const GIFS = [1, 2];
const DIFFERENT_GIFS = [3, 4];

function App() {
  const [gifs, setGifs] = useState(GIFS);

  // se ejecuta al renderizar
  // 2nd param, dependencias que tiene el efecto
  useEffect(function () {
    setGifs(DIFFERENT_GIFS)
    console.log('efecto ejecutado')
  }, []);
  /*const state = useState([]);
  const gifs = state[0];
  const setGifs = state[1];*/
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <h3>{singleGif}</h3>)
        }
      </section>
    </div>
  );
}

export default App;
