import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const PriceCard = ({ imgSrc, imgAlt, imgWidth, title, text, onClick, cardMargin }) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#FFBB3F'
            }
        }
    });
    return (
        <Card sx={{ display: 'flex', height: "680px", width: "450px" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center", padding: "20px 10px" }}>
                <CardMedia
                    component="img"
                    sx={{ width: imgWidth }}
                    height="250"
                    image={imgSrc}
                    alt={imgAlt}
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" sx={{ margin: "10px 0" }}>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {text}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {text}
                    </Typography>
                </CardContent>
                <ThemeProvider theme={theme}>
                    <Button
                        sx={{ textTransform: "none", color: "#192230", fontSize: "16px", margin: "10px 0" }}
                        color="primary"
                        variant="contained" onClick={onClick}>Veja mais</Button>
                </ThemeProvider>
            </Box>
        </Card>
    )
}

export default PriceCard