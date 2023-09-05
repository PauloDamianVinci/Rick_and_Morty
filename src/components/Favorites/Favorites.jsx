import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../Card/Card.jsx";
import style from "./Favorites.module.css";
let { container, containerFiltros, containerCards } = style;

const Favorites = () => {
    const myFavorites = useSelector((state) => state.myFavorites);
    const [isLoading, setIsLoading] = useState(true);
    const [aux, setAux] = useState(false);
    const [sortOrder, setSortOrder] = useState('A');
    const [filterGender, setFilterGender] = useState('Todos');

    useEffect(() => {
        setIsLoading(false);
    }, []);

    const handleOrder = (e) => {
        //        setSortOrder(e.target.value);
        //       dispatch(orderCards(e.target.value));
        setAux(!aux);
    };

    const handleFilter = (e) => {
        //     setFilterGender(e.target.value);
        //    dispatch(filterCards(e.target.value));
    };


    return (
        <div>
            <div className={container}>
                <div className={containerFiltros}>
                    <div className={containerFiltros}>
                        <label>Ordenar por:</label>
                        <select value={sortOrder} onChange={handleOrder}>
                            <option value="A">Ascendente</option>
                            <option value="D">Descendente</option>
                        </select>
                    </div>
                    <div className={containerFiltros}>
                        <label>Filtrar por género:</label>
                        <select value={filterGender} onChange={handleFilter}>
                            <option value="Todos">Todos</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Genderless">Genderless</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={containerCards}>
                {
                    isLoading ? (
                        <p>Cargando...</p>
                    ) : myFavorites ? (
                        myFavorites.map((character) => (
                            <Card
                                id={character.id}
                                key={character.id}
                                name={character.name}
                                status={character.status}
                                species={character.species}
                                gender={character.gender}
                                origin={character.origin?.name}
                                image={character.image}
                                originHome={false}
                            />
                        ))
                    ) : null
                }
            </div>
        </div >
    );
};

export default Favorites;
