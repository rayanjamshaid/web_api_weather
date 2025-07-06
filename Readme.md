# Weather Forecast Web App

This is a simple backend web application built with Node.js, Express, and EJS that fetches weather data from the [Open-Meteo API](https://open-meteo.com/) and displays current and daily weather forecasts for a given location.

---

## Usage Instructions

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd weather-app
   ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

    for just information for my future self, it uses axios, ejs and express

3. **Run the application**
    ```bash
    node app.js
    ```
    or
    ```bash
    nodemon app.js
    ```
4. **OPen browser and visit**
    ```bash
    localhost:3000
    ```

## API Usage

This project uses the Open-Meteo API to fetch weather forecast data by providing latitude and longitude coordinates. The API returns current temperature, daily maximum and minimum temperatures, and weather condition codes, which the app then renders on the webpage.

## Note from the Developer

I built this project specifically to experiment with API usage and create a simple, clean web app experience. I was not fully satisfied with the vibe and code quality of a previous weather app I made, so this is a fresh attempt focusing on clarity, simplicity, and effective API integration.


## Project Structure

```bash

weather-app/
│
├── public/               # Static files (CSS, JS, images)
│   └── styles.css
│
├── views/                # EJS templates
│   ├── index.ejs         # Main weather page
│   └── partials/         # Header/footer (optional)
│       ├── header.ejs
│       └── footer.ejs
│
├── .env                  # (Optional) API key/env vars
├── app.js                # Main server file
├── package.json
└── README.md             # (Optional) Project info

```
