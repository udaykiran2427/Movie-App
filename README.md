# CineShard - Movie Search App

**CineShard** is a modern movie search web application built using React, Appwrite, and The Movie Database (TMDb) API. The app allows users to search for movies, view trending movies, and explore detailed information like movie ratings, release dates, and languages. It also stores search queries and tracks the most popular movies.

## Features
- **Search for Movies**: Enter a movie title to search from The Movie Database.
- **Trending Movies**: View a list of trending movies based on the most popular search terms.
- **Movie Details**: See detailed movie information such as title, rating, release year, language, and poster.
- **Appwrite Integration**: Tracks search queries and the top movies using Appwrite database to update and retrieve trending movies.

## Technologies Used
- **React**: For building the user interface.
- **Appwrite**: Backend service for managing search data and tracking popular movies.
- **The Movie Database (TMDb) API**: For fetching movie data, including search results and trending movies.
- **Tailwind CSS**: For styling the application with a responsive, mobile-first design.

## Installation

To get started with CineShard, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/udaykiran2427/CineShard.git
```
### 2. Install Dependencies
Navigate to the project folder and install the required dependencies:
```bash
cd CineShard
npm install
```
### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```
### 4. Start the Development Server
Run the app in development mode:
```bash
npm run dev
```
The app should now be running at [http://localhost:5173](http://localhost:5173).

## Usage
1. **Search for Movies**: Use the search bar at the top to look for movies by title.
2. **View Trending Movies**: Scroll down to see the trending movies based on popular search terms.
3. **Movie Details**: Click on a movie to view its details including rating, release year, language, and poster image.

## Contributing
Feel free to fork this project and submit pull requests. Contributions are welcome!

## License
This project is licensed under the MIT License


