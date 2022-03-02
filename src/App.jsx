import React, { useEffect, useState } from 'react'
import PokemonList from './PokemonList';
import AppHeader from './AppHeader';
import PokemonDetail from './PokemonDetail';
import data from './data';
import AppFooter from './AppFooter';

//Funcion flecha o Arrow function
const App = () =>{

    const [idPokemon, setIdPokemon]=useState('0');
    const [search, setSearch]=useState('');
    const [listToShow, setListToShow]= useState(data);
    const [detailPokemon, setDetailPokemon] = useState([
        {
            id: "",
            name: "",
            url: "",
            type:"",
            Habilidad:"",
            HabilidadOculta:""
        }
    ]);

    const onChangeSearchInput = (event) => {
        setSearch(event.target.value);
        if(event.target.value.length>0)
        setIdPokemon('0');
    }

    useEffect(() => {
        if (search){
        let expresion = new RegExp(`${search}.*`, "i");
        setListToShow(data.filter(pokemon => expresion.test(pokemon.name)));
        }else{
            setListToShow(data);
        }
    }, [search]);

    useEffect(() => {
        if(!idPokemon || idPokemon==='0')
        return;
        setSearch('');
        let pokemonSelect=data.filter(pokemon => pokemon.id===idPokemon)[0];
        setDetailPokemon(pokemonSelect);
    }, [idPokemon]);

    

    //Lo que ejecuta la funcion;
return(
    <>{
        <div>
        <AppHeader onChangeSearchInput={onChangeSearchInput} search={search}/>
        <>{
            idPokemon === '0' ?
            <div>
                <PokemonList listToShow={listToShow} setIdPokemon={setIdPokemon} setSearch={setSearch} />
            </div>
            :
            <>
            <div>
               <PokemonDetail detailPokemon={detailPokemon} setIdPokemon={setIdPokemon}/>
            </div>
            </>
        }</>
        <AppFooter/>
        </div>
    }
    </>
    );

}

//exportacion
export default App;