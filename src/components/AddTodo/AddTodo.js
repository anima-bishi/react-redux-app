import React from 'react';
import {connect} from 'react-redux';
import { addTodo } from '../../actions';

const AddTodo = (props) =>{
    return(
        <div>
        <form onSubmit={ (event)=> {
            event.preventDefault()
            let input=event.target.userInput.value;
            props.dispatch(addTodo(input));
            event.target.userInput.value="";
            
        }
        }>
        <div className="main-div">
            <div className="centre-div">
                <br></br>
                <h1>Add yor country name</h1><br></br>
                <input type="text" name="userInput"></input>
                <button>+</button>

                

            </div>
        </div>



            {/* <input type="text" name="userInput"></input>
            <button>Submit</button> */}
        </form>

        </div>
    );

}

export default  connect()(AddTodo);
