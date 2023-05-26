import G from '../../styles/Globals.module.css'
import C from '../../styles/Contactame.module.css'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const Contactame = () => {
   const [copiado, setCopiado] = useState(false);
   const handleClick = () => {
      navigator.clipboard.writeText("riolivares.dev@gmail.com")
      setCopiado(true)
   }
   return (
      <section id="contactame" className={G.contenedorSeccion}>
         <h2 className={G.titulo}>Contáctame</h2>
         <p className={C.subtitulo}>Estoy buscando nuevas experiencias, ya sea como freelance o en relación de dependencia.</p>
         <p className={C.subtitulo}>Si quieres ofrecerme participar en algun proyecto, preguntarme algo, o solo conversar, yo intentaré responderte lo antes posible!</p>
         <div className={C.contenedorPeticiones}>
            <div className={C.contenedorPeticion}>
               <Link legacyBehavior href="https://www.linkedin.com/in/rodrigo-ignacio-olivares-158547220/">
                  <div className={C.contenedorLink}>
                     <p className={C.peticion}>/rodri-olivares</p>
                     <Image 
                        src="/linkedin.svg"
                        width={50}
                        height={50}
                        alt="botón Mí LinkedIn"
                        className={C.imagen}
                     />
                     <p className={C.textoImagen}>Visita mi perfil</p>
                  </div>
               </Link>
            </div>
            <div className={C.contenedorPeticion}>
               <div className={C.contenedorLink}>
                  <p className={C.peticion}>riolivares.dev@gmail.com</p>
                  <Image 
                     src="/email.svg" 
                     width={50}
                     height={50}
                     alt="botón Enviar Correo" 
                     className={C.imagen}
                     onClick={handleClick}
                  />
                  <p className={C.textoImagen}>{!copiado ? 'Copiar al portapapeles' : 'Copiado al portapapeles'}</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Contactame