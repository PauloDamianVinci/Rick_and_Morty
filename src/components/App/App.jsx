import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import characters, { Rick } from "../../data.js";
function App() {
  return (
    <div>
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Cards characters={characters} />
    </div>
  );
}

export default App
