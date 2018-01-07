import React, { Component } from 'react';
import Jumbotron from "./../components/Jumbotron";
import Header from "./../components/Header";
import axios from 'axios';


class Createbatch extends Component {
    state = {
      cldetails: "Music",
      starttimings: "6:00",
      endtimings: "7:00",
      level: "Beginner",
      rate: '30',
      dayofweek: 'Monday'
        };

    handleInputChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.name : target.value;
      const name  = target.name;
      console.log('The Value in input change',value,name);

      this.setState({
         [name]: value
       } /*,
       () =>{
         console.log('Set State in Main Section',value,name);
       } */);
    };

    handleClassCreation = (event) => {
      event.preventDefault();
       console.log("In Class Creation state values",this.state);

       axios.post('/api/batch/new',
                  {
                    classid: "124",
                    classdetails : this.state.cldetails,
                    starttimings : this.state.starttimings,
                    endtimings: this.state.endtimings,
                      level : this.state.level,
                      rate : this.state.rate,
                    dayofweek : this.state.dayofweek
                  })
                  .then(response =>
                    {
                      console.log("The response from adding class",response);
                      window.location = '/teacher/batch/addstudent'+response._id;
                    })
                    .catch(error => console.log("Error!!!!",error));
    };


      render() {
        return(
          <div>
            <ul>
               <li>Create New Class</li>
            </ul>
            <form>
                <label className ="inline">
                    <input type = "text"   value={this.state.cldetails} onChange = {this.handleInputChange} name = "cldetails" />
                 </label>
                <label className ="inline">Timings
                    <input type = "text"   value={this.state.timings} onChange = {this.handleInputChange} name = "starttimings" />
                 </label>
                 <
                 <label className ="inline">Level
                     <input type = "text"   value={this.state.level} onChange = {this.handleInputChange} name = "Level" />
                 </label>
                 <label className ="inline">Rate
                     <input type = "text"   value={this.state.rate} onChange = {this.handleInputChange} name = "rate" />
                 </label>

                 <select onChange = {this.handleInputChange} name ="dayofweek" id="dayofweek">
                     <option value ='Sunday'>Sunday</option>
                     <option value ='Monday'>Monday</option>
                     <option value ='Tuesday'>Tuesday</option>
                     <option value ='Wednesday'>Wednesday</option>
                     <option value ='Thursday'>Thursday</option>
                     <option value ='Friday'>Friday</option>
                     <option value ='Saturday'>Saturday</option>
                 </select>
                 <button className = "btn btn-info"  name = "clcreation" onClick = {this.handleClassCreation}>Create Batch</button>
            </form>
          </div>
        ) // end of return
      } // end og render

} // end class

export default Createbatch;
