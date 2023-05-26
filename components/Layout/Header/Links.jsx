import { useContext } from 'react'
import AppContext from "../../../context/AppProvider"
import S from '../../../styles/Layout/Header/Links.module.css'
import BotonNavegacion from "./EnlaceNavegacion"

const DesktopNav = () => {
  const { clicked } = useContext(AppContext)

  return (
    <ol className={S.ol}>
      <li className={S.li}>
        <BotonNavegacion
          id="2" 
          href="#proyectos"
          className={`${S.enlace} ${clicked==='2' ? S.activo : ''}`}
          texto="Proyectos"
         />
      </li>
      <li className={S.li}>
        <BotonNavegacion
          id="3"
          href="#sobreMi"
          className={`${S.enlace} ${clicked==='3' ? S.activo : ''}`}
          texto="Sobre Mí"
         />
      </li>
      <li className={S.li}>
        <BotonNavegacion
          id="4" 
          href="#contactame"
          className={`${S.enlace} ${clicked==='4' ? S.activo : ''}`}
          texto="Contáctame"
         />
      </li>
    </ol>
  )
}
export default DesktopNav