import React, { Component } from "react"

import './App.css'

class App extends Component {

  state = {
    isLogged :  false
  }
     defferentFunc = () => { 
    this.setState(preveState => ({ isLogged: !preveState.isLogged }))
     }
     render() {
         const { isLogged } = this.state 
       const buttonOn = isLogged ? 'Light Mode' : 'Dark Mode';
       const buttonColor = isLogged ? 'Light' : 'Dark ';
         const someEd= isLogged ? 'cont-black' : 'cont-white'
         const heading = isLogged ? 'white' : 'black';
         return (
           <diV className="main-cont">
             <div className ={`sub-cont ${someEd}`}>
               <h1 className={`${heading}`}>Click To Change Mode</h1>
               <button className={`${buttonColor}`} onClick={this.defferentFunc}>{buttonOn }</button>
             </div>
           </diV>
         )
       }
       }
       export default App
       
  
      
  
    

    
    
      
   
   
   

   
             


        
        

    