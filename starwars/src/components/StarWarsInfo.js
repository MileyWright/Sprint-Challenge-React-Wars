import React, {useState, useEffect} from 'react';
import StarWarsCard from './StarWarsCard.js';
import axios from 'axios';

export default function StarWarsInfo() {
    const [characterInfo, setCharacterInfo] = useState([]);

    useEffect( () => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                const characterList = response.data;
                console.log(characterList);
                setCharacterInfo(characterList);
            })
            .catch(error => {
                console.log(error);
            })
    },[]);
    return(
    <div className='character'>
        <StarWarsCard
            name= {characterInfo.name}
             birthday = {characterInfo.birth}
                gender = {characterInfo.gender}
                key= {characterInfo.id}
                />
            
    
    </div>    
    )
}