import React, { Component } from 'react';
import axios from 'axios';
import Allstudents from './displayallstudents';

class Addstudent extends Component {
    state = {
          studentfname: "",
          studentlname: "",
          loginemail: "",
          parentname: "",
          parentphonenumber: "",
          studentrecs: ""
        };

    handleInputChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.name : target.value;
      const name = target.type === 'checkbox' ? 'daysofweek' : target.name;
      console.log('The Value in input change',value,name);

      this.setState({
         [name]: value
       } /*,
       () =>{
         console.log('Set State in Main Section',value,name);
       } */);
    };

    handleStudentCreation = (event) => {
        event.preventDefault();
       console.log("In Student Creation");
       let strecs = this.state.studentrecs;

       axios.post('/api/teacher/student/new',
                  {
                    studentfname: this.state.studentfname,
                    studentlname: this.state.studentlname,
                    parentname: this.state.parentname,
                    loginemail: this.state.loginemail,
                    parentphonenumber: this.state.parentphonenumber,
                    batchid: this.props.batchdet.bid
                  })
                  .then(res =>
                    {
                      console.log("The response from adding student",res.data._id);
                      let newstrec = {
                          stdfname : res.data.studentfname,
                          stdlname : res.data.studentlname
                      }
                      strecs.push(newstrec);
                      this.setState({studentrecs : strecs});
                    })
                  .catch(error => console.log("Error!!!!",error)
                ); // End of axios
    }; // end of handleStudentCreation



      render() {
        const bdetails = this.props.batchdet;
            return(
              <div>
                  <h1>Display Batch Details</h1>
                  <h4>Batch details</h4>
                    <h6>{bdetails.bid}</h6>
                    <p>{bdetails.batchid}-{bdetails.batchdesc}</p>
                    <p>{bdetails.subject} {bdetails.level} {bdetails.rateperhour}$</p>
                    <h4>Add Students to the Batch</h4>
                    <form>
                        <label className ="inline">
                            <input type = "text"   value={this.state.studentfname} onChange = {this.handleInputChange} name = "studentfname" />Student Firstname
                         </label>
                        <label className ="inline">
                            <input type = "text"   value={this.state.studentlname} onChange = {this.handleInputChange} name = "studentlname" />Student Lastname
                          </label>
                         <label className ="inline">
                             <input type = "text"   value={this.state.loginemail} onChange = {this.handleInputChange} name = "loginemail" />Email
                         </label>
                         <label className ="inline">
                             <input type = "text"   value={this.state.parentname} onChange = {this.handleInputChange} name = "parentname" />Parent/Guardian name
                         </label>
                         <label className ="inline">
                             <input type = "text"   value={this.state.parentphonenumber} onChange = {this.handleInputChange} name = "parentphonenumber" />Parent Phone number
                         </label>
                          <button className = "btn btn-info"  name = "clcreation" onClick = {this.handleStudentCreation}>Create Student account</button>
                    </form>
                    <Allstudents studentrec = {this.state.studentrecs}/>
              </div>
            ) //end return
      } // end render

} // end class

export default Addstudent;
/*
<div> {this.state.bdetails} = {this.props.batchdet}>

</div> */
