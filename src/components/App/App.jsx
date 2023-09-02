// Componentes:
import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import Favorites from "../Favorites/Favorites";
// Vistas:
import About from "../../views/About.view";
import Error from "../../views/Error.view";
import Form from "../../views/Form.view";
import Detail from "../../views/Detail.view";
// hooks, routers, reducers:
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/actions";
// Otros:
import axios from 'axios';
import PATHROUTES from "../../helpers/PathRoutes";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const EMAIL = "erraticless@gmail.com";
  const PASSWORD = "123456";
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sin login no permito navegar por las páginas:
    !access && navigate(`${PATHROUTES.ROOT}`);
  }, [access]);

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.mail === EMAIL) {
      setAccess(true);
      navigate(`${PATHROUTES.HOME}`);
    }
  }

  const logout = () => {
    // Quito el acceso:
    setAccess(false);
    // elimino tarjetas:
    setCharacters([]);
    // elimino store:
    dispatch(reset());
    // Cargo la pag de login:
    navigate(`${PATHROUTES.ROOT}`);
  }

  const onSearch = (id) => {
    setIsLoading(true);
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
      .finally(() => {
        setIsLoading(false);
      });
  }

  const onClose = (id) => {
    // Cierro una card:
    console.log("Llega onClose id desde App", id);
    const filteredCharacters = characters.filter(character => character.id !== parseInt(id));
    setCharacters(filteredCharacters);
  }

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
        <Nav onSearch={onSearch} logout={logout} />
        <Routes>
          <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />} />
          <Route path={PATHROUTES.ABOUT} element={<About />} />
          <Route path={PATHROUTES.DETAIL} element={<Detail />} />
          <Route path={PATHROUTES.FAVORITES} element={<Favorites />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>);
  }
}
export default App;
