import React from "react";

const PokemonCard = ({id,pokemonName, src, onClickPokemon}) =>{
     return(
                <tr onClick={(event) => onClickPokemon(id)}>
                    <td><h2>{pokemonName}</h2></td>
                    <td><img src={src} height="80px" /></td>
                </tr>
     )
}
export default PokemonCard;