import React from 'react'
import { Segment, Grid, Message } from 'semantic-ui-react'
import Choice from '../../components/Choice/Choice'
import Answer from '../../components/Answer/Answer'

const QuizPage = (props) => {
    return (
        
    <div>
        <Grid columns={2} relaxed='very' divided>
            <Grid.Column>
            <Choice 
                qNo={props.qNo}
                quizIdx={props.quizIdx}
                handleSummon={props.handleSummon}
                testArray={props.testArray}
                answerArray={props.answerArray}
            />
            </Grid.Column>
            <Grid.Column>
            <Answer 
                qNo={props.qNo}
                quizIdx={props.quizIdx}
                handleSummon={props.handleSummon}
                testArray={props.testArray}
                answerArray={props.answerArray}
            />
            </Grid.Column>
        </Grid>
    </div>
    )
}

export default QuizPage