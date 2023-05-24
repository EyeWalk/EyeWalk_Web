import * as React from 'react';
import {Card, Image, Button } from 'react-bootstrap';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CheckIcon from '@mui/icons-material/Check';

const PlanCard = ({title, text, price, imgSrc, imgAlt, btnText, href}) => {

    const description = text.split(",")
    
    return (
        <Card>
            <Card.Body>
                <Image src={imgSrc} className='card-img-top' alt={imgAlt}/>
                <Card.Title className='fw-bold mt-4 fs-4'>{title}</Card.Title>
                <Card.Subtitle>Assinatura mensal</Card.Subtitle>
                <Card.Text className='fw-bold text-highLight mt-2'>R$ {price}</Card.Text>
                <List className='mb-4'>
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
                <Button className='bg-button mb-4' onClick={() => window.open(href)}>{btnText}</Button>
            </Card.Body>
        </Card>
    )
}

export default PlanCard;