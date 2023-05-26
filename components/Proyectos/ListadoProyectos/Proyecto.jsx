import Image from "next/image"
import Link from "next/link"
import G from '../../../styles/Globals.module.css'
import P from '../../../styles/Proyectos/Proyecto.module.css'

const Proyecto = ({id, nombre, descripcion, funcionalidades, tecnologias, url, repositorio}) => {
  return (
    <div className={P.contenedorProyecto}>
      <p className={P.nombreProyecto}>{nombre}</p>
      <div className={P.contenedorCuerpo}>
        <div className={P.contenedorDescripcionLinks}>
          <p className={G.descripcion}>{descripcion}</p>
          <div className={P.contenedorLinks}>
            { url && <Link className={P.link} href={url}>
              <Image 
                src="/link.svg"
                width={20}
                height={20}
                alt="Icono de enlace a proyecto desplegado"
                className={P.imagenLink}
              />
              Visitar Demo
            </Link> }
            <Link className={P.link} href={repositorio}>
              <Image 
                src="/github.svg"
                width={20}
                height={20}
                alt="Icono de enlace a repositorio de github"
                className={P.imagenLink}
              />
              Visitar Repo
            </Link>
          </div>
        </div>
        <div className={P.contenedorImagenDetalles}>
          <div className={P.imageWrapper}>
            <Image 
              src={`/proyectos/${id}.jpg`}
              fill
              quality={100}
              alt={`Imagen Proyecto ${nombre}`} 
              className={P.imagen}
            />
          </div>
          <div className={P.contenedorDetalles}>
            <div>
              <h3 className={G.textoDestacado}>Funcionalidades Notables</h3>
              <ul className={P.funcionalidades}>
                {funcionalidades.map( (f, i) => (
                  <li 
                    key={i}
                    className={G.descripcion}
                  >- {f}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={G.textoDestacado}>Tecnologías Usadas</h3>
              <ul className={P.tecnologias}>
                {tecnologias.map( (t, i) => (
                  <li 
                    key={i} 
                    className={P.tecnologia}
                  >{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proyecto