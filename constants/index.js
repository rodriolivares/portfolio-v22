export const FORMACION = [
   {id: 1, nombre: 'Ingeniería en Sistemas de Información',fecha: '2016 - Cursando', institucion: 'UTN - FRM'},
   {id: 2, nombre: 'Bachillerato en Economía y Gestión de organizaciones', fecha: '2011 - 2015', institucion: 'IMEI - Maipú, MZA'}
]
export const CURSOS = [
   {id: 1, nombre: 'React - La Guía Completa: Hooks Context Redux MERN + 15 APPS', descripcion: 'Instructor: Juan Pablo De La Torre. Duración: 65 Horas', fecha: 'Marzo 2022', institucion: 'Udemy Academy'},
   {id: 2, nombre: 'English Certificate 66/100 (C1 Advanced) - Reading And Listening', descripcion: 'https://efset.org/cert/czVqqv', fecha: 'Marzo 2022', institucion: 'EF SET '},
   {id: 3, nombre: 'Certificado de nivel de Inglés avanzado', descripcion: 'Nivel suficiente para Cambridge B2 First Certificate', fecha: '2010 - 2016', institucion: 'ECII Institute'}
]
export const TECNOLOGIAS = [
   {id: 1, nombre: 'HTML5', src: 'tecnologias/html5.svg'},
   {id: 2, nombre: 'CSS3', src: 'tecnologias/css3.svg'},
   {id: 3, nombre: 'Javascript', src: 'tecnologias/js.svg'},
   {id: 4, nombre: 'React', src: 'tecnologias/react.svg'},
   {id: 5, nombre: 'React Router', src: 'tecnologias/react_router_dom.svg'},
   {id: 6, nombre: 'Next.js', src: 'tecnologias/next_js.svg'},
   {id: 7, nombre: 'Node.js', src: 'tecnologias/nodejs.svg'},
   {id: 8, nombre: 'MongoDB', src: 'tecnologias/mongodb.svg'},
   {id: 9, nombre: 'Git', src: 'tecnologias/github.svg'}
]
export const PROYECTOS = [
   {
      id: 0,
      nombre: 'Recetas de Bebidas',
      descripcion: 'Busca la receta de la bebida que quieras o elige de las que te ofrecemos usando los filtros y agregalas a tu lista de favoritas. Si no conoces alguno de los ingredientes, al final del sitio puedes buscarlos tambien para ver mas informacion sobre estos.',
      funcionalidades: [
         'SSR de ingredientes, categorias y vasos a mostrar',
         'Peticiones a API de TheCocktailDB',
         'Input con Debounce para hacer peticiones al momento',
         'Agregar o eliminar bebidas a una lista guardada en LS',
      ],
      tecnologias: [
         'Next.js',
         'Context API',
         'CSS Modules',
         'Local Storage'
      ],
      url: 'https://drink-recipes.vercel.app/',
      repositorio: 'https://github.com/rodriolivares/drinks'
   },
   {
      id: 1,
      nombre: 'Menú de Platos de un Hotel',
      descripcion: 'Agrega 4 Platos a tu menú. Puedes seleccionar Tipo de dieta alimenticia, Categoría de plato y País de origen del Plato. Tu menú debe incluir 2 platos Veganos y puedes ver información de cada plato y del menú completo para cambiarlo a tu gusto.',
      funcionalidades: [
         'Peticiones a API de Spoonacular',
         'CRUD de platos a pedir',
         'Formulario con validaciones',
      ],
      tecnologias: [
         'Context API',
         'React Router Dom',
         'Bootstrap',
         'Custom Hooks'
      ],
      url: 'https://playful-kelpie-32aa5d.netlify.app',
      repositorio: 'https://github.com/rodriolivares/menu-hotel'
   },
   {
      id: 2,
      nombre: 'Do Something!',
      descripcion: 'Regístrate e Inicia sesión para ver las diferentes tareas. Puedes pedirlas por categoría o por cantidad de participantes. Por ultimo, agrega las actividades que te gusten al listado de actividades a completar',
      funcionalidades: [
         'Autenticación de Usuario',
         'Peticiones a BoredAPI',
         'Almacenamiento en LocalStorage'
      ],
      tecnologias: [
         'React',
         'Context API',
         'Tailwind CSS'
      ],
      url: 'https://rodriolivares.github.io/do-something/',
      repositorio: 'https://github.com/rodriolivares/do-something-challenge'
   },
   {
      id: 3,
      nombre: 'Sitio de Proyectos y Tareas',
      descripcion: 'Regístrate, inicia sesión para crear proyectos y asignarles tareas. Puedes marcar y desmarcar tareas finalizadas así como agregar como colaborador a otros usuarios a tus proyectos.',
      funcionalidades: [
         'Autenticación con JWT',
         'Confirmación de cuenta nueva a través de envío de correo',
         'CRUD de proyectos y de sus tareas',
         'Cambios en proyectos y tareas con impacto en tiempo real para los demás usuarios',
      ],
      tecnologias: [
         'React',
         'React Router DOM',
         'Headless UI',
         'Node.js',
         'Express js',
         'MongoDB',
         'Socket.Io'
      ],
      repositorio: 'https://github.com/rodriolivares/UpTask_MERN_frontend'
   },
   {
      id: 4,
      nombre: 'GuitarLA',
      descripcion: 'Ecommerce de venta de guitarras. Muestra contenido obtenido de una API de Strapi. Selecciona una cantidad de guitarras a comprar y agregara al carrito, para luego ver todas las guitarras a comprar y editar el carrito.',
      funcionalidades: [
         'Routing Dinámico de Next js',
         'API creada con Strapi',
         'Carrito de Compras'
      ],
      tecnologias: [
         'Next.js',
         'CSS Modules',
         'Strapi',
         'Cloudinary'
      ],
      repositorio: 'asdf'
   },
]