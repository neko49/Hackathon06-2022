import React, { Fragment } from 'react'
import ProjectList from "./Projects/ProjectList";
import './Recherche.css'

function Recherche() {
  return (
    <Fragment>
        <div class="title">SAAGIE</div>
        <ProjectList/>
        <button class="BtnImp">Importer</button> 
            
    </Fragment>
  )
}

export default Recherche