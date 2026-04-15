import React from 'react';
import products from './../assets/coffee.js';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
} from '@mui/material';

import Grid from '@mui/material/Grid';


const Coffee = () => {

    return (
        <Box id="coffee" sx={{ padding: '5rem' }}>
            <Typography variant="h5" sx={{ textAlign: 'center', mb: 4 }}>
                Our Coffee Selection
            </Typography>
            <Grid container spacing={3} sx={{ padding: '3rem', justifyContent: 'center' }}>
                {products.map((product) => (
                    <Grid item="true" xs={12} sm={6} md={4} >
                        <Card sx={{ maxWidth: 345, textAlign: 'center', padding: 2}}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.title}
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    ${product.price.toFixed(2)}
                                </Typography>
                                <Button size="small" color="primary">
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Coffee;