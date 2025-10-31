# TOTP Generator

Simple web-based TOTP (Time-based One-Time Password) generator, ideal for generating secure, time-based authentication codes for two-factor authentication (2FA) systems.

## Features

- Generates TOTP codes based on a shared secret and current time.
- Built with a minimal, user-friendly interface using HTML, CSS, and JavaScript.
- No backend dependencies – runs entirely in the browser.
- Direct key access via URL parameter (e.g., `?key=YOURKEY`).

## Installation and Usage

1. **Clone or Download** the repository:
   ```bash
   git clone https://github.com/EnesKeremAYDIN/totp-generator.git
   cd totp-generator
   ```

2. **Run the Application**:
   - Open `index.html` in a web browser to access the TOTP generator.
   - You can directly access with a key using URL parameter: `?key=YOURKEY`

## Files

- **`index.html`**: The main HTML file providing the structure of the TOTP generator interface.
- **`script.js`**: JavaScript code implementing TOTP generation based on the current time and a shared secret key.
- **`styles.css`**: CSS file for styling the TOTP generator interface.

## Requirements

- A web browser with JavaScript enabled.

## URL Parameters

The application supports the following URL parameter:
- `key`: TOTP secret key (e.g., `?key=ABCDEF123456`)
- When a key is provided in the URL, the application will automatically start generating TOTP codes.

## Disclaimer

This tool is intended for educational purposes or personal use.
