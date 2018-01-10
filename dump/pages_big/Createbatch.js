import React, { Component } from 'react';
import axios from 'axios';
//import Addstudent from "./Addstudent";

class Createbatch extends Component {
    state = {
      cldetails: "Music",
      starttimings: "6:00",
      endtimings: "7:00",
      level: "Beginner",
      rate: '30',
      dayofweek: 'Monday',
      batchdet: '',
      errmsg : '',
      displaystudent: 'true'
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

             axios.post('/api/teacher/batch/new',
                      {
                            classdetails : (this.state.cldetails)+(this.state.dayofweek)+(this.state.starttimings),
                            starttimings : this.state.starttimings,
                            endtimings: this.state.endtimings,
                            level : this.state.level,
                            rate : this.state.rate,
                            dayofweek : this.state.dayofweek
                      })
                  .then(response =>
                    {
                      console.log("The response from adding class",response);
                      console.log("The inserted record ID",response.data._id);
                      this.setState({batchdet : response.data});
                      this.props.onInsert(response.data)
                      window.location = '/teacher/batch/addstudent/'+response._id;
                    });
                    .catch(error => {
                        this.setState({errmsg: error.errstring +" Please check console for further details"});
                        console.log("Error in Adding Batch",error.err);
                    }); //end new batch creation - axios call

        }; // end handleclasscreation

      render() {
        return(
                  <div>

                       <h3 className = "subHeading">Create New Class</h3>
                       <h5>{this.state.errmsg}</h5>
                    <form>
                         <select  value={this.state.cldetails} onChange = {this.handleInputChange} name ="cldetails" id="cldetails">
                             <option value ='Music'>Music</option>
                             <option value ='Piano'>Piano</option>
                             <option value ='Tennis'>Tennis</option>
                             <option value ='Dance'>Dance</option>
                         </select>
                        <label className ="inline">Start Timings
                            <input type = "text"   value={this.state.starttimings} onChange = {this.handleInputChange} name = "starttimings" />
                         </label>
                          <label className ="inline">End Timings
                             <input type = "text"   value={this.state.endtimings} onChange = {this.handleInputChange} name = "endtimings" />
                          </label>
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
      } // end of render

} // end class

export default Createbatch;

/*
<label for="sttiming">Start Timings : </label>
<input id="sttimhour" type="number" min="1" max="12" step="1" value ="1"/>
{this.state.displaystudent ? <Addstudent batchd={this.state.batchdet}/> ? null}

*/
