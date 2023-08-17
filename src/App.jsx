import style from "./styles/App.module.css";
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import characters, { Rick } from './data.js';

function App() {
  return (
    <div className={style.fondo}>
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Cards characters={characters} />
    </div>
  );
}

export default App
