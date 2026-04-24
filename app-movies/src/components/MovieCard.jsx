import { MovieFilter } from "@mui/icons-material";
import {
    Card,
    CardMedia,
    CardContent, 
    Typography, 
    Button
} from "@mui/material";

export default function MovieCard({ movie, addFavorite }) {

    return (
        <Card>
            <CardMedia  component="img" height="300" image={movie.Poster} />
            <CardContent>
                <Typography variant="h6">
                    { movie.Title }
                </Typography>
                
                <Typography variant="body2">
                    { movie.Year }
                </Typography>

                <Button 
                    variant="contained" 
                    sx={{ mt: 2 }} 
                    onClick={() => addFavorite(movie)} 
                >
                    Agregar a favoritos ⭐
                </Button>

            </CardContent>
        </Card>
    );
}