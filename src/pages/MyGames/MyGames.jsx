import React from 'react';
import './MyGames.css'
import GameCard from '../../components/GameCard/GameCard'

const MyGamesPage = (props) => {
    return ( 
        <>
            <h1>My Games</h1>
            {props.myGames.map((myGame) =>
            <GameCard
            key={myGame._id}
            myGame={myGame}
            user={props.user}
            />
            )}
            </>
     );
}
export default MyGamesPage;