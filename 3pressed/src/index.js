import React from 'react';
import ReactDom from 'react-dom';
import {useReducer, useState} from 'react';

// import CSS
import './/CSS/main.css';

// import navMenu
import {NavMenu} from './GlobalElements/Navigation';

// import grid of choices for index.html
import ElementList from './Templates/Element';

// header for company name
import {MyHeader} from './GlobalElements/companyHeader';

// footer for every page
import {Footer} from './GlobalElements/footer';

// import tutor listing
import {ParticularsListing} from './Templates/Particulars';
import {tutorArray} from './fixedInformationArray/tutorArray';

// import single tutor
import {DisplayListing} from './Templates/SingleListing';

// function that returns the whole page
function IndexLayout() {

  return (
    <div className= 'main'>
      <MyHeader />
      
      <NavMenu />

      <ElementList />
      
      {/* commented out code below shows an example of how code will look like once we display it */}
      {/* <ParticularsListing particularsArray = {tutorArray} /> */}
      <ParticularsListing particularsArray = {[]} />

      {/* <DisplayListing personArray = {tutorArray} index = {1} /> */}
      <DisplayListing personArray = {[]} index = {0} />
      
      
      <Footer />
    </div>
    
  )
}


// include opening and closing tag when passing in a function inside React.render()

ReactDom.render(<IndexLayout></IndexLayout>, document.getElementById('root'));