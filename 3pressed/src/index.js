import React from 'react';
import ReactDom from 'react-dom';

// import CSS
import './/CSS/main.css';


// import navMenu
import {NavMenu} from './GlobalElements/Navigation';

// import grid of choices for index.html
import ElementList from './IndexElement/Element';

// header for company name
import {MyHeader} from './GlobalElements/companyHeader';

// function that returns the whole page
function IndexLayout() {

  return (
    <div className= 'main'>
      <MyHeader />
      
      <NavMenu />

      {<ElementList />}
      
    </div>
    
  )
}


// include opening and closing tag when passing in a function inside React.render()

ReactDom.render(<IndexLayout></IndexLayout>, document.getElementById('root'));