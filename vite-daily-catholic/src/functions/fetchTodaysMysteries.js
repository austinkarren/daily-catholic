// TODO: Logic wil check liturgical season first then day of the week

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
    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    return daysOfWeek[date.getDay()];
}

const fetchTodaysMysteries = async () => {
    try {
        const response = await fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const date = new Date();
        const today = getDayOfWeek(date).toLowerCase();

        let mysteries;
        if (data.season === 'ordinary') {
            switch (today) {
                case 'monday':
                case 'saturday':
                    mysteries = 'joyful';
                    break;
                case 'tuesday':
                case 'friday':
                    mysteries = 'sorrowful';
                    break;
                case 'wednesday':
                case 'sunday':
                    mysteries = 'glorious';
                    break;
                case 'thursday':
                    mysteries = 'luminous';
                    break;
                default:
                    mysteries = 'invalid day';
                    break;
            }
        } else {
            mysteries = 'season not ordinary';
        }

        return mysteries;
    } catch (error) {
        console.error('Error fetching data:', error);
        return 'error';
    }
};

export default fetchTodaysMysteries;


// Get the season
//If ordinary time:
//switch (day)
//case 'monday'
//return 'joyfyul'
//break
