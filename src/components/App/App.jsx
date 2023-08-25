import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import About from "../../views/About.view";
import Error from "../../views/Error.view";
import Form from "../../views/Form.view";
import Detail from "../../views/Detail.view";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const EMAIL = "erraticless@gmail.com";
  const PASSWORD = "123456";
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home'); //{PATHROUTES.HOME}
    }
  }


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

  const location = useLocation();
  if (location.pathname === PATHROUTES.ROOT) {
    return (
      <div>
        <Routes>
          <Route path={PATHROUTES.ROOT} element={<Form login={login} />} />
        </Routes>
      </div>);
  } else {
    return (
      <div>
        <Nav onSearch={onSearch} />
        <Routes>
          <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />} />
          <Route path={PATHROUTES.ABOUT} element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>);
  }
}

export default App
