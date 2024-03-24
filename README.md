# Weather Widget

## Description
This project is a Vue.js application to provide users with real-time weather information and forecasts. 
Leveraging the OpenWeatherMap API, the widget displays current weather conditions, including temperature, feels like, pressure, humidity, wind speed, and more, alongside an intuitive weather icon.

## Core Requirements
- **Framework Choice**: The application is developed using Vue.js.
- **Data Representation**: 
  - API Integration: Fetches real-time weather data using the OpenWeatherMap API, adhering to API request limits for optimal performance.
  - The widget's design is fluid across devices, maintaining elegance and functionality.
  - Utilizes a modular approach for scalability and maintainability, making the widget adaptable to future enhancements.

## Enhanced Features
The application also includes the following enhanced features:
- **Forecast Menu**:
  - Includes a user-friendly menu within the widget for selecting future dates, providing flexibility in weather forecasting.
- **Chart Visualization**:
  - Integrates a max temperature line-chart using Apex Charts, offering insights into temperature trends without being affected by selected filters.
- **Weather Icon Customization**
  - Offers the option to use a preferred weather icon set, including those provided by OpenWeatherMap, for personalized visual cues.

## Dependencies
- **Vue.js**: Main framework for building the application.
- **Vuex**: For state management in Vue applications.
- **Moment.js**: For manipulating and formatting dates.
- **@vuepic/vue-datepicker**: Date picker component for selecting date ranges.
- **vue3-apexcharts**: Vue.js wrapper for ApexCharts library.
- **apexcharts**: Library for creating interactive charts.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: For making HTTP requests to the OpenWeatherMap API, handling data fetching efficiently.

## Scripts
- `dev`: Run the development server with Vite.
- `build`: Build the project for production.
- `preview`: Preview the built project locally.

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Visit `http://localhost:5173` to view the application.
