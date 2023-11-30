function helperReachDestination(distance, speed) {
    const timeInHours = distance / speed;
    const roundedTime = Math.ceil(timeInHours * 2) / 2; // Round up to the nearest 0.5 hours
    return `I should be there in ${roundedTime} hours.`;
}

const reachDestination = (distance, speed) => {
    return helperReachDestination(distance, speed)
};

module.exports = reachDestination;
