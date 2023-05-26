import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="description" content="Web Devloper portfolio y cv por Rodrigo Olivares. Front-end web developer." />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;400;700&display=swap" rel="stylesheet" />

        <meta property="og:title" content="Rodrigo Olivares - Web Developer, Portfolio, CV" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rodriolivares.vercel.app/" />
        <meta property="og:image" content="/meta_image.jpg" />
        <meta property="og:description" content="Web Devloper portfolio y cv por Rodrigo Olivares. Front-end web developer." />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Rodrigo Olivares - Web Developer, Portfolio, CV" />
        <meta name="twitter:url" content="https://rodriolivares.vercel.app/" />
        <meta name="twitter:site" content="@RodriOlivares02" />
        <meta name="twitter:description" content="Web Devloper portfolio y cv por Rodrigo Olivares. Front-end web developer." />
        <meta name="twitter:image" content="/meta_image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
