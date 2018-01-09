import React, { Component } from 'react';
import Createbatch from './Createbatch';
import Addstudent from './Addstudent';
import Allstudents from './displayallstudents';

//Need to api call for Google calendar

class Teachermain extends Component {
      constructor(props) {
          super(props);
          this.state = {
            displaybatch : "true",
            batchdet : "",
            studentdet : []
          }
      };

      handleStudentAdded = (newstudent) => {
        let studentdet = this.state.studentdet;
        studentdet.push(newstudent);
        this.setState({ studentdet },
          () => {
            console.log('Setstate callback',this.state.studentdet);
          });
      };

      handleBatchCreated = (newbatchdata) => {
        //event.preventDefault();
        console.log("In parent compo - batch create method")
        this.setState({
            batchdet : newbatchdata },
            () => {
              console.log('Setstate callback level1',this.state.batchdet);
              this.setState({  displaybatch : false},
                () => {
                   console.log('Setstate callback level2',this.state.displaybatch);
                 });
            });
      };

      render() {
        const displaybatch = this.state.displaybatch;
        const batchdet = this.state.batchdet;

        return(
           <div>
               <h1> Teacher Page - Create new batch</h1>
               {this.state.displaybatch ? <Createbatch displayme ={displaybatch}
                                                       batchdet = {batchdet}
                                                       onInsert={this.handleBatchCreated} />
                                       : <Addstudent batchdet = {batchdet}
                                                     onchange = {this.handleStudentAdded} />}
                <table>
                <Allstudents studentrec = {this.state.studentdet}
                </table>

           </div>
        ) // end return
      }// end render

} // end class Batchmain

export default Batchmain;
