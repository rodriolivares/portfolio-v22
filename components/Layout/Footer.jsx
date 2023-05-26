import F from '../../styles/Layout/Footer.module.css'

const Footer = () => {
  return (
    <footer className={F.contenedorFooter}>
      <p className={F.footer}>Llegaste hasta el final. ¡Muchas gracias por tu tiempo!</p>
      <p className={F.footer}>2022</p>
    </footer>
  )
}

export default Footer