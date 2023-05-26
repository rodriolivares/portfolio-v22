import Header from "../components/Layout/Header/Header"
import Principal from "../components/Principal";
import SobreMi from "../components/SobreMi/SobreMi";
import Proyectos from "../components/Proyectos/Proyectos";
import Contactame from "../components/Contactame/Contactame";
import Footer from "../components/Layout/Footer";
import G from '../styles/Globals.module.css'

export default function Home() {
  return (
    <div id="inicio" className={G.contenedorPrincipal}>
      <Header />
      <main className={G.contenedorMain}>
        <Principal />
        <Proyectos />
        <SobreMi />
        <Contactame />
      </main>
      <Footer />
    </div>
  )
}
