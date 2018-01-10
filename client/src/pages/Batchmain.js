import React, { Component } from 'react';
import Createbatch from './Createbatch';
import Addstudent from './Addstudent';
//import Allstudents from './displayallstudents';
//import Allbatches from './displayallbatchdetails';
import axios from 'axios';

//Need to api call for Google calendar

class Batchmain extends Component {
      constructor(props) {
          super(props);
          this.state = {
          batchid : ''
          }
      };



      handleBatchCreated = (newbatchdata) => {
        //event.preventDefault();
        const batchid = newbatchdata;


        console.log("In parent compo - batch create method");

        this.setState({
            batchid : batchid},
            () => {
              console.log('Setstate callback level1',this.state.batchdet);
            }); //end this state
      }; // end handlebatchcreated

      render() {
        //const batchdet = this.state.batchdet;
        const  brecords = this.state.batchrecords;

        return(
           <div>
               <h1> Teacher Page - Batch Details</h1>
                <Createbatch    onInsert={this.handleBatchCreated} />
           </div>
        ) // end return
      }// end render

} // end class Batchmain

export default Batchmain;
