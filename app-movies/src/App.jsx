import { useState, useEffect } from "react";

import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";
import Favorites from "./components/Favorites";

import { searchMovies } from "./services/movieService";

import { Container, Typography, AppBar, Toolbar, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

function App() {

	const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);


	async function handleSearch(title) {
		const results = await searchMovies(title);
		setMovies(results);
	}

	function addFavorite(movie){
		if (favorites.some((f) => f.imdbID === movie.imdbID)) return;

		const updatedFavorites = [...favorites, movie];
		setFavorites(updatedFavorites);

		localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
	}

	function removeFavorite(id){
		const updatedFavorites = favorites.filter((movie) => movie.imdbID !== id);
		setFavorites(updatedFavorites);

		localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
	}

	useEffect(() => {
		const savedFavorites = JSON.parse(localStorage.getItem("favorites") || [])
		setFavorites(savedFavorites);
	}, [])


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
					<Grid xs={12} md={8}>
						<MovieList movies={movies}  addFavorite={addFavorite} />
					</Grid>

					<Grid xs={12} md={8}>
						<Favorites favorites={favorites}  removeFavorite={removeFavorite} />
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default App;
