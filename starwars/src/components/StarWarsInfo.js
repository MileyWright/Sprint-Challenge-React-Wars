import React, {useState, useEffect} from 'react';
import StarWarsCard from './StarWarsCard.js';
import axios from 'axios';
import {Row, Col} from 'reactstrap';
import './StarWars.css';


export default function StarWarsInfo() {
    const [characterInfo, setCharacterInfo] = useState([]);

    useEffect( () => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                const characterList = response.data.results;
                console.log(characterList);
                setCharacterInfo(characterList);
            })
            .catch(error => {
                console.log(error);
            })
    },[]);
   
    return(
        
        <Row>
            {characterInfo.map(char => {
                return(
                    <Col xs='6' sm='4'>
                    <StarWarsCard
                        key= {char.id}
                        name= {char.name}
                        birthday = {char.birth}
                        gender = {char.gender}
                        
                    />
                </Col>
                )
            })}
        </Row>    
    )
}