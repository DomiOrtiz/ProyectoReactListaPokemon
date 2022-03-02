import React , { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import {AppContainer} from "./AppContainer.styled";

const PokemonList = ({setIdPokemon, listToShow}) =>{

    const onClickPokemon = (index) => {
        setIdPokemon(index);
    }

return(
    <>
        <AppContainer>
            <thead>
                <tr>
                <th>Pokemon</th>
                <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                (listToShow.map((props, index) => (
                <PokemonCard key={index} id={props.id} pokemonName={props.name} src={props.url} onClickPokemon={onClickPokemon}></PokemonCard>
                ))
                )
                }
            </tbody>
        </AppContainer>
</>
)

}
export default PokemonList;