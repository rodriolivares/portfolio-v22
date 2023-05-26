import S from '../../styles/SobreMi/Tecnologias.module.css'

const Tecnologia = ({nombre, src}) => {
   return (
      <div className={S.tecnologia}>
         <img className={S.iconoTecnologia}
            src={src}
            alt={nombre}
         />
         <p className={S.nombreTecnologia}>{nombre}</p>
      </div>
   )
}
export default Tecnologia