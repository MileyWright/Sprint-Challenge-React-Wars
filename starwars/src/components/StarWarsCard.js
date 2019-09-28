import React from 'react';
import {
    Card, CardBody, CardText
} from 'reactstrap';

export default function StarWarsCard(props){
    return(
        <div className='mainContainer' key = {props.id}>
            <Card>
                <CardBody>
                <h3>{props.name}</h3>
                <CardText>{props.birthday}</CardText>
                <CardText>{props.gender}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}