// Fahrenheit to Celsius
export function fahrenheitKeCelsius(f: number): string {
    return ((f - 32) * 5 / 9).toFixed(2);
}

// Centimeter to Kilometer
export function konversiCmKeKm(cm: number): string {
    return (cm / 100000) + " km";
}

// Odd Even number
export function isEven(n: number): boolean {
    return n % 2 === 0;
}

// Remove first occurrence
export function removeFirstOccurrence(str: string, char: string): string {
    return str.replace(char, "");
}

// Palindrome Text
export function isPalindrome(str: string): boolean {
    const reversed: string = str.split('').reverse().join('');
    return str === reversed;
}