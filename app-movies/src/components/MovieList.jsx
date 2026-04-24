import MovieCard from "./MovieCard";

import { Grid } from "@mui/material";

export default function MovieList({ movies, addFavorite }) {

    return (
        <Grid container spacing={2}>
            {
                movies.map(movie => (
                    <Grid  
                        xs={12} 
                        sm={6} 
                        md={4} 
                        key={movie.imdbID} 
                        >
                        <MovieCard 
                            movie={movie} 
                            addFavorite={addFavorite} 
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
}