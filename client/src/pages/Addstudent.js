import React, { Component } from 'react';
import axios from 'axios';

class Addstudent extends Component {
    state = {
          studentfname: "",
          studentlname: "",
          parentname: "",
          loginemail: "",
          parentphonenumber: "",
          bdetails: ""
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

       axios.post('/api/teacher/student/new',
                  {
                    studentfname: this.state.studentfname,
                    studentlname: this.state.studentlname,
                    parentname: this.state.parentname,
                    loginemail: this.state.loginemail,
                    parentphonenumber: this.state.parentphonenumber,
                    batchid: this.state.bdetails._id
                  })
                  .then(res =>
                    {
                      console.log("The response from adding student",res);
                      window.location.reload();
                    })
                    .catch(error => console.log("Error!!!!",error)
                  );
    };
    // Axios request about class details
    /*componentDidMount = () => {
         axios.get('/api/batch/',{id:this.props.classid})
             .then( response => {
                  console.log("The Response",response);

             })
           .catch(error => console.log("Error!!!!",error)
         );
      }
*/
      render() {
        return(
          <div>
              <h1>Display Batch Details</h1>
              <h4>Batch details</h4>

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
                      <button className = "btn btn-info"  name = "clcreation" onClick = {this.handleStudentCreation}>Create Class details</button>
                </form>
          </div>
        ) //end return
      } // end render

} // end class

export default Addstudent;
/*
<div> {this.state.bdetails} = {this.props.batchdet}>

</div> */
