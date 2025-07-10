// Function to calculate Easter Sunday for a given year
const getEasterSunday = (year) => {
    // Calculate the Golden Number - position in the 19-year Metonic cycle
    const goldenNumber = year % 19;
    // Calculate the century
    const century = Math.floor(year / 100);
    // Years since the beginning of the century
    const yearsInCentury = year % 100;
    // Number of leap years to account for
    const leapYearCorrection = Math.floor(century / 4);
    // Non-leap century years adjustment
    const centuryMod4 = century % 4;
    // Special correction for the Gregorian calendar
    const gregorianAdjustment = Math.floor((century + 8) / 25);
    // Another adjustment for the Gregorian calendar
    const gregorianOffset = Math.floor((century - gregorianAdjustment + 1) / 3);
    // Calculate the "epact" (the age of the moon on January 1)
    const epact = (19 * goldenNumber + century - leapYearCorrection - gregorianOffset + 15) % 30;
    // Number of leap days (accounting for the solar year)
    const solarCorrection = Math.floor(yearsInCentury / 4);
    // Leap year adjustment
    const leapYearOffset = yearsInCentury % 4;
    // Calculate the Sunday correction
    const sundayCorrection = (32 + 2 * centuryMod4 + 2 * solarCorrection - epact - leapYearOffset) % 7;
    // Final calculation for the month and day
    const monthCalculation = Math.floor((epact + sundayCorrection - 7 * Math.floor((goldenNumber + 11 * epact + 22 * sundayCorrection) / 451) + 114) / 31);
    const day = ((epact + sundayCorrection - 7 * Math.floor((goldenNumber + 11 * epact + 22 * sundayCorrection) / 451) + 114) % 31) + 1;

    return new Date(year, monthCalculation - 1, day);
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