import React from 'react'
import { PROYECTOS } from "../../../constants"
import Proyecto from "./Proyecto"

const styles = ({nroProyecto}) => {
   return ( <>
      {PROYECTOS.map( (p, index) => {
         if((index)===nroProyecto) return ( 
            <Proyecto
               key={p.id}
               id={p.id}
               nombre={p.nombre}
               descripcion={p.descripcion}
               funcionalidades={p.funcionalidades}
               tecnologias={p.tecnologias}
               url={p.url}
               repositorio={p.repositorio}
            />
         )
      })}
   </> )
}

export default styles