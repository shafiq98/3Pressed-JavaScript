import React from 'react';
import ReactDom from 'react-dom';
import {useEffect, useState, useContext} from 'react';

// import CSS
import './/CSS/main.css';

// import choiceContext component so we can pass variables between all the different components(particulars, elementlist, singleListing, etc)
import {ChoiceContext} from './GlobalElements/ChoiceContext';

// import navMenu
import {NavMenu} from './GlobalElements/Navigation';
import {InfoListing} from './Templates/Profile';

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
import { DisplayListing } from './Templates/SingleListing';
import { listingArray } from './fixedInformationArray/listingArray';
import { subjectArray } from './fixedInformationArray/subjectArray';
import { userInfo } from './fixedInformationArray/userArray';



// function that returns the whole page
function IndexLayout() {

  const [ToDisplay, setToDisplay] = useState(1);
  const [choice, setChoice] = useState("default");
  const [workingArray, setWorkingArray] = useState(listingArray);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    switch (choice) {
      case "Academic Tuition" :
        setWorkingArray(subjectArray);
        setToDisplay(1)
        break;
      case "English" :
        setWorkingArray(tutorArray);
        setToDisplay(2);
        break;
      case "Tutor A" :
        setIndex(0);
        setToDisplay(3)
        break;
      case "Tutor B" :
        setIndex(1);
        setToDisplay(3)
        break;
      case "Profile":
        setWorkingArray(userInfo);
        setToDisplay(4);
        break;
      default:
        setWorkingArray(listingArray);
        setToDisplay(1);
        break;      
    }
  })

  return (
    <div className= 'main'>
      <MyHeader />

      <ChoiceContext.Provider value = {{choice, setChoice}}>

        <NavMenu />
        
        <ElementList displayArray = {workingArray} ToDisplay = {ToDisplay}/>
        
        <ParticularsListing particularsArray = {workingArray} ToDisplay = {ToDisplay} />

        <DisplayListing personArray = {workingArray} index = {index} ToDisplay = {ToDisplay}/>

        {/* InfoListing is the react component that opens up when user clicks on Profile option in navMenu */}

        <InfoListing informationArray = {workingArray} ToDisplay = {ToDisplay}/>

      </ChoiceContext.Provider>
      
      <Footer />
    </div>
    
  )
}


// include opening and closing tag when passing in a function inside React.render()

ReactDom.render(<IndexLayout></IndexLayout>, document.getElementById('root'));