// Function to calculate Easter Sunday for a given year
const getEasterSunday = (year) => {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    
    return new Date(year, month - 1, day);
}

// Function to get the liturgical season for a given date
const getLiturgicalSeason = (date = new Date()) => {
    const year = date.getFullYear();
    const easter = getEasterSunday(year);
    const ashWednesday = new Date(easter);
    ashWednesday.setDate(easter.getDate() - 46); // 46 days before Easter (40 days of Lent + Sundays)
    
    const pentecost = new Date(easter);
    pentecost.setDate(easter.getDate() + 49); // 49 days after Easter (Pentecost Sunday)
    
    // First Sunday of Advent is the Sunday closest to November 30th
    let firstSundayOfAdvent = new Date(year, 10, 30); // November 30th
    firstSundayOfAdvent.setDate(30 - firstSundayOfAdvent.getDay());
    
    // Christmas season starts on Christmas Eve and ends on the Sunday after Epiphany
    const christmasStart = new Date(year, 11, 24); // December 24th
    const epiphany = new Date(year, 0, 6); // January 6th
    const baptismOfTheLord = new Date(epiphany);
    // Find the Sunday after Epiphany (Baptism of the Lord)
    while (baptismOfTheLord.getDay() !== 0) {
        baptismOfTheLord.setDate(baptismOfTheLord.getDate() + 1);
    }
    
    // Check the season
    if (date >= ashWednesday && date < easter) {
        return 'lent';
    } else if (date >= easter && date < pentecost) {
        return 'easter';
    } else if (date >= firstSundayOfAdvent || date < christmasStart) {
        return 'advent';
    } else if (date >= christmasStart || date <= baptismOfTheLord) {
        return 'christmas';
    } else {
        return 'ordinary';
    }
}

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

const fetchTodaysMysteries = (updateMysteries) => {
    try {
        const today = new Date();
        const season = getLiturgicalSeason(today);
        const dayOfWeek = getDayOfWeek(today);
        
        // Handle special seasons
        if (season === 'lent' && dayOfWeek === 'sunday') {
            updateMysteries('sorrowful');
            return;
        }
        
        if ((season === 'advent' || season === 'christmas') && dayOfWeek === 'sunday') {
            updateMysteries('joyful');
            return;
        }
        
        // Default case - use the regular mapping
        const mysteries = MYSTERIES_BY_DAY[dayOfWeek] || 'invalid day';
        updateMysteries(mysteries);
        
    } catch (error) {
        console.error('Error determining mysteries:', error);
        updateMysteries('error');
    }
};

export default fetchTodaysMysteries;