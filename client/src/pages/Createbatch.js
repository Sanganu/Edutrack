import React, { Component } from 'react';
import axios from 'axios';
//import Addstudent from "./Addstudent";

class Createbatch extends Component {
    constructor(props){
        super(props);
        this.state = {
          batchid : "",
          batchdesc:"",
          subject: "Music",
          level: "Beginner",
          rateperhour: '30',
          batchdet: '',
          errmsg : '',
            };
    }


    handleInputChange = (event) => {
          const target = event.target;
          const value = target.value;
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
             console.log("In Class Creatio n state values",this.state);
             var myDate = new Date(this.state.startdate);
             axios.post('/api/teacher/batch/new',
                      {
                            batchid: this.state.batchid,
                            batchdesc : this.state.batchdesc,
                            subject: this.state.subject,
                            level : this.state.level,
                            rateperhour : this.state.rateperhour
                      })
                  .then(response =>
                    {
                        console.log("The response -newbatch- axios call-Createbatcg",response);
                        console.log("The inserted record ID",response.data._id);
                        // this.setState({
                        //       batchid : "",
                        //       batchdesc:"",
                        //       subject: "Music",
                        //       level: "Beginner",
                        //       rateperhour: '30',
                        //
                        // });
                        let newbatch = {
                          bid : response.data._id,
                          batchid : response.data.batchid,
                          batchdesc:response.data.batchdesc,
                          subject: response.data.subject,
                          level: response.data.level,
                          rateperhour: response.data.rateperhour,

                        }
                        this.props.onInsert(newbatch)
                        //window.location = '/teacher/batch/addstudent/'+response._id;
                        //return <Addstudent />
                    })
                    .catch(error => {
                        this.setState({errmsg: error.errstring +" Please check console for further details"});
                        console.log("Error in Adding Batch",error.err);
                    }); //end new batch creation - axios call

        }; // end handleclasscreation

      render() {
        return(
                  <div>

                       <h3 className = "subHeading">Create New Batch</h3>
                       <h5>{this.state.errmsg}</h5>
                    <form>
                        <label className ="inline">Batch ID (numbers only)
                            <input type = "text"   value={this.state.batchid} onChange = {this.handleInputChange} name = "batchid" />
                         </label>
                         <label className ="inline">Batch Description
                             <input type = "text"   value={this.state.batchdesc} onChange = {this.handleInputChange} name = "batchdesc" />
                          </label>
                         <select  value={this.state.subject} onChange = {this.handleInputChange} name ="subject" id="subject">
                             <option value ='Music'>Music</option>
                             <option value ='Piano'>Piano</option>
                             <option value ='Tennis'>Tennis</option>
                             <option value ='Dance'>Dance</option>
                         </select>
                         <label className ="inline">Rate per class per student($)
                             <input type = "text"   value={this.state.rateperhour} onChange = {this.handleInputChange} name = "rateperhour" />
                         </label>
                           <select onChange = {this.handleInputChange} name ="level" id="level">
                                 <option value ='Beginner'>Beginner</option>
                                 <option value ='Intermediate'>Intermediate</option>
                                 <option value ='Advance'>Advance</option>
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
