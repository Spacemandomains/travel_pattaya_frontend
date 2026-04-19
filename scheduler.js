
const restaurants = {
    qulture: {
        name: "Qulture Lounge and Cafe Pattaya",
        location: "12.882788487424438, 100.88356037429853",
        hours: {breakfast: "8:00-11:00", lunch: "11:00-15:00", dinner: "17:00-22:00"},
        type: ["cafe", "restaurant"],
        bestFor: ["breakfast", "brunch", "coffee"]
    },
    kickin: {
        name: "Kickin Chicken",
        location: "12.913303,100.862253",
        hours: {lunch: "11:00-15:00", dinner: "17:00-22:30"},
        type: ["restaurant"],
        bestFor: ["lunch", "dinner", "casual"]
    },
    soul: {
        name: "Soul Bistro Restaurant & Lounge",
        location: "12.931282,100.887133",
        hours: {dinner: "17:00-22:00"},
        type: ["restaurant", "lounge"],
        bestFor: ["dinner", "date", "upscale"]
    },
    treeTime: {
        name: "Tree Time Cafe and Dispensary",
        location: "12.924101187386887, 100.8772112742994",
        hours: {quickBites: "10:30-24:00"},
        type: ["cafe", "dispensary"],
        bestFor: ["relaxation", "coffee", "snacks"]
    }
};

function getTimeBasedRecommendation() {
    const hour = new Date().getHours();
    const day = new Date().getDay();
    const isWeekend = day === 0 || day === 6;

    // Early morning (6-9)
    if (hour >= 6 && hour < 9) {
        return {
            type: "breakfast",
            suggestion: restaurants.qulture,
            reason: "Start your day with a great breakfast and coffee"
        };
    }

    // Late morning (9-11)
    if (hour >= 9 && hour < 11) {
        return {
            type: "brunch",
            suggestion: restaurants.qulture,
            reason: "Perfect time for a relaxed brunch"
        };
    }

    // Lunch (11-15)
    if (hour >= 11 && hour < 15) {
        return {
            type: "lunch",
            suggestion: isWeekend ? restaurants.soul : restaurants.kickin,
            reason: isWeekend ? "Weekend lunch special" : "Quick and delicious lunch"
        };
    }

    // Afternoon (15-17)
    if (hour >= 15 && hour < 17) {
        return {
            type: "afternoon",
            suggestion: restaurants.treeTime,
            reason: "Time to relax and recharge"
        };
    }

    // Dinner (17-22)
    if (hour >= 17 && hour < 22) {
        return {
            type: "dinner",
            suggestion: hour >= 19 ? restaurants.soul : restaurants.kickin,
            reason: hour >= 19 ? "Perfect for an evening dining experience" : "Casual dinner spot"
        };
    }

    // Late night (22-24)
    return {
        type: "lateNight",
        suggestion: restaurants.treeTime,
        reason: "Late night spot still open"
    };
}

function showNextDestination() {
    const recommendation = getTimeBasedRecommendation();
    return {
        name: recommendation.suggestion.name,
        location: recommendation.suggestion.location,
        type: recommendation.type,
        hours: Object.values(recommendation.suggestion.hours)[0],
        reason: recommendation.reason
    };
}

function generateDailySchedule() {
    // Keep existing implementation
    const availableForBreakfast = ["qulture"];
    const availableForLunch = ["qulture", "kickin"];
    const availableForDinner = ["qulture", "kickin", "soul"];
    const availableForQuickBites = ["treeTime"];

    return {
        breakfast: shuffleArray([...availableForBreakfast])[0],
        lunch: shuffleArray([...availableForLunch])[0],
        dinner: shuffleArray([...availableForDinner])[0],
        quickBites: shuffleArray([...availableForQuickBites])[0]
    };
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getTodaySchedule() {
    const schedule = generateDailySchedule();
    return {
        schedule,
        restaurants
    };
}

// Make functions globally available
window.getTodaySchedule = getTodaySchedule;
window.showNextDestination = showNextDestination;
