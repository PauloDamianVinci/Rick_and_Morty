// Componentes:
import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import Favorites from "../Favorites/Favorites";
// Vistas:
import About from "../../views/About.view";
import ErrorView from "../../views/Error.view";
import Form from "../../views/Form.view";
import Detail from "../../views/Detail.view";
// hooks, routers, reducers:
import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/actions";
// Otros:
import axios from 'axios';
import { PATHROUTES } from "../../config/config";
import randomGenerator from "../../functions/randomGenerator";
import ProtectedRoute from "../../functions/ProtectedRoute";


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const EMAIL = "erraticless@gmail.com";
  const PASSWORD = "123456";
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [hide, setHide] = useState(false);

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.mail === EMAIL) {
      setAccess(true);
      navigate(`${PATHROUTES.HOME}`);
    }
  }

  const logout = () => {
    setAccess(false); // Quito el acceso
    setCharacters([]); // elimino tarjetas
    dispatch(reset()); // elimino store
    navigate(`${PATHROUTES.ROOT}`); // Cargo la pag de login
    setHide(false); // Vuelvo a permitir mostrar la barra de navegación:
  }

  const onSearch = (id, mostrarMensajes) => {
    if (isLoading) return null; // para no ingresar mientras está en una búsqueda previa
    setIsLoading(true);
    axios.get(`${PATHROUTES.RMCHARS}/${id}`)
      .then(({ data }) => {
        if (data.name) {
          // verifico repeticiones:
          const ids = characters.map(el => el.id);
          if (!ids.includes(parseInt(id))) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            if (mostrarMensajes) {
              window.alert('That character already exists!');
            } else {
              console.log("REPE!!!")
              const randomId = randomGenerator(826); // cuando estoy en random y me toca un repe, lo genero otra vez
              onSearch(randomId, false);
            }
          }
        } else {
          window.alert('There are no characters with this ID!');
        }
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        window.alert(error.message); //usar error.response.status para sólo el nro.
      });
  };

  const onClose = (id) => {
    // Cierro una card:
    const filteredCharacters = characters.filter(character => character.id !== Number(id));
    setCharacters(filteredCharacters);
  }

  return (
    <div>
      {location.pathname !== PATHROUTES.ROOT && < Nav hide={hide} onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path={PATHROUTES.LOGIN} element={<Form login={login} />} />
        <Route element={<ProtectedRoute Access={access} />}>
          <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />} />
          <Route path={PATHROUTES.ABOUT} element={<About />} />
          <Route path={PATHROUTES.DETAIL} element={<Detail />} />
          <Route path={PATHROUTES.FAVORITES} element={<Favorites />} />
        </Route>
        {/* envío setHide para ocultar la barra de navegación al mostrar error en página: */}
        <Route path="*" element={<ErrorView logout={logout} setHide={setHide} />} />
      </Routes>
    </div>
  );
}
export default App;

