import Tecnologia from "./Tecnologia"
import Curso from "./Curso"
import Formacion from "./Formacion"

import S from '../../styles/SobreMi/SobreMi.module.css'
import T from '../../styles/SobreMi/Tecnologias.module.css'

import { TECNOLOGIAS, CURSOS, FORMACION } from "../../constants"

const Seccion = ({ seccionMostrar }) => {

   return (
      <div className={`${seccionMostrar === 'tecnologias' ? T.contenedorTecnologias : S.listado}`}>
         {seccionMostrar==='tecnologias' && TECNOLOGIAS.map(t => (
            <Tecnologia 
               key={t.id}
               nombre={t.nombre}
               src={t.src}
            />
         ))}
         {seccionMostrar==='cursos' && CURSOS.map(c => (
            <Curso
               key={c.id}
               nombre={c.nombre}
               descripcion={c.descripcion}
               fecha={c.fecha}
               institucion={c.institucion}
            />
         )) }
         {seccionMostrar==='formacion' && FORMACION.map(f => (
            <Formacion 
               key={f.id}
               nombre={f.nombre}
               descripcion={f.descripcion}
               fecha={f.fecha}
               institucion={f.institucion}
            />
         )) }
      </div>
   )
}

export default Seccion