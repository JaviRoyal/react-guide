import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = '';
    let assignedClasses = [];
    if(props.showPersons)
        btnClass = classes.Red;
    if(props.personsLenght <= 2){
        assignedClasses.push(classes.red)
    }
    if(props.personsLenght <= 1){
        assignedClasses.push(classes.bold)
    }
    return (
        <div className={classes.Cockpit}>      
            <h1> Hi I'm a React App</h1>
            <p className={assignedClasses.join(' ')}> Esto lo va a petar!</p>
            <button
            className = {btnClass}
            onClick={props.toggle}>Toggle Persons</button>
        </div>
        );
    };

export default cockpit;