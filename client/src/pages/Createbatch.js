import React, { Component } from 'react';
import axios from 'axios';
import Teacherheader from '../components/Teacherheader';

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
    /*
    componentDidMount = () => {
          console.log("In component Did mount");
          axios.get('/api/teacher/batch/maxid')
               .then(response =>
                 {
                   console.log("The max batch id",response,"Data ;",response.data);
                   this.setState({batchid : response.data.value+1});
                 })
                 .catch(error => {
                     this.setState({errmsg: error.errstring +" Please check console for further details"});
                     console.log("Error in getting max value -batchid",error.err);
                 });

    }
    */
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
             if( this.state.batchid === "" ||
                 this.state.batchdesc === "" ||
                 this.state.subject === "" ||
                 this.state.level === "" ||
                this.state.rateperhour === "")
                {
                  console.log("No Empty Fields Enter valid data");
                  this.setState({errmsg : "No Empty Fields Enter valid data"});
                }
            else {
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
                  } //end if
        }; // end handleclasscreation

      render() {
        return(
                  <div>
                            <Teacherheader />
                           <h5 className = "subcr">Create New Batch</h5>
                           <p className="errmsg">{this.state.errmsg}</p>
                        <form className = "form-horizontal">
                            <div className = "form-group">
                               <label className ="inline">Batch ID (numbers only) :  </label>
                               <input type = "text"   value={this.state.batchid} onChange = {this.handleInputChange} name = "batchid" /><br />
                             </div>
                             <div className = "form-group">
                                 <label className ="inline">Batch Description  </label>
                                 <input type = "text"   value={this.state.batchdesc} onChange = {this.handleInputChange} name = "batchdesc" /><br />
                             </div>
                             <div className = "form-group">
                                     <label className ="inline">Subject :   </label>
                                     <select  value={this.state.subject} onChange = {this.handleInputChange} name ="subject" id="subject">
                                         <option value ='Music'>Music</option>
                                         <option value ='Piano'>Piano</option>
                                         <option value ='Dance'>Dance</option>
                                     </select><br />
                             </div>
                             <div className = "form-group">
                                 <label className ="inline">Rate per class per student($) </label>
                                 <input type = "text"   value={this.state.rateperhour} onChange = {this.handleInputChange} name = "rateperhour" />
                            </div>
                            <div className = "form-group">
                                 <label className ="inline">Level : </label>
                                 <select onChange = {this.handleInputChange} name ="level" id="level">
                                     <option value ='Beginner'>Beginner</option>
                                     <option value ='Intermediate'>Intermediate</option>
                                     <option value ='Advance'>Advance</option>
                                 </select>
                            </div>
                             <button className = "btn btn-info"  name = "clcreation" onClick = {this.handleClassCreation}>Create Batch</button>
                        </form>
                  </div>
              ) // end of return
      } // end of render

} // end class

export default Createbatch;
