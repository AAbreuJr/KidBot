import React, { Component } from 'react'
import './AddGame.css';

class AddGame extends Component {
    state = { 
        invalidForm: true,
        formData: {
            nameOfGame: [],
            subject: [],
            question1: [],
            question2: [],
            question3: [],
            
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddGame(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
        });
     }

     formRef = React.createRef()

    render() { 
        return ( 
            <>
                <h1 className='AddGameTitle'>Add A Game</h1>
                <div className="AddGame">
                <div className="card">
                <div className="card-body">
                    <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <label>Name Of Game:</label>
                            <input name="nameOfGame" id="nameOfGame" type="text" className="active" value={this.state.formData.nameOfGame} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            <label>Subject:</label>
                            <input name="subject" id="subject" type="text" className="active" value={this.state.formData.subject} onChange={this.handleChange} />
                            <br />
                            <br/>
                            <label>Questions:</label>
                            <br/>
                            <br/>
                            1: <input name="question1" id="questions" type="text" className="active" value={this.state.formData.question} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            2: <input name="question2" id="questions" type="text" className="active" value={this.state.formData.question} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            3: <input name="question3" id="questions" type="text" className="active" value={this.state.formData.question} onChange={this.handleChange} />
                            </div>
                        </div>
                        <br/>
                        <button
                            type="submit"
                            className="CreateGame"
                                    >
                            Create Game
                        </button>                           
                    </form>
                    </div>
                    </div>
                    </div>
            </>
         );
    }
}
 
export default AddGame;