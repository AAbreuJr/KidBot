import React from 'react';
import { Link } from 'react-router-dom'
import './GameCard.css'


function GameCard({ user, myGame }) {
    return (
        <>
        {user._id ? 
            <>
                 <div className="card">
                    <div className="card-body">
                        <h3>Name: {myGame.nameOfGame}</h3>
                        <h4>Subject: {myGame.subject}</h4>
                <Link
                to={{
                    pathname: '/math/game1',
                    state: {myGame}
                }}> <button type="submit" className="gamePlayBtn">Play</button>
                </Link>
                </div>
                </div>
            </>
            :
            'Not Yours'
        }
        </>
    )
}

export default GameCard;