import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        {id:'asd', name: 'Max', age: 28},
        {id:'qwe', name: 'Manu', age: 29},
        {id:'zxc', name: 'Pepa', age: 26}
      ],
      showPersons: false,
      toggleClicked: 0
    };
  }
  componentWillMount(){
    console.log('[App.js] Inside componentWillMount');     
  }
  componentDidMount(){
    console.log('[App.js] Inside componentDidMount');
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState)
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }
  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
  }
  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside componentDidUpdate')
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => p.id===id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked +1
      }
    });
  }

  render() {
    console.log('[App.js] Inside render  ');
    let persons = null;
    if(this.state.showPersons){
      persons = 
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler }
          />;
    }
    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle = {this.props.title}
          showPersons = {this.state.showPersons}
          toggle = {this.togglePersonHandler}
          personsLenght = {this.state.persons.length}
        />
        { persons }
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
