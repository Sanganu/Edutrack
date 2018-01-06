import React, { Component } from 'react';
import Jumbotron from "./../components/Jumbotron";
import Header from "./../components/Header";
import axios from 'axios';


class Createbatch extends Component {
    state = {
      cldetails: "Music",
      timings:"6:00 - 7:00 PM",
      level: "Beginner",
      daysofweek: []
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
    handleClassCreation = () => {
       console.log("In Class Creation");
       let classid = 0 ///logic need to be written

       axios.post('/api/batch/new',
                  {
                    classdetails : this.state.classdetails,
                    timings : this.state.timnigs,
                    level : this.state.level,
                    rate : this.state.rate,
                    daysoftheweek : this.state.daysofweek
                  })
                  .then(response =>
                    {
                      console.log("The response from adding class",response);
                      window.location = '/teacher/batch/addstudent'+response.id;
                    })
                    .catch(error => console.log("Error!!!!",error));
    };
    componentDidMount = () => {

    }
      render() {
        return(
          <div>
            <ul>
               <li>Create New Class</li>
            </ul>
            <form>
                <label className ="inline">
                    <input type = "text"   value={this.state.classdetails} onChange = {this.handleInputChange} name = "cldetails" />Class Details
                 </label>
                <label className ="inline">
                    <input type = "text"   value={this.state.timings} onChange = {this.handleInputChange} name = "timings" />Timings
                 </label>
                 <label className ="inline">
                     <input type = "text"   value={this.state.level} onChange = {this.handleInputChange} name = "Level" />Level
                 </label>
                 <label className ="inline">
                     <input type = "text"   value={this.state.rate} onChange = {this.handleInputChange} name = "rate" />Rate
                 </label>
                 <label className ="checkbox-inline cloptions">
                         <input type = "checkbox"  checked={this.props.sunday} onChange = {this.handleInputdesc} name = "thursday" />Sunday
                  </label>
                <label className ="checkbox-inline cloptions">
                      <input type = "checkbox"  checked={this.props.monday} onChange = {this.handleInputdesc} name = "monday" />Monday
                 </label>
                 <label className ="checkbox-inline cloptions">
                       <input type = "checkbox"  checked={this.props.tuesday} onChange = {this.handleInputdesc} name = "tuesday" />Tuesday
                 </label>
                 <label className ="checkbox-inline cloptions">
                        <input type = "checkbox"  checked={this.props.wednessday} onChange = {this.handleInputdesc} name = "wednesday" />Wednessday
                 </label>
                 <label className ="checkbox-inline cloptions">
                         <input type = "checkbox"  checked={this.props.thursday} onChange = {this.handleInputdesc} name = "thursday" />Thursday
                  </label>
                  <label className ="checkbox-inline cloptions">
                          <input type = "checkbox"  checked={this.props.friday} onChange = {this.handleInputdesc} name = "friday" />Friday
                   </label>
                   <label className ="checkbox-inline cloptions">
                           <input type = "checkbox"  checked={this.props.saturday} onChange = {this.handleInputdesc} name = "saturday" />Saturday
                    </label>

                 <button className = "btn btn-info"  name = "clcreation" onClick = {this.handleClassCreation}>Create Batch</button>
            </form>
          </div>
        ) // end of return
      } // end og render

} // end class

export default Createbatch;
