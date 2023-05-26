import G from '../styles/Globals.module.css'
import P from '../styles/Principal.module.css'

const Principal = () => {
   return (
      <section className={G.contenedorSeccion}>
         <div className={P.header}>
            <h1 className={P.titulo}>Hola, soy 
               <span className={P.nombre}> Rodrigo Olivares</span></h1>
            <h2 className={P.job}>Desarrollador Front End</h2>
            <h3 className={P.frase}>Desarrollo mis habilidades para construir proyectos creativos en la web</h3>
         </div>
      </section>
   )
}
export default Principal