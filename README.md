Weather Dashboard Application
This is a Weather Dashboard application built using React and Vite. The application fetches and displays weather information for different cities using the OpenWeatherMap API. It supports both light and dark themes and provides current weather data, hourly forecasts, and daily forecasts.

Features
City Search: Search for the current weather by city name.
Current Location: Get the current weather based on your location.
Temperature Units: Switch between Celsius and Fahrenheit.
Weather Details: View detailed weather information including temperature, humidity, wind speed, and more.
Hourly Forecast: See the weather forecast for the next few hours.
Daily Forecast: Check the weather forecast for the upcoming days.
Installation and Setup
Prerequisites
Ensure you have the following installed on your local machine:

Node.js (>=14.x)
npm (>=6.x) or yarn (>=1.x)
Steps to Run the Application
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
Install Dependencies:

Using npm:

bash
Copy code
npm install
Using yarn:

bash
Copy code
yarn install
Set Up Environment Variables:

Create a .env file in the root directory of the project and add your OpenWeatherMap API key:

plaintext
Copy code
VITE_API_KEY=your_openweathermap_api_key
Run the Application:

Using npm:

bash
Copy code
npm run dev
Using yarn:

bash
Copy code
yarn dev
Open the Application:

Open your browser and navigate to http://localhost:3000. You should see the weather dashboard application running.

Folder Structure
Here's a brief overview of the project structure:

arduino
Copy code
weather-dashboard/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Forecast.jsx
│   │   ├── Inputs.jsx
│   │   ├── LocationAndTime.jsx
│   │   ├── TemperatureAndDetails.jsx
│   │   └── TopButtons.jsx
│   ├── services/
│   │   └── weatherService.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
Usage
Search for a City: Enter the name of a city in the search bar and click the search icon.
Current Location: Click the current location icon to get weather data based on your location.
Switch Units: Click the °C or °F button to toggle between Celsius and Fahrenheit.
Toggle Theme: Click the "Switch to Dark Theme" or "Switch to Light Theme" button to change the theme.
Contributing
Feel free to open issues or submit pull requests if you find bugs or have suggestions for improvements.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Acknowledgements
OpenWeatherMap API for providing weather data.
React
Vite
Tailwind CSS

