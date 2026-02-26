export const pins = [
  {
    id: 'p1',
    type: 'profile'
  },
  {
    id: '1',
    title: 'Jardín de amigurumis',
    description: 'Texturas y granulados suaves para tus patrones más dulces.',
    fullDescription:
      'Una colección etérea inspirada en jardines en calma. El hilo se tiñe en degradados y se trabaja con puntos redondos para capturar la forma de pétalos y hojas.',
    image: '/src/assets/images/f1.png',
    accent: 'from-rosado-principal/20',
    tags: ['#amigurumi', '#soft'],
    creator: 'Colectivo Zorrito',
    createdAt: 'Hace 2 días',
    mood: 'Tonos pastel con brumas de luz',
    gallery: [
      { id: '1-hero', url: '/src/assets/images/f1.png', label: 'Vista frontal' },
      { id: '1-detail', url: '/src/assets/images/f2.png', label: 'Detalle de textura' }
    ],
    comments: [
      {
        id: 'c-1-1',
        author: 'Miku',
        role: 'Aliada de punto',
        text: 'El brillo del hilo rosado es tan sutil, se ve prácticamente como terciopelo.',
        time: 'Hace 5 min',
        imageLabel: 'Vista frontal'
      },
      {
        id: 'c-1-2',
        author: 'Luna',
        role: 'Diseñadora',
        text: 'Me encanta que juegues con transparencias, rescatas muy bien la luz natural.',
        time: 'Hace 15 min',
        imageLabel: 'Detalle de textura'
      }
    ]
  },
  {
    id: '2',
    title: 'Texturas guardadas',
    description: 'Los favoritos de la comunidad, con hilos naturales y dorados.',
    fullDescription:
      'Una biblioteca privada de muestras, cada pieza trae un ensayo distinto sobre densidades y degradados dorados. Ideal para crear colecciones cápsula.',
    image: '/src/assets/images/f2.png',
    accent: 'from-verde-sage/20',
    tags: ['#natural', '#crochet'],
    creator: 'Taller Manta',
    createdAt: 'Hace 6 días',
    mood: 'Texturas rústicas con destellos metálicos',
    gallery: [
      { id: '2-hero', url: '/src/assets/images/f2.png', label: 'Pieza principal' },
      { id: '2-detail', url: '/src/assets/images/f3.png', label: 'Hilos dorados' }
    ],
    comments: [
      {
        id: 'c-2-1',
        author: 'Iris',
        role: 'Curadora',
        text: 'Qué gusto ver cómo mezclas fibras recicladas con toques de bronce, la coherencia es impecable.',
        time: 'Ayer',
        imageLabel: 'Pieza principal'
      },
      {
        id: 'c-2-2',
        author: 'Sofi',
        role: 'Tejedora',
        text: 'Anoté la combinación de puntadas que usaste, la intención se percibe con claridad.',
        time: 'Hace 8 horas',
        imageLabel: 'Hilos dorados'
      }
    ]
  },
  {
    id: '3',
    title: 'Calendario 2024',
    description: 'Planifica tus próximas publicaciones y colabora.',
    fullDescription:
      'Un calendario ilustrado con amigurumis para cada estación. Los bolsillos y etiquetas permiten anotar ideas, colaboraciones y retos semanales.',
    image: '/src/assets/images/f3.png',
    accent: 'from-lavanda-profundo/20',
    tags: ['#planner', '#hechoamano'],
    creator: 'Manos de Lluvia',
    createdAt: 'Hace 10 días',
    mood: 'Pastel violeta con barnices dorados',
    gallery: [
      { id: '3-hero', url: '/src/assets/images/f3.png', label: 'Lámina principal' },
      { id: '3-detail', url: '/src/assets/images/f4.png', label: 'Anotaciones' }
    ],
    comments: [
      {
        id: 'c-3-1',
        author: 'Violeta',
        role: 'Coordinadora',
        text: 'Lo guardé para la siguiente colaboración, la estética funciona perfecto con nuestro mood.',
        time: 'Hace 2 días',
        imageLabel: 'Lámina principal'
      },
      {
        id: 'c-3-2',
        author: 'Nadia',
        role: 'Editorial',
        text: '¿Cómo haces para mantener tan precisas las proporciones en las etiquetas?',
        time: 'Hace 3 horas',
        imageLabel: 'Anotaciones'
      }
    ]
  },
  {
    id: '4',
    title: 'Moodboard Otoñal',
    description: 'Paleta de colores tierra para la nueva colección.',
    fullDescription:
      'Una composición visual que combina tonos terracota, verde bosque y beige. Un collage de materiales, degradados y bocetos para inspirar las próximas texturas.',
    image: '/src/assets/images/f4.png',
    accent: 'from-verde-bosque/20',
    tags: ['#autumn', '#yarn'],
    creator: 'Studio Sol',
    createdAt: 'Hace 3 semanas',
    mood: 'Paisajes nublados y luz cálida',
    gallery: [
      { id: '4-hero', url: '/src/assets/images/f4.png', label: 'Moodboard completo' },
      { id: '4-detail', url: '/src/assets/images/f5.png', label: 'Paleta detalle' }
    ],
    comments: [
      {
        id: 'c-4-1',
        author: 'Aran',
        role: 'Slow Maker',
        text: 'La composición me dio ganas de volver a bordar en hilo metálico.',
        time: 'Hace 5 días',
        imageLabel: 'Moodboard completo'
      },
      {
        id: 'c-4-2',
        author: 'Mar',
        role: 'Colega',
        text: 'El degradado funciona genial con tejidos de verano, se entiende perfectamente el tránsito de estaciones.',
        time: 'Hace 7 horas',
        imageLabel: 'Paleta detalle'
      }
    ]
  },
  {
    id: '5',
    title: 'Miniaturas Kawaii',
    description: 'Patrones gratuitos para crear mini animalitos.',
    fullDescription:
      'La serie más dulce: cada miniatura tiene un accesorio intercambiable. Ideal para intercambios y kits pequeños.',
    image: '/src/assets/images/f5.png',
    accent: 'from-rosado-oscuro/20',
    tags: ['#kawaii', '#diy'],
    creator: 'La Tejedora Feliz',
    createdAt: 'Hace 1 semana',
    mood: 'Juguetón con brillo suave',
    gallery: [
      { id: '5-hero', url: '/src/assets/images/f5.png', label: 'Serie completa' },
      { id: '5-detail', url: '/src/assets/images/f1.png', label: 'Detalles de orejas' }
    ],
    comments: [
      {
        id: 'c-5-1',
        author: 'Lina',
        role: 'Fan',
        text: '¡Los ojitos son perfectos! Ya tengo mi tanda lista.',
        time: 'Hace 10 min',
        imageLabel: 'Serie completa'
      },
      {
        id: 'c-5-2',
        author: 'Yari',
        role: 'Community Lead',
        text: 'Me encanta que compartas los patrones de forma gratuita. ¿Qué tal si hacemos un live?',
        time: 'Hace 1 hora',
        imageLabel: 'Detalles de orejas'
      }
    ]
  },
  {
    id: '6',
    title: 'Workshop Presencial',
    description: '¡Nos vemos este sábado para tejer juntas!',
    fullDescription:
      'Publicación de evento con testimonios, agenda y materiales. Ideal para que las alumnas reserven su lugar y compartan fotos del proceso.',
    image: '/src/assets/images/f1.png',
    accent: 'from-beige-calido/30',
    tags: ['#comunidad', '#tejer'],
    creator: 'Casa Nube',
    createdAt: 'Hace 4 días',
    mood: 'Calidez comunitaria',
    gallery: [
      { id: '6-hero', url: '/src/assets/images/f1.png', label: 'Detalle del taller' },
      { id: '6-detail', url: '/src/assets/images/f3.png', label: 'Agenda en vivo' }
    ],
    comments: [
      {
        id: 'c-6-1',
        author: 'Jo',
        role: 'Asistente',
        text: 'Ya aparté lugar, siento que no puedo perderme esa energía.',
        time: 'Hace 9 horas',
        imageLabel: 'Detalle del taller'
      },
      {
        id: 'c-6-2',
        author: 'Sara',
        role: 'Docente invitada',
        text: '¿Te gustaría que compartiera patrones descargables después del workshop?',
        time: 'Hace 2 horas',
        imageLabel: 'Agenda en vivo'
      }
    ]
  }
];
