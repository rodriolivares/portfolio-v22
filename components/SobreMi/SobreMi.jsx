import { useState } from "react"

import G from '../../styles/Globals.module.css'
import S from '../../styles/SobreMi/SobreMi.module.css'
import Seccion from "./Seccion"

const SobreMi = () => {
   const [seccionMostrar, setSeccionMostrar] = useState('tecnologias');
   const [cambiarSeccion, setCambiarSeccion] = useState(false);

   const handleClick = async e => {
      setCambiarSeccion(true)
      setTimeout(() => {
         setSeccionMostrar(e)
         setCambiarSeccion(false)
      }, 250);
   } 
   
   return ( 
      <section id="sobreMi" className={G.contenedorSeccion}>
         <h2 className={G.titulo}>Sobre Mi</h2>

         <div className={S.contenedorCuerpo}>
            <div className={S.contenedorTexto}>
               <p className={S.descripcion}>En mi adolescencia <span className={G.textoDestacado}>estudié inglés 7 años.</span></p>
               <p className={S.descripcion}>Comencé estudiando Ingeniería en Sistemas de Información y luego descubrí una pasión por la programación de páginas web. Ésta fue creciendo al integrar conceptos como el <span className={G.textoDestacado}>análisis y diseño de sistemas</span>, el <span className={G.textoDestacado}>paradigma de programación orientado a objetos</span> y la <span className={G.textoDestacado}>gestión de base de datos.</span></p>
               <p className={S.descripcion}>Actualmente tengo <span className={G.textoDestacado}>+100 horas de cursos online y +15 proyectos web</span> hechos a partir de React JS y con tecnologías relacionadas al desarrollo Full Stack.</p>
            </div>
            <div className={S.contenedorTabla}>
               <div className={S.contenedorTitulos}>
                  <button 
                     name="tecnologias" 
                     onClick={e => handleClick(e.target.name)} 
                     className={`${S.button} ${seccionMostrar === 'tecnologias' ? S.buttonActive : null}`}
                  >Tecnologías</button>
                  <button 
                     name="cursos"
                     onClick={e => handleClick(e.target.name)} 
                     className={`${S.button} ${seccionMostrar === 'cursos' ? S.buttonActive : null}`}
                  >Certificados</button>
                  <button 
                     name="formacion" 
                     onClick={e => handleClick(e.target.name)} 
                     className={`${S.button} ${seccionMostrar === 'formacion' ? S.buttonActive : null}`}
                  >Formación</button>
               </div>
               <div className={`${cambiarSeccion ? S.out : S.in}`}>
                  <Seccion seccionMostrar={seccionMostrar} />
               </div>
            </div>
         </div>
      </section>
   )
}

export default SobreMi