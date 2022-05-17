import logo from './img/logo.jpg'
import './App.css';
import Home from './components/Home';
import { useState } from 'react';


function App() {
const [number, setNumber] = useState('')
const [superhero, setSuperhero] = useState(null)

console.log(number)


const resApi = async() => {
  const api = await fetch(`https://www.superheroapi.com/api.php/3525635500807579/${number}`)
  const heroApi = await api.json();
  setSuperhero(heroApi)
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="text-center" alt="logo" />

       {superhero ? (
          <Home hero={superhero}/>
       ) : (
         <>
         <h5 >Encuentra a tu Super Heroe</h5>
         <p>Ingresa un numero del 1 al 732</p>
         <input type="number" min="1" max="732"  onChange={event => setNumber(event.target.value)}/>
        <button onClick={resApi} className="btn btn-primary mt-2">Buscar</button>
         </>
       )}
      </header>
    </div>
  );
}

export default App;
