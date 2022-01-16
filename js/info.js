function upCarousel(){

    let biselado = [
        {
            image: '../assets/images/biselados/A.jpeg',
            alt: 'espejo-biselado-imagen1',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/biselados/B.jpeg',
            alt: 'espejo-biselado-imagen2',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/biselados/C.jpeg',
            alt: 'espejo-biselado-imagen3',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/biselados/D.jpeg',
            alt: 'espejo-biselado-imagen4',
            subtitle: null,
            paragraph: null,
        }
    ]

    let pulido = [
        {
            image: '../assets/images/pulidos/A.jpeg',
            alt: 'espejo-pulido-imagen1',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/pulidos/B.jpeg',
            alt: 'espejo-pulido-imagen2',
            subtitle: null,
            paragraph: null,
        }
    ]

    let corte = [
        {
            image: '../assets/images/cortes/A.jpeg',
            alt: 'espejo-cortes-imagen1',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/cortes/B.jpeg',
            alt: 'espejo-cortes-imagen2',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/cortes/C.jpeg',
            alt: 'espejo-cortes-imagen3',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/cortes/D.jpeg',
            alt: 'espejo-cortes-imagen4',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/cortes/E.jpeg',
            alt: 'espejo-cortes-imagen5',
            subtitle: null,
            paragraph: null,
        }
    ]

    let liso = [
        {
            image: '../assets/images/liso/A.jpeg',
            alt: 'espejo-liso-imagen1',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/liso/B.jpeg',
            alt: 'espejo-liso-imagen2',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/liso/C.jpeg',
            alt: 'espejo-liso-imagen3',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/liso/D.jpeg',
            alt: 'espejo-liso-imagen4',
            subtitle: null,
            paragraph: null,
        }
    ]

    let envejecido = [
        {
            image: '../assets/images/envejecidos/A.jpeg',
            alt: 'espejo-envejecidos-imagen1',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/envejecidos/B.jpeg',
            alt: 'espejo-envejecidos-imagen2',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/envejecidos/C.jpeg',
            alt: 'espejo-envejecidos-imagen3',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/envejecidos/D.jpeg',
            alt: 'espejo-envejecidos-imagen4',
            subtitle: null,
            paragraph: null,
        }
    ]

    let muro = [
        {
            image: '../assets/images/muros/A.jpeg',
            alt: 'espejo-muros-imagen1',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/muros/B.jpeg',
            alt: 'espejo-muros-imagen2',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/muros/C.jpeg',
            alt: 'espejo-muros-imagen3',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/muros/D.jpeg',
            alt: 'espejo-muros-imagen4',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/muros/E.jpeg',
            alt: 'espejo-muros-imagen5',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/muros/F.jpeg',
            alt: 'espejo-muros-imagen6',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/muros/G.jpeg',
            alt: 'espejo-muros-imagen7',
            subtitle: null,
            paragraph: null,
        }
    ]

    let puntas = [
        {
            image: '../assets/images/puntas/A.jpeg',
            alt: 'espejo-puntas-imagen1',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/puntas/B.jpeg',
            alt: 'espejo-puntas-imagen2',
            subtitle: null,
            paragraph: null,
        }
    ]

    let ventanas = [
        {
            image: '../assets/images/ventanas/A.jpeg',
            alt: 'espejo-ventanas-imagen1',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/ventanas/B.jpeg',
            alt: 'espejo-ventanas-imagen2',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/ventanas/C.jpeg',
            alt: 'espejo-ventanas-imagen3',
            subtitle: null,
            paragraph: null,
        },
        {
            image: '../assets/images/ventanas/D.jpeg',
            alt: 'espejo-ventanas-imagen4',
            subtitle: null,
            paragraph: null,
        }
    ]

    createCarousel('bordes-biselado', biselado, 'icon')
    createCarousel('bordes-pulidos', pulido, 'icon')
    createCarousel('diseno-cortes', corte, 'icon')
    createCarousel('diseno-liso', liso, 'icon')
    createCarousel('envejecido', envejecido, 'icon')
    createCarousel('muro-espejado', muro, 'icon')
    createCarousel('puntas', puntas, 'icon')
    createCarousel('ventana', ventanas, 'icon')
}