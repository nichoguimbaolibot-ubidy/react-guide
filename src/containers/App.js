import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [{id:'asdasdasd1231', name: "Bertong Putik", age: 23},
              {id:'asda1sdasd12313', name: "Alan Putik", age: 29},
              {id:'asdasd123', name: 'Brandong Putik', age: 25}],
              otherState: 'some other value',
              showPersons: false
  };

  switchNameHandler = (newName) =>{
    // console.log('Was clicked');
    // DO NOT USE THIS this.state.persons[0].name ="Maximillian"
    if(newName){
    this.setState({
      persons:[
        { name: newName, age: 23},
        { name:newName, age: 23},
        { name: "James White Knight", age: 23}
      ]
    });
  } else{
    this.setState({
      persons:[
        {name: "newName", age: 23},
        {name:"Owkeeeeyyy", age: 23},
        {name: "James White Knight", age: 23}
      ]
    });
  }
  }

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    
    persons[personIndex] = person;


    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
}

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    // const array1 = this.state.person.map( (num) => {
    //   <Person name={this.state.num.name} age={this.state.num.age}></Person>
      
    // });

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   border: '1px solid black',
    //   font: 'inherit',
    //   padding: '16px'

    // };

    let persons= null;
    let btnClass = '';

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) =>{
              return <Person 
              name={person.name} 
              age={person.age} 
              click={() => this.deletePersonHandler(index)} 
              key={person.id} 
              changed={(event) => {
                this.nameChangeHandler(event, person.id)
                console.log(event);
              }} ></Person>;
            })
          }
        {/* <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this, "George of the Jungle")} >My hobbies: Coding</Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, "Mitochondira Virus")} 
        changed={this.nameChangeHandler} ></Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}  ></Person> */}
        </div>
      );
      // style.backgroundColor = "red";
      btnClass = classes.Red;
      
    }
    
    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);  // classes = ['red']
    }

    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1> Hi! Im a React App </h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} style={classes.AppButton} onClick={() => this.togglePersonHandler()} >Toggle Persons</button>
        {persons}
      </div>
    );

    // return React.createElement('div', {clasName: App}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
