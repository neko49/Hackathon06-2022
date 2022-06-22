import React, { Fragment } from 'react'
import ProjectList from "./Projects/ProjectList";
import './Recherche.css'

function Recherche() {
  return (
    <Fragment>
        <div class="title">SAAGIE</div>
        <div class="div"><button class="BtnImp">Importer</button> </div>
        
        <ProjectList/>
        
            
    </Fragment>
  )
}

export default Recherche