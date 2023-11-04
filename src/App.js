import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './users';
 
function App() {

  return (
    
    <React.Fragment>
      <h3 style={ {textAlign:'center', color:'#EEEEEE', textDecoration: 'underline'} }>Users Details</h3>
      <div className="App">
        
        <Users/>  
        <toDo/>

      </div>
    </React.Fragment>
  );
}

export default App;
