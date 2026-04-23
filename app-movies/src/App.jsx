import { useState, useEffect } from "react";

import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";
import Favorites from "./components/Favorites";

import { searchMovies } from "./services/movieService";

import { Container, Typography, AppBar, Toolbar, Grid, Box } from "@mui/material";

function App() {

	const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);


	async function handleSearch(title) {
		const results = await searchMovies(title);
		setMovies(results);
	}

	function addFavorite(movie){

	}

	function removeFavorite(id){

	}


	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">Buscador de películas 🎬</Typography>
				</Toolbar>
			</AppBar>

			<Container sx={{ mt: 4 }}>
				<SearchForm  onSearch={ handleSearch } />

				<Grid container spacing={3}>
					<Grid item xs={12} md={8}>
						<MovieList movies={movies}  addFavorite={addFavorite} />
					</Grid>

					<Grid item xs={12} md={8}>
						<Favorites favorites={favorites}  removeFavorite={removeFavorite} />
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default App;
