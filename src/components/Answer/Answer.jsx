import React from 'react'
import { Button, Grid, Message } from 'semantic-ui-react'



const Answer = (props) => {
    return (
        <div className='Circles'>
           {props.qNo.map((element, idx) =>
                <div
                
                    className={props.quizIdx === idx ? 'selected' : ''}
                    onClick={() => props.handleSummon(idx)}
                >
                <Grid columns={2} centered divided>
        
                <Grid.Column>
                    {props.quizIdx === idx ? 
                    <Message>
                            <p>
                            {props.answerArray[idx]}
                            </p>
                    </Message>  : <Button color='yellow'>{idx}</Button>} 
                   
                </Grid.Column>
                </Grid>
                </div>
            )}
        </div>
    )
}

export default Answer