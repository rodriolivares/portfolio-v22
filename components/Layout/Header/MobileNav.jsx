import { useContext } from 'react'
import AppContext from "../../../context/AppProvider"
import S from '../../../styles/Layout/Header/Menu.module.css'
import Links from "./Links"
import ResumeButton from "./ResumeButton"

const MobileNav = () => {
   const { mostrar, hamBoxClass, hambuguerClass, mostrarOcultarAside } = useContext(AppContext)

   return (
      <div>
         <button className={S.mobileButton} onClick={mostrarOcultarAside}>
            <div className={hamBoxClass} >
               <div className={hambuguerClass}></div>
            </div>
         </button>
         <aside 
            className={`${S.aside} ${!mostrar ? S.visible : S.oculto}`} 
            aria-hidden={!mostrar} 
            tabIndex={!mostrar ? "1" : "-1"}
         >
            <nav className={S.mobileNav}>
               <Links />
               <div>
                  <ResumeButton />
               </div>
            </nav>
         </aside>
      </div>
   )
}
export default MobileNav