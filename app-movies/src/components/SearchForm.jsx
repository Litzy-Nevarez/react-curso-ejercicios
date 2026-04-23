import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function SearchForm({ onSearch }) {

    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(title);
        
        setTitle("");
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display:"flex",
                gap: 2,
                mb: 4
            }}
        >
            <TextField  
                label="Buscar película" 
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}    
            />

            <Button variant="contained" type="submit">
                Buscar
            </Button>

        </Box>
    )
}