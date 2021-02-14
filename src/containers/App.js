import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'



class App extends Component  {

  constructor(props){
    super(props);
    this.  state = {persons : [
      {id:1,name:"Kaustav Das",age: 33 },
      {id:2,name:"Mridu",age: 29   },
      {id:3,name:"Chaitali",age: 52}
    ],
    otherState: 'some other value',
    showPersons: false
  }
  console.log('App.js constructor')
  }

  static getDerivedStateFromProps(props, state){
    console.log('App.js getDerivedStateFromProps')
    return state;
  }

  componentDidMount(){
    console.log('App.js ComponentDidMount');
  }



  switchNameHandler = (newName)=> {
    console.log("Switch Name Clicked!!");
    this.setState({
      persons : [
        {name:newName,age: 33 },
        {name:"Mridu",age: 29   },
        {name:"Chaitali Das",age: 52}
      ]}
    )
  
    //console.log(personState, otherState);
  }

  nameChangedHandler = (event, id)=> {
    console.log("Switch Name Clicked!!");
    let personindex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    let newPersons = [...this.state.persons];
    const newPerson = {...this.state.persons[personindex]};
    newPerson.name = event.target.value;

    newPersons[personindex]= newPerson;


    this.setState({
      persons : newPersons}
    )
  
    //console.log(personState, otherState);
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  deletePersonHandler = (index) => {
    let persons = this.state.persons.slice();
    persons.splice(index,1);
    this.setState({
      persons: persons
    })
  }



  render() {
    console.log('App.js render')

    let persons = null;
    if(this.state.showPersons){
      persons  = (

        <Persons  persons= {this.state.persons} changed={this.nameChangedHandler} clicked={this.deletePersonHandler}/>
      )
    }



    return (
      <div className={classes.App}>
        <Cockpit 
        title={this.props.appTitle}
        persons={this.state.persons}
        showPersons={this.state.showPersons}
        clicked= {this.togglePersonHandler}
        />
        {persons}
      </div>

    );

  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, This is the first React App'));
  }
}


export default App;