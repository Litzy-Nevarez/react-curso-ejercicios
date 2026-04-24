import MovieCard from "./MovieCard";

import { Grid, Paper, Typography, IconButton, List, ListItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Favorites({ favorites,  removeFavorite }) {

    return (
        <Paper sx={{ p:2 }}>
            <Typography>Favoritos ⭐</Typography>

            <List>
                {
                    favorites.map(movie => (
                        <ListItem
                            key={movie.imdbID}
                            secondaryAction={
                                <IconButton onClick={() => removeFavorite(movie.imdbID)} >
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            { movie.Title }
                        </ListItem>
                    ))
                }
            </List>
        </Paper>
    );
}