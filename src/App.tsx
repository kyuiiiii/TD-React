import { useState } from 'react'
import { useEffect } from 'react';
import hero from './SuperHeros.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [recherche, setRecherche] = useState('');
  const nom = 'Toto';
  const nbId = hero.length;

  const superherosFiltres = hero.filter(hero =>
    hero.name.toLowerCase().includes(recherche.toLowerCase())
  )

  function incrementer(){
      setCount((count) => count + 1)
  }

  function reinit(){
    setCount(0)
  }

  useEffect(() =>{
    document.title = `Compteur : ${count}`;
  }, [count]);


  return (
    <>
      <h1>
          Bonjour {nom}, je découvre React !
      </h1>
      <div className="card">
        <button onClick={incrementer}>
            +
        </button>
        <button onClick={reinit}>
          Réinitialiser
        </button>
        <p>
          Le compteur vaut {count}  
        </p>
        <p>
          Il y a {nbId} super-héros dans la base:
        </p>
        <input id="recherche" type="text" onChange={(e) => setRecherche(e.target.value)}/>

        <div>
          <ul>
            {superherosFiltres.length >0? (
              superherosFiltres.map(hero => (
                <li key={hero.id}>{hero.name}</li>
              ))
            ):(<li>Aucun héro trouvé</li>)}
            
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
