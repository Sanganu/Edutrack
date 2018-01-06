import React, { Component } from 'react';
import Jumbotron from "./../components/Jumbotron";

//Need to api call for Google calendar

class Teachermain extends Component {

      handleClassCreation = () => {
        console.log("in handleclass creation");
        //window.location = '/teacher/createbatch';
      }

      render() {
        return(
           <div>
               <h1> Teacher Main Page</h1>
                  <button className = "btn btn-info"  name = "clcreation" onClick = {this.handleClassCreation}>Create New Bath details</button>
               <h1>Batch Details</h1>
               <table>
               </table>

           </div>
        )
      }

}

export default Teachermain;
