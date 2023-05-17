import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CheckIcon from '@mui/icons-material/Check';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const PriceCard = ({ imgSrc, imgAlt, imgWidth, title, text, onClick, price }) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#FFBB3F'
            }
        }
    });

    const description = text.split(",")

    return (
        <Card sx={{ display: 'flex', height: "870px", width: "450px" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center", padding: "40px 10px" }}>
                <CardMedia
                    component="img"
                    sx={{ width: imgWidth }}
                    height="250"
                    image={imgSrc}
                    alt={imgAlt}
                />
                <CardContent sx={{ flex: '0 0 auto', height: "500px" }}>
                    <Typography component="div" variant="h5" sx={{ margin: "10px 0" }}>
                        {title}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center" }}>
                        <Typography color="#FFBB3F" sx={{ fontSize: "26px", fontWeight: 600 }}>
                            R$ {price}
                        </Typography>
                        <Typography color="#FFBB3F" sx={{ fontSize: "12px", fontWeight: 600 }}>
                            / mês
                        </Typography>
                    </Box>

                    <List>
                        {description.map((item, index) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <CheckIcon sx={{ color: "#04B90B" }} />
                                    </ListItemIcon>
                                    <ListItemText>{item}</ListItemText>
                                </ListItem>
                            )
                        })}
                    </List>
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