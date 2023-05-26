import G from '../../styles/SobreMi/SobreMi.module.css'
import C from '../../styles/SobreMi/Cursos.module.css'

const Curso = ({nombre, descripcion, fecha, institucion}) => {
   return (
      <div className={C.curso}>
         <div className={C.nombreDescripcion}>
            <p className={G.nombre}>{nombre}</p>
            <p className={C.descripcion}>{descripcion}</p>
         </div>
         <div className={G.textAlignRight}>
            <p className={G.fecha}>{fecha}</p>
            <p className={G.institucion}>{institucion}</p>
         </div>
      </div>
   )
}
export default Curso