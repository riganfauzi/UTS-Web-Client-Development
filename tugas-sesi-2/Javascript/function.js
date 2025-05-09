// Fahrenheit to Celsius
export function fahrenheitKeCelsius(f) {
    return ((f - 32) * 5 / 9).toFixed(2);
}

// Centimeter to Kilometer
export function konversiCmKeKm(cm) {
    return cm / 100000 + " km";
}

// Odd Even number
export function isEven(n) {
    return n % 2 === 0;
}

// Remove first occurrence
export function removeFirstOccurrence(str, char) {
    return str.replace(char, "");
}

// Palindrome Text
export function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}