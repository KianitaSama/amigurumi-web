export const accentClasses = [
    'from-rosado-principal/20',
    'from-verde-sage/20',
    'from-lavanda-profundo/20',
    'from-verde-bosque/20',
    'from-rosado-oscuro/20',
    'from-beige-calido/30',
    'from-rosado-principal/30',
    'from-lavanda-profundo/30'
];

const amigurumiPosts = [
    {
        id: 'amigurumi-lumpy',
        title: 'Lumpy Amigurumi',
        imageFile: 'Efelante.png',
        description: 'Orejas de gran apertura tejidas en espiral con hilaza de algodón de 4 hebras.',
        fullDescription:
            'Lumpy se trabajó con una técnica de aumentos progresivos para evitar marcas de "esquinas" en el cuerpo. Se utilizó algodón premium (tipo Fingering) y un ganchillo de 2.25mm para lograr una trama cerrada que oculta totalmente el relleno de poliéster siliconado.',
        tags: ['#amigurumi', '#heffalump', '#estambre_algodon', '#punto_bajo', '#anillo_magico'],
        creator: 'Colectivo Bruma',
        createdAt: 'Hace 1 día',
        mood: 'Amistad pura',
        comments: [
            { id: 'lumpy-c1', author: 'Mielina', role: 'Colega de Crochet', text: '¡Esa hilaza lavanda es un sueño! Para la próxima, prueba la marca *Hobbii Rainbow 8/4*.', time: 'Hace 5 min' },
            { id: 'lumpy-c2', author: 'Téjota', role: 'Crítica de Hecho a Mano', text: 'Si quieres que las orejas se mantengan erguidas pero suaves, usa un ganchillo de acero de 2mm.', time: 'Hace 12 min' },
            { id: 'lumpy-c3', author: 'Lanitas', role: 'Entusiasta', text: '¿Cuántos gramos de hilaza usaste para las orejas?', time: 'Hace 1 hora' },
            { id: 'lumpy-c4', author: 'EcoTejido', role: 'Blogger', text: 'El color pastel es perfecto para un cuarto de bebé.', time: 'Hace 3 horas' },
            { id: 'lumpy-c5', author: 'GanchilloFan', role: 'Novato', text: '¡Me encanta! ¿Venderás el patrón pronto?', time: 'Hace 5 horas' }
        ]
    },
    {
        id: 'amigurumi-igor',
        title: 'Ígor Amigurumi ',
        imageFile: 'burro.png',
        description: 'Cuerpo de algodón peinado con disminuciones invisibles y acabado mate.',
        fullDescription:
            'Para Ígor se aplicó la técnica de "Wrong Side Out" para darle una textura más rústica al pelaje. Se usó estambre de algodón de grosor DK y una aguja lanera de punta roma para bordar las costuras decorativas que simulan remiendos.',
        tags: ['#amigurumi', '#eeyore', '#algodon_peinado', '#disminucion_invisible', '#tejido_circular'],
        creator: 'Tejedoría Nube',
        createdAt: 'Hace 3 días',
        mood: 'Tierra calma',
        comments: [
            { id: 'igor-c1', author: 'Mielina', role: 'Colega de Crochet', text: 'Para ese tono gris topo, el *Drops Muskat* es perfecto.', time: 'Hace 8 min' },
            { id: 'igor-c2', author: 'Téjota', role: 'Crítica de Hecho a Mano', text: 'Veo que usaste disminuciones invisibles, ¡bravo!', time: 'Hace 19 min' },
            { id: 'igor-c3', author: 'NudoCiego', role: 'Tejedor', text: 'Esa expresión de tristeza le quedó idéntica al original.', time: 'Hace 45 min' }
        ]
    },
    {
        id: 'amigurumi-conejo',
        title: 'Conejo Amigurumi ',
        imageFile: 'conejo.png',
        description: 'Estructura rígida en punto cruzado (X) usando algodón mercerizado brillante.',
        fullDescription:
            'Conejo fue diseñado con una base plana para sostenerse por sí solo. Se utilizó la técnica de punto bajo en forma de "X" para reducir el consumo de estambre y aumentar la rigidez.',
        tags: ['#amigurumi', '#rabbit', '#algodon_mercerizado', '#punto_cruzado', '#hecho_a_mano'],
        creator: 'Estudio Lirio',
        createdAt: 'Hace 1 semana',
        mood: 'Huerto ordenado',
        comments: [
            { id: 'conejo-c1', author: 'Mielina', role: 'Colega de Crochet', text: 'El punto en X hace que se vea súper pro. ¡Clover Amour de 2.5mm es la clave!', time: 'Hace 11 min' },
            { id: 'conejo-c2', author: 'Téjota', role: 'Crítica de Hecho a Mano', text: '¡Qué limpieza! El algodón *Circulo Amigurumi* le daría ese mismo brillo.', time: 'Hace 26 min' },
            { id: 'conejo-c3', author: 'ArtCrochet', role: 'Diseñadora', text: 'La forma de la nariz está muy bien lograda.', time: 'Hace 1 hora' },
            { id: 'conejo-c4', author: 'BioFiber', role: 'Artesano', text: '¿Probaste tejerlo con lino? Le daría un toque muy rústico.', time: 'Hace 2 horas' }
        ]
    },
    {
        id: 'amigurumi-rito',
        title: 'Rito Amigurumi',
        imageFile: 'rito.png',
        description: 'Micro-amigurumi con cambios de color de 1 solo punto y bordado miniatura.',
        fullDescription:
            'Rito es un reto de escala. Tejido con hilo de bordar de 6 hebras y un micro ganchillo de 1.25mm.',
        tags: ['#amigurumi', '#roo', '#hilaza_algodon', '#punto_enano', '#cambio_de_color'],
        creator: 'Rito Studio',
        createdAt: 'Hace 4 días',
        mood: 'Salto alegre',
        comments: [
            { id: 'rito-c1', author: 'Mielina', role: 'Colega de Crochet', text: '¡Esos cambios de color están quirúrgicos! ¿Probaste el hilo *DMC Natura*?', time: 'Hace 6 min' },
            { id: 'rito-c2', author: 'MiniMaker', role: 'Miniaturista', text: '¡Mis manos duelen de solo verlo! Gran trabajo de paciencia.', time: 'Hace 20 min' }
        ]
    },
    {
        id: 'amigurumi-pooh',
        title: 'Winnie Pooh Amigurumi ',
        imageFile: 'Poo.png',
        description: 'Textura de peluche ultra-suave en estambre chenille de 6mm.',
        fullDescription:
            'Pooh fue creado para ser "huggable" (abrazable). Se utilizó estambre tipo Velvet/Chenille (Super Bulky) y un ganchillo de 5mm.',
        tags: ['#amigurumi', '#pooh', '#estambre_chenille', '#punto_bomba', '#crochet_love'],
        creator: 'Punto Poo',
        createdAt: 'Hace 2 semanas',
        mood: 'Dulzura de miel',
        comments: [
            { id: 'pooh-c1', author: 'Mielina', role: 'Colega de Crochet', text: 'Para que no se deshilache el chenille, quema la punta o usa dos cadenas.', time: 'Hace 9 min' },
            { id: 'pooh-c2', author: 'Téjota', role: 'Crítica de Hecho a Mano', text: 'El estambre *Bernat Blanket* tiene el amarillo oficial.', time: 'Hace 30 min' },
            { id: 'pooh-c3', author: 'OsoMeloso', role: 'Fan', text: 'Se ve tan suave que dan ganas de abrazarlo.', time: 'Hace 1 hora' },
            { id: 'pooh-c4', author: 'PuntosYMas', role: 'Tejedora', text: '¿Cómo logras que no se vea el relleno con un gancho tan grande?', time: 'Hace 4 horas' },
            { id: 'pooh-c5', author: 'HoneyLover', role: 'Coleccionista', text: '¡El mejor Pooh que he visto en este estilo!', time: 'Hace 1 día' },
            { id: 'pooh-c6', author: 'AmiguiWorld', role: 'Tienda', text: '¿Aceptas pedidos personalizados?', time: 'Hace 2 días' }
        ]
    },
    {
        id: 'amigurumi-cangu',
        title: ' Amigurumi de Ternurín',
        imageFile: 'co.png',
        description: 'Ternurín de conejo con puntos puffed y estambre Velvet/Chenille.',
        fullDescription:
            'Este conejo "Ternurín" usa puntos puffed de 5 lazadas para crear las mejillas y el pecho.',
        tags: ['#amigurumi', '#ternurin', '#estambre_chenille', '#punto_puffed', '#conejo_crochet'],
        creator: 'Costura Colectiva',
        createdAt: 'Hace 5 días',
        mood: 'Abrazo de nube',
        comments: [
            { id: 'cangu-c1', author: 'Mielina', role: 'Colega de Crochet', text: '¡Qué buena idea usar chenille! El *Chenille Home Slim* queda genial.', time: 'Hace 3 min' },
            { id: 'cangu-c2', author: 'Téjota', role: 'Crítica de Hecho a Mano', text: 'Para los ternurines, recomiendo usar ojos de seguridad con arandela de metal.', time: 'Hace 18 min' },
            { id: 'cangu-c3', author: 'SweetStitch', role: 'Creadora', text: '¡Esas mejillas puff son todo!', time: 'Hace 2 horas' },
            { id: 'cangu-c4', author: 'FluffyArt', role: 'Entusiasta', text: '¡Parece un malvavisco!', time: 'Hace 5 horas' }
        ]
    },
    {
        id: 'amigurumi-piglet',
        title: 'Piglet Amigurumi ',
        imageFile: 'pig.png',
        description: 'Detalles de punto Pop-corn en algodón egipcio de fibra larga.',
        fullDescription:
            'Piglet se destaca por su gradiente de rosas. Se trabajó con algodón egipcio mercerizado y ganchillo de 1.75mm.',
        tags: ['#amigurumi', '#piglet', '#algodon_fino', '#punto_popcorn', '#hecho_a_mano'],
        creator: 'Osito Creativo',
        createdAt: 'Hace 6 horas',
        mood: 'Corazón rosa',
        comments: [
            { id: 'piglet-c1', author: 'Mielina', role: 'Colega de Crochet', text: '¡Esos pop-corns! El *Schachenmayr Catania* tono 246 es el suyo.', time: 'Hace 7 min' },
            { id: 'piglet-c2', author: 'PinkyLoops', role: 'Tejedora', text: 'La estructura de los limpiapipas le da mucha vida a las poses.', time: 'Hace 40 min' },
            { id: 'piglet-c3', author: 'TinyHands', role: 'MicroCrochet', text: '¿Qué número de aguja usaste para el bordado de la cara?', time: 'Hace 1 hora' }
        ]
    },
    {
        id: 'amigurumi-tigger',
        title: 'Tigger Amigurumi ',
        imageFile: 'tig.png',
        description: 'Técnica de Tapestry Crochet para integrar rayas negras sin relieves internos.',
        fullDescription:
            'Tigger fue un desafío de ingeniería. Se usó la técnica Tapestry y resorte de cola con FPDC.',
        tags: ['#amigurumi', '#tigger', '#estambre_algodon', '#jacquard_crochet', '#puntos_altos'],
        creator: 'Tigre Onírico',
        createdAt: 'Hace 8 horas',
        mood: 'Rebote infinito',
        comments: [
            { id: 'tigger-c1', author: 'Mielina', role: 'Colega de Crochet', text: '¡Hacer Tapestry con algodón es de maestros!', time: 'Hace 10 min' },
            { id: 'tigger-c2', author: 'Téjota', role: 'Crítica de Hecho a Mano', text: 'El estambre *Lily Sugar n Cream* es muy resistente.', time: 'Hace 27 min' },
            { id: 'tigger-c3', author: 'JumpMaster', role: 'Fan', text: '¡La cola tiene una forma increíble!', time: 'Hace 1 hora' },
            { id: 'tigger-c4', author: 'StripesFan', role: 'Tejedor', text: 'Llevar el hilo negro por dentro es una pesadilla, ¡te quedó impecable!', time: 'Hace 2 horas' },
            { id: 'tigger-c5', author: 'BouncyBoi', role: 'Coleccionista', text: '¡Hoo-hoo-hoo-hoo! Capturaste su esencia perfectamente.', time: 'Hace 3 horas' }
        ]
    }
];

export const pins = [
    {
        id: 'p1',
        type: 'profile'
    },
    ...amigurumiPosts.map((post, index) => ({
        id: post.id,
        title: post.title,
        description: post.description,
        fullDescription: post.fullDescription,
        image: `/src/assets/images/Amigurumis/${post.imageFile}`,
        accent: accentClasses[index % accentClasses.length],
        tags: post.tags,
        creator: post.creator,
        createdAt: post.createdAt,
        mood: post.mood,
        gallery: [
            {
                id: `${post.id}-hero`,
                url: `/src/assets/images/Amigurumis/${post.imageFile}`,
                label: `${post.title} principal`
            }
        ],
        comments: post.comments
    }))
];