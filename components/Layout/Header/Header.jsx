import S from '../../../styles/Layout/Header/Header.module.css'
import BotonNavegacion from "./EnlaceNavegacion"
import Links from "./Links"
import MobileNav from "./MobileNav"
import ResumeButton from "./ResumeButton"

const Header = () => {
   return (
      <nav className={S.nav}>
         <BotonNavegacion
            id="1" 
            href="#inicio"
            className={S.logo}
            texto="R O"
         />
         <div className={S.desktopNav}>
            <Links />
            <ResumeButton />
         </div>
         <div className={S.mobileNav}>
            <MobileNav />
         </div>
      </nav>
   )
}

export default Header