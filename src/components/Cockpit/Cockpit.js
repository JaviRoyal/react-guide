import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux'

const cockpit = (props) => {
    let btnClass = classes.Button;
    let assignedClasses = [];
    if(props.showPersons)
        btnClass = [classes.Button, classes.Red].join(' ');
    if(props.personsLenght <= 2){
        assignedClasses.push(classes.red)
    }
    if(props.personsLenght <= 1){
        assignedClasses.push(classes.bold)
    }
    return (
        <Aux>
            <h1>{props.appTitle }</h1>
            <p className={assignedClasses.join(' ')}> Esto lo va a petar!</p>
            <button
            className = {btnClass}
            onClick={props.toggle}>Toggle Persons</button>
        </Aux>
        );
    };

export default cockpit;