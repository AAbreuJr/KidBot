import React from 'react'
import { Button, Grid, Message } from 'semantic-ui-react'

const Choice = (props) => {
    return (
        
        <div className='CircleSelector'>
            
            {props.qNo.map((element, idx) =>
                <div
                
                    className={props.quizIdx === idx ? 'selected' : ''}
                    onClick={() => props.handleSummon(idx)}
                >
                <Grid columns={2} centered divided>
        
                    <Grid.Column>
                        <Message>
                                <p>
                                {idx}. {props.testArray[idx]}
                                </p>
                        </Message>
                        {props.quizIdx === idx ? <Button color='green'>Progression: {idx}0%</Button> : 
                        <Button color='grey'>Click to Progress: {idx}0%
                        </Button> 
                        } 
                    </Grid.Column>
                </Grid>
                </div>
            )}
        </div>
    )
}

export default Choice