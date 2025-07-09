// TODO: Logic will check liturgical season first then day of the week

//The cycle of the mysteries follows the rhythm of the liturgical year observed by the Catholic Church. During Ordinary time, what day we pray the Rosary is as follows: 
// Monday: The Joyful Mysteries of the Rosary
// Tuesday: The Sorrowful Mysteries of the Rosary
// Wednesday: The Glorious Mysteries of the Rosary
// Thursday: The Luminous Mysteries of the Rosary
// Friday: The Sorrowful Mysteries of the Rosary
// Saturday: The Joyful Mysteries of the Rosary
// Sunday: The Glorious Mysteries of the Rosary
// These prayers beautifully accompany the various seasons within the Church year. Therefore we adjust slightly during the seasons of Christmas and Lent.

// In the Christmas season, the Joyful Mysteries are prayed on Sundays.

// During the season of Lent, the Sorrowful Mysteries are prayed on Sundays.

const getDayOfWeek = (date) => {
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return daysOfWeek[date.getDay()];
}

// Define the mysteries mapping for each day
const MYSTERIES_BY_DAY = {
    monday: 'joyful',
    tuesday: 'sorrowful',
    wednesday: 'glorious',
    thursday: 'luminous',
    friday: 'sorrowful',
    saturday: 'joyful',
    sunday: 'glorious'
};

const fetchTodaysMysteries = async (updateMysteries) => {
    try {
        const response = await fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const today = getDayOfWeek(new Date());
        
        // Handle special seasons
        if (data.season === 'lent' && today === 'sunday') {
            updateMysteries('sorrowful');
            return;
        }
        
        if ((data.season === 'advent' || data.season === 'christmas') && today === 'sunday') {
            updateMysteries('joyful');
            return;
        }
        
        // Default case - use the regular mapping
        const mysteries = MYSTERIES_BY_DAY[today] || 'invalid day';
        updateMysteries(mysteries);
        
    } catch (error) {
        console.error('Error fetching data:', error);
        updateMysteries('error');
    }
};

export default fetchTodaysMysteries;