import React from "react";
import {AppDetail} from "./AppContainer.styled";

const PokemonDetail=({detailPokemon,setIdPokemon})=>{

    const {id, name, url, type, Habilidad, HabilidadOculta} = detailPokemon;

return(
    <>{
        <>
        <AppDetail>
        <table width="100%">
            <tr>
                <th>Id:</th>
                <td>{id}</td>
                <td rowSpan={6} width="100px">
                <input type="button" value="Regresar" onClick={(event) =>{setIdPokemon('0')}} />
                </td>
            </tr>
            <tr>
                <th>Nombre:</th>
                <td>{name}</td>
            </tr>
            <tr>
                <th>Imagen:</th>
                <td><img src={url} height="100px" /></td>
            </tr>
            <tr>
                <th>Tipo:</th>
                <td>{type}</td>
            </tr>
            <tr>
                <th>Habilidad:</th>
                <td>{Habilidad}</td>
            </tr>
            <tr>
            <th>Habilidad Oculta:</th>
                <td>{HabilidadOculta}</td>
            
            </tr>
        </table>
        </AppDetail>
        </>


    }</>


);

}

export default PokemonDetail;