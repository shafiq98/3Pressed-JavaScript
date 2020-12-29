import React from 'react'
import {listingArray} from '../fixedInformationArray/listingArray';
import {subjectArray} from '../fixedInformationArray/subjectArray';
import {useState} from 'react';

// this template is used to display a grid information like categories
let userChoice = "Nothing yet";

// when an option in the grid is chosen, we record that choice
// using our clickHandler
const Element = (props) => {
  const {title} = props;
  const clickHandler = () => {
    userChoice = title;
  }
  
  // this return statement defines how each individual grid looks like
  // modify this to add icons, etc in the future
  return (
      <article id = "element" className = "element" onClick = {() => clickHandler(title)}>
      <span><h1>{title}</h1></span>
      </article>
  )
}

// when a grid is chosen, that exists in our switch case, we move into that option
// else, we go back to the home page as default
const ElementList = (props) => {
  // listing array is the first array we want when we first enter the website
  const [workingArray, setWorkingArray] = useState(listingArray);

  // need to add more elements into the switch case when we want more functionality
  const clickHandler = () => {
    console.log(userChoice);
    switch (userChoice) {
      case "Academic Tuition":
        setWorkingArray(subjectArray);
        break;
      case "English": 
        alert("Sorry no listings available yet");
        break;
      default:
        setWorkingArray(listingArray);
        break;
    }
  }

  // this return statement displays all elements inside the array that is currently chosen
  return (
    <section id = 'ElementList' className = 'ElementList' onClick = {() => clickHandler()}>
      {workingArray.map((element) => {
        return <Element 
        key = {element.id}
        {...element}>
        </Element>
      })}
    </section>
  )
}

export default ElementList
