import React, { Component } from 'react';
import Jumbotron from "./../components/Jumbotron";
import Header from "./../components/Header";
import axios from 'axios';

class Addstudent extends Component {
    state = {
          studentfname: "",
          studentlname: "",
          parent1name: "",
          parent2name: "",
          parent1email: "",
          parent2email: "",
          parent1phnumber: "",
          parent2phnumber: ""
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

    handleStudentCreation = () => {
       console.log("In Student Creation");
       let classid = 0 ///logic need to be written

       axios.post('/api/batch/student/new',
                  {
                    studentfname: this.state.studentfname,
                    studentlname: this.state.studentlname,
                    parent1name: this.state.parent1name,
                    parent2name: this.state.parent2name,
                    parent1email: this.state.parent1email,
                    parent2email: this.state.parent2email,
                    parent1phnumber: this.state.paretn1phnumber,
                    parent2phnumber: this.state.parent2phnumber
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
    componentDidMount = () => {
         axios.get('/api/batch/',{id:this.props.classid})
             .then( response => {
                  console.log("The Response",response);

             })
           .catch(error => console.log("Error!!!!",error)
         );
      }

      render() {
        return(
          <div>
              <h1>Display Bathc Details</h1>
                <h4>Add Students to the Batch</h4>
                <form>
                    <label className ="inline">
                        <input type = "text"   value={this.state.studentfname} onChange = {this.handleInputChange} name = "studentfname" />Class Details
                     </label>
                    <label className ="inline">
                        <input type = "text"   value={this.state.studentlname} onChange = {this.handleInputChange} name = "studentlname" />Timings
                     </label>
                     <label className ="inline">
                         <input type = "text"   value={this.state.parent1name} onChange = {this.handleInputChange} name = "parent1name" />parent1name
                     </label>
                     <label className ="inline">
                         <input type = "text"   value={this.state.parent2name} onChange = {this.handleInputChange} name = "parent2name" />parent2name
                     </label>
                     <label className ="inline">
                         <input type = "text"   value={this.state.parent1email} onChange = {this.handleInputChange} name = "parent1email" />parent1email
                     </label>
                     <label className ="inline">
                         <input type = "text"   value={this.state.parent2email} onChange = {this.handleInputChange} name = "parent2email" />parent2email
                      </label>
                     <label className ="inline">
                         <input type = "text"   value={this.state.parent1phnumber} onChange = {this.handleInputChange} name = "parent1phnumber" />parent1phnumber
                     </label>
                     <label className ="inline">
                         <input type = "text"   value={this.state.parent2phnumber} onChange = {this.handleInputChange} name = "parent2phnumber" />parent2phnumber
                     </label>
                    <button className = "btn btn-info"  name = "clcreation" onClick = {this.handleStudentCreation}>Create Class details</button>
                </form>

          </div>
        ) //end return
      } // end render

} // end class

export default Addstudent;
