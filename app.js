import express from "express";
import axios from "axios";

const port=3000;

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));


app.get("/", async (req, res) => {
    try{
        const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
            latitude: 31.5497,
            longitude: 74.3436,
            current: 'temperature_2m',
            daily: 'temperature_2m_max,temperature_2m_min,weathercode',
            timezone: 'auto'
        }
        
    });

    const weatherData = response.data;
    res.render('index', { weatherData, error: null });
}
catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.render('index', { weatherData: null, error: 'Unable to fetch weather data' });
}
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));