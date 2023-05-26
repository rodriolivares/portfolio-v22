import Image from "next/image"
import Link from "next/link"
import React from 'react'
import S from '../../../styles/Layout/Header/ResumeButton.module.css'

const ResumeButton = () => {
   
   return (
      <Link legacyBehavior href="cv.pdf" download="CV Rodrigo Olivares">
         <a target="_blank" className={S.descargar}>
            <Image 
               src="/download.svg"
               width={20}
               height={20}
               alt="Imagen Boton Descargar"
            />
            Descarga mi CV
         </a>
      </Link>
   )
}

export default ResumeButton