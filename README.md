# rick-and-morty-app

# Rick and Morty Universe Explorer

Welcome to the **Rick and Morty Universe Explorer**! This app allows fans to explore characters, episodes, and locations from the animated show Rick and Morty. Built with React and styled with Tailwind CSS, this app fetches data from the Rick and Morty API and presents it in an interactive and engaging way.

## Features

- **Responsive Design**: The app is designed to work on both desktop and mobile devices.
- **Search Functionality**: Search for specific characters, episodes, or locations.
- **Dynamic Cards**: Cards display relevant images and details for each character, episode, or location.
- **Navigation Links**: Easy navigation between Characters, Episodes, and Locations.
- **Attractive Home Page**: A visually appealing and interactive home page introduces the app.
- **Data Fetching**: Fetches data dynamically using Axios from the Rick and Morty API.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **React Router**: For routing between different pages.
- **Tailwind CSS**: For styling and responsive design.
- **Axios**: For making API requests to the Rick and Morty API.

## Project Structure

```plaintext
src
├── components
│   ├── Header.js            # The navigation header with links and search bar
│   └── ItemCard.js          # A reusable card component for characters, episodes, and locations
├── pages
│   ├── Home.js              # Home page with an introduction and navigation links
│   ├── Characters.js        # Page to display characters with search and filter functionality
│   ├── Episodes.js          # Page to display episodes with relevant character images
│   └── Locations.js         # Page to display locations with relevant character images
├── App.js                   # Main app component with routing setup
└── index.js                 # Entry point for React app
