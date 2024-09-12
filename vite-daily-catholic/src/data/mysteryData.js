import annunciationImage from '../assets/annunciation.jpg'
import luminousImage from '../assets/luminous.jpg'
import agonyImage from '../assets/gethsemane.jpg'
import gloriousImage from '../assets/resurrection.jpg'

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
                image: annunciationImage,
                scripture: "scripture passage"
            },
            {
                name: "The Nativity",
                image: annunciationImage,
                scripture: "scripture passage"
            },
            {
                name: "The Presentation in the Temple",
                image: annunciationImage,
                scripture: "scripture passage"
            },
            {
                name: "The Finding in the Temple",
                image: annunciationImage,
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
                image: luminousImage,
                scripture: "scripture passage"
            },
            {
                name: "The Proclamation of the Kingdom",
                image: luminousImage,
                scripture: "scripture passage"
            },
            {
                name: "The Transfiguration",
                image: luminousImage,
                scripture: "scripture passage"
            },
            {
                name: "The Institution of the Eucharist",
                image: luminousImage,
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