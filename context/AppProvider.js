import { useState, createContext } from "react"
import Scrollable from '../styles/Scrollable.module.css'
import Hamburguer from '../styles/Layout/Header/Hamburguer.module.css'

const AppContext = createContext()

const AppProvider = ({children}) => {
   const [clicked, setClicked] = useState("1")
   const [mostrar, setMostrar] = useState(true)
   const [hamBoxClass, sethamBoxClass] = useState(Hamburguer.hamBox)
   const [hambuguerClass, setHambuguerClass] = useState(Hamburguer.hamburguer)

   const mostrarOcultarAside = () => {
      setMostrar(!mostrar)
      if (!mostrar) {
         sethamBoxClass(Hamburguer.hamBox) 
         setHambuguerClass(Hamburguer.hamburguer) 
         if(window.innerWidth < 768) {
            document.querySelector("body").classList.remove(Scrollable.disableScroll); 
         }
      }
      if(mostrar) {
         sethamBoxClass(Hamburguer.hamBoxActive)
         setHambuguerClass(Hamburguer.hamburguerActive)
         if(window.innerWidth < 768) {
            document.querySelector('body').classList.add(Scrollable.disableScroll);
         }
         return
      }
   }

   return (
      <AppContext.Provider
         value={{
            clicked,
            mostrar,
            hamBoxClass,
            hambuguerClass,
            setClicked,
            mostrarOcultarAside
         }}
      >
         {children}
      </AppContext.Provider>
   )
}
export {
   AppProvider
}

export default AppContext