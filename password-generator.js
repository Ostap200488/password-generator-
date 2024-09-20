#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

const CHAR_SETS = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    digits: "1234567890",
    symbols: "!@#$%^&*(){}-_[].,"
};

const generateChars = (options) => 
    Object.entries(CHAR_SETS)
        .filter(([key]) => options[key])
        .map(([_, set]) => set)
        .join('') || CHAR_SETS.lower;

const generatePassword = (len, chars) =>
    Array.from({ length: len }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');

program
    .name('password-generator')
    .description('CLI to generate passwords')
    .version('1.0.0')
    .option('-l, --length <number>', 'password length', parseInt, 8)
    .option('--uppercase', 'include uppercase letters')
    .option('--digits', 'include digits')
    .option('--symbols', 'include special characters');

program.parse(process.argv);

const options = program.opts();
if (options.length <= 0) {
    console.error("Please provide a valid password length.");
    process.exit(1);
}

const chars = generateChars(options);
const generatedPassword = generatePassword(options.length, chars);
console.log(`Generated Password: ${generatedPassword}`);
