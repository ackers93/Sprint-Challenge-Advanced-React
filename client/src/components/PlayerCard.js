import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-items: space-between;
`

const Card = styled.div`
    border: 1px solid black;
    filter: drop-shadow(-20px 10px 10px darkgrey);
    border-radius: 6px; 
    padding: 1%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-items: space-around;
`


const PlayerCard = props => {
    console.log(props);
  return (
    <CardContainer>
    {props.players.map(data => {
        return (
            <Card>
                <h2>{data.name}</h2>
                <h2>{data.country}</h2>
                <h2>{data.searches}</h2>
            </Card>
        )
    })}
    </CardContainer>
  )
};

export default PlayerCard