import React from "react";
import './App.css'
import { Input } from 'semantic-ui-react'

const AppHeader=({onChangeSearchInput, search})=>{
return(
    <>
    <div className="Title">
      <h1>LISTA DE POKEMON´s</h1>
      <img src={"http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c31f.png"} height="100px" />
    </div>
    <div className="Search">
        <label><b> Buscar:</b></label>
        <Input value={search} placeholder='Buscar...' onChange={(event) => onChangeSearchInput(event)} />
    </div>
    </>

);

}
export default AppHeader;