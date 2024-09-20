#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

const UPPER_LETTER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_LETTER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "1234567890";
const SPECIAL_CHARACTERS = "!@#$%^&*(){}-_[].,";

/**
 * Generate the character set based on user input.
 * @param {boolean} upper - Whether to include uppercase letters.
 * @param {boolean} lower - Whether to include lowercase letters.
 * @param {boolean} digit - Whether to include digits.
 * @param {boolean} symbols - Whether to include special characters.
 * @returns {string} - The combined character set.
 */
const generateChars = (upper, lower, digit, symbols) => {
    let chars = "";
    if (upper) chars += UPPER_LETTER;
    if (lower) chars += LOWER_LETTER;
    if (digit) chars += DIGITS;
    if (symbols) chars += SPECIAL_CHARACTERS;
    return chars;
};

/**
 * Generate a password of specified length from the given character set.
 * @param {number} len - Length of the password.
 * @param {string} ch - The character set to use for generating the password.
 * @returns {string} - The generated password.
 */
const generatePassword = (len, ch) => {
    let password = "";
    for (let i = 0; i < len; i++) {
        password += ch.charAt(Math.floor(Math.random() * ch.length));
    }
    return password;
};
program
    .name('password-generator')
    .description('CLI application to generate passwords based on provided flags')
    .version('1.0.0');
program
    .option('-l, --length <number>', 'length of the password', parseInt, 8)
    .option('--uppercase', 'include uppercase letters')
    .option('--digits', 'include digits')
    .option('--symbols', 'include special characters')
    .option('--help', 'display help message');
program.parse(process.argv);

const options = program.opts();
if (isNaN(options.length) || options.length <= 0) {
    console.error("Please provide a valid number for the password length.");
    process.exit(1);
}
const chars = generateChars(options.uppercase, true, options.digits, options.symbols);

if (!chars) {
    console.error("No character types were selected. Please enable at least one character type.");
    process.exit(1);
}
const generatedPassword = generatePassword(options.length, chars);
console.log(`Generated Password: ${generatedPassword}`);
