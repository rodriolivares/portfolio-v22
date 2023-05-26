import { useEffect, useState } from "react"
import { PROYECTOS } from "../../constants"
import Link from "next/link"
import G from '../../styles/Globals.module.css'
import P from '../../styles/Proyectos/Proyectos.module.css'
import B from '../../styles/Proyectos/Barra.module.css'
import ListadoProyectos from "./ListadoProyectos/ListadoProyectos"

const Proyectos = () => {
   const [nroProyecto, setNroProyecto] = useState(0)

   let timer
   useEffect(() => {
      const cambiarProyecto = () => {
         const nuevoNro = nroProyecto + 1
         timer = setTimeout(() => {
            reiniciarBarra()
            if (nuevoNro >= PROYECTOS.length) setNroProyecto(0)
            else setNroProyecto(nuevoNro)
         }, 20000);
      }
      cambiarProyecto()
   }, [nroProyecto]);

   const handleClick = e => {
      clearTimeout(timer)
      reiniciarBarra()
      if (e.target.name === 'siguiente') {
         if (nroProyecto < (PROYECTOS.length - 1)) setNroProyecto(nroProyecto + 1)
         else setNroProyecto(0)
         return
      }
      if (e.target.name === 'anterior') {
         if (nroProyecto > 0) setNroProyecto(nroProyecto - 1)
         else setNroProyecto(PROYECTOS.length - 1)
         return
      }
   }

   const reiniciarBarra = () => {
      const animaciones = document.getAnimations()
      animaciones.forEach(animacion => {
         if (animacion.animationName?.includes('completar')) {
            animacion.cancel();
            animacion.play();
         }
      })
   };

   return (
      <section id="proyectos" className={G.contenedorSeccion}>
         <h2 className={G.titulo}>Proyectos</h2>
         <div className={P.contenedorCuerpo}>
            <div className={P.contenedorNavegacion}>
               <p className={P.numeroProyecto}>
                  {`${nroProyecto + 1} / ${PROYECTOS.length}`}
               </p>
               <div className={B.barra}></div>
               <div className={P.contenedorBotones}>
                  <button
                     name="anterior"
                     type="button"
                     className={P.boton}
                     onClick={e => handleClick(e)}
                  >&lt;</button>
                  <button
                     name="siguiente"
                     type="button"
                     className={P.boton}
                     onClick={e => handleClick(e)}
                  >&gt;</button>
               </div>
            </div>
            <ListadoProyectos
               nroProyecto={nroProyecto}
            />
         </div>
         <p className={P.masProyectos}>*para todos mis proyectos, visita <Link legacyBehavior href="https://github.com/rodriolivares?tab=repositories"><a>mis repositorios de GitHub.</a></Link> En cada repositorio hay un README.txt con instrucciones para ver el proyecto desplegado o servirlo en desarrollo</p>
      </section>
   )
}
export default Proyectos