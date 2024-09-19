
# Password Generator CLI

## Name of the App

**Password Generator CLI**

## Description

The Password Generator CLI is a command-line interface (CLI) application designed to generate strong and customizable passwords based on user-defined criteria. Users can control the length of the password and whether to include uppercase letters, digits, and special symbols, making it useful for creating secure passwords for various applications.

## Features

- Generate a password of a specified length (default: 8 characters).
- Option to include uppercase letters, digits, and special symbols.
- User-friendly error handling for invalid inputs.
- Displays a helpful message using the `--help` flag.

## Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/Ostap200488/password-generator-.git>
   ```

2. Navigate to the project directory:

   ```bash
   cd password-generator
   ```

3. Install dependencies (if applicable):

   ```bash
   npm install
   ```

## Usage

You can generate a password using the following commands:

### Basic Command

Generate a password with the default length (8 characters):

```bash
node ./password-generator.js
```

### Available Flags

- `-l, --length <number>`: Specify the length of the password (default: 8).
- `--uppercase`: Include uppercase letters.
- `--digits`: Include numbers.
- `--symbols`: Include special characters.

### Example Commands

1. **Generate a 12-character password including uppercase, digits, and symbols**:

   ```bash
   node ./password-generator.js --length 12 --uppercase --digits --symbols
   ```

2. **Generate a 16-character password with lowercase letters and digits**:

   ```bash
   node ./password-generator.js --length 16 --digits
   ```

3. **Show help message**:

   ```bash
   node ./password-generator.js --help
   ```

## Error Handling

- The application will display an error if an invalid password length is provided.
- If no character type (uppercase, digits, symbols) is selected, the user will be prompted to select at least one.

## License

This project is licensed under the MIT License.

## Author

Ostap Demchuk
