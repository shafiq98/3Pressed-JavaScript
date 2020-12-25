import React from 'react';
import ReactDom from 'react-dom';
import {useState} from 'react';

// import CSS
import './/CSS/main.css';

// import icons and images from Images folder
import navIcon from './Images/navigation.png'

// import navMenu
import {navigationArray} from './GlobalElements/navArray';
import NavElement from './GlobalElements/Navigation';

// import grid of choices for index.html
import ElementList from './IndexElement/Element';

// header for company name
import {MyHeader} from './GlobalElements/companyHeader';




// function that returns the whole page
function IndexLayout() {

  //opens when you click on the hamburger icon
  const openNavBar = () => {
    document.getElementById("navigationMenu").style.width = "200px";
    // TODO : toggle an overlay that prevents user from clicking anything 
    // like the grid of options that should be conceptually "behind" the navMenu
    document.getElementById("overlay").style.display = "block";
  }
  // closes when you click on the black overlay outside the navMenu
  const closeNavBar = () => {
    if (document.getElementById("navigationMenu").style.width === "200px")
    {
      document.getElementById("navigationMenu").style.width = "0px";
      document.getElementById("overlay").style.display = "none";
    }
  }


  return (
    <div className= 'main'>
      <MyHeader />
      
      <section id = 'navigationMenu' className="navigationMenu">
        {navigationArray.map((element) => {
          return <NavElement
          // key is the unique id for an element inside the array, need this to avoid error inside console
          key = {element.id}
          // the spread operator below returns everything inside element, 
          // so we dont have to name every possible item that can exist inside element
          {...element}>
          </NavElement>
        })}

      </section>
      
      <section id = "overlay" className="overlay" onClick = {closeNavBar}>

      </section>
      <section id = 'navButton' className= 'navButton' onClick= {openNavBar}>
        <img src={navIcon} alt=""/>
      </section>

      {<ElementList />}
      
    </div>
    
  )
}


// include opening and closing tag when passing in a function inside React.render()

ReactDom.render(<IndexLayout></IndexLayout>, document.getElementById('root'));