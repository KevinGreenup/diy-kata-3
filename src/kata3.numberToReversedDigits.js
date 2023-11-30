const numberToReversedDigits = (number) => {
    return number.toString().split('').reverse().map(num => Number(num));
};

module.exports = numberToReversedDigits;
