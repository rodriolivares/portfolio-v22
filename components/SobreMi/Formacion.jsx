import G from '../../styles/SobreMi/SobreMi.module.css'
import F from '../../styles/SobreMi/Formaciones.module.css'

const Formacion = ({nombre, fecha, institucion}) => {
   return (
      <div className={F.formacion}>
         <div>
            <p className={G.nombre}>{nombre}</p>
         </div>
         <div className={G.textAlignRight}>
            <p className={G.fecha}>{fecha}</p>
            <p className={G.institucion}>{institucion}</p>
         </div>
      </div>
   )
}
export default Formacion