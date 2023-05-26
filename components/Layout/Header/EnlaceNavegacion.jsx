import React from 'react'
import { useContext } from 'react'
import AppContext from "../../../context/AppProvider"

const BotonNavegacion = ({ id, href, className, texto }) => {
   const {clicked, mostrar, setClicked, mostrarOcultarAside} = useContext(AppContext)

   const handleClick = e => {
      if(e.target.id !== clicked) {
        setClicked(e.target.id)
      }
      e.preventDefault()
      if(!mostrar) mostrarOcultarAside()
  
      const seccionSroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionSroll);
      seccion.scrollIntoView({ behavior: "smooth" });
   }

   return (
      <a
         id={id}
         href={href}
         onClick={(e) => handleClick(e)}
         className={className}
      >{texto}</a>
   )
}

export default BotonNavegacion