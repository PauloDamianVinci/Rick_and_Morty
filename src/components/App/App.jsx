import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import { useState } from "react";
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          // verifico repeticiones:
          const ids = characters.map(el => el.id);
          if (!ids.includes(parseInt(id))) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('¡Ese personaje ya existe!');
          }
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch(function (error) {
        if (error.response) {
          window.alert(`Error: ${error.response.status}`);
        } else {
          window.alert(`Error: ${error.message}`);
        }
      })
  }

  const onClose = (id) => {
    const filteredCharacters = characters.filter(character => character.id !== parseInt(id));
    setCharacters(filteredCharacters);
  }


  return (
    <div>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App
