import annunciationImage from '../assets/annunciation.jpg'
import luminousImage from '../assets/luminous.jpg'
import agonyImage from '../assets/gethsemane.jpg'
import visitationImage from '../assets/visitation.jpg'
import nativityImage from '../assets/nativity.jpg'
import presentationImage from '../assets/presentation.jpg'
import findingImage from '../assets/finding.jpg'
import gloriousImage from '../assets/resurrection.jpg'
import canaImage from '../assets/cana.jpg'
import proclamationImage from '../assets/proclamation.jpg'
import transfigurationImage from '../assets/transfiguration.jpg'
import eucharistImage from '../assets/eucharist.jpg'

const mysteryData = [
    {
        category: "joyful",
        image: annunciationImage,
        mysteries: [
            {
                name: "The Annunciation",
                image: annunciationImage,
                scripture: "scripture passage"
            },
            {
                name: "The Visitation",
                image: visitationImage,
                scripture: "scripture passage"
            },
            {
                name: "The Nativity",
                image: nativityImage,
                scripture: "scripture passage"
            },
            {
                name: "The Presentation in the Temple",
                image: presentationImage,
                scripture: "scripture passage"
            },
            {
                name: "The Finding in the Temple",
                image: findingImage,
                scripture: "scripture passage"
            },
        ]
    },
    {
        category: "luminous",
        image: luminousImage,
        mysteries: [
            {
                name: "The Baptism in the Jordan",
                image: luminousImage,
                scripture: "scripture passage"
            },
            {
                name: "The Wedding Feast at Cana",
                image: canaImage,
                scripture: "scripture passage"
            },
            {
                name: "The Proclamation of the Kingdom",
                image: proclamationImage,
                scripture: "scripture passage"
            },
            {
                name: "The Transfiguration",
                image: transfigurationImage,
                scripture: "scripture passage"
            },
            {
                name: "The Institution of the Eucharist",
                image: eucharistImage,
                scripture: "scripture passage"
            },
        ]
    },
    {
        category: "sorrowful",
        image: agonyImage,
        mysteries: [
            {
                name: "The Agony in the Garden",
                image: agonyImage,
                scripture: "scripture passage"
            },
            {
                name: "The Scourging at the Pillar",
                image: agonyImage,
                scripture: "scripture passage"
            },
            {
                name: "The Crowning of Thorns",
                image: agonyImage,
                scripture: "scripture passage"
            },
            {
                name: "The Carrying of the Cross",
                image: agonyImage,
                scripture: "scripture passage"
            },
            {
                name: "The Crucifixion",
                image: agonyImage,
                scripture: "scripture passage"
            },
        ]
    },
    {
        category: "glorious",
        image: gloriousImage,
        mysteries: [
            {
                name: "The Resurrection",
                image: gloriousImage,
                scripture: "scripture passage"
            },
            {
                name: "The Ascension",
                image: gloriousImage,
                scripture: "scripture passage"
            },
            {
                name: "The Descent of the Holy Spirit",
                image: gloriousImage,
                scripture: "scripture passage"
            },
            {
                name: "The Assumption",
                image: gloriousImage,
                scripture: "scripture passage"
            },
            {
                name: "The Coronation of Mary",
                image: gloriousImage,
                scripture: "scripture passage"
            },
        ]
    },

];
  
  export default mysteryData;