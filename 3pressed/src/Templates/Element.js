import React from 'react'

import {useContext} from 'react';

import {ChoiceContext} from '..//GlobalElements/ChoiceContext';

// this template is used to display a grid information like categories
let userChoice = "Nothing yet";

// when an option in the grid is chosen, we record that choice
// using our clickHandler
const Element = (props) => {
  const {title} = props;
  const {choice, setChoice} = useContext(ChoiceContext);
  const clickHandler = () => {
    setChoice(title);
  }
  
  // this return statement defines how each individual grid looks like
  // modify this to add icons, etc in the future
  return (
      <article id = "element" className = "element" onClick = {() => clickHandler(title)}>
      <span><h1>{title}</h1></span>
      </article>
  )
}

const ElementList = (props) => {
  
  const {displayArray, ToDisplay} = props;
  // const {displayArray, setDisplayArray} = useContext(ChoiceContext);

  return (
    <section id = 'ElementList' className = 'ElementList'>
      {(ToDisplay===1) && displayArray.map((element) => {
        return <Element 
        key = {element.id}
        {...element}>
        </Element>
      })}
    </section>
  )
  
}

export default ElementList
