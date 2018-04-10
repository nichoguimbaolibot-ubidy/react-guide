import React from 'react';
import classes from './person.css';



const Person = (props) =>{


    return (
        <div className={classes.Person} >
            <p onClick={props.click}>
                I'm {props.name} and I am {props.age} 
            </p>
            <p onClick={props.click}>
                
                {props.children}
            </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default Person;