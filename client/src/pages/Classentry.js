import React, { Component } from 'react';
import axios from 'axios';
import Teacherheader from '../components/Teacherheader';

class Classentry extends Component
{
      constructor(props)
      {
        super(props);
        this.state = {
          currentrecord : {},
          lessoncovered: '',
          homework: ''
        }
      };
      componentDidMount = () =>
      {
        let currentrecord = this.state.currentrecord;
        console.log("In component did mount");
        let bid = "5a58a6d5b14acb2ba075cd2c"
        axios.get('/api/teacher/batch/:'+bid)
            .then(response =>
              {
                  // console.log("Records",response.data[i]._id,response.data[i].batchdesc,response.data[i].batchid,response.data[i].subject,response.data[i].level,response.data[i].rateperhour);
                     currentrecord = {
                             recid: response.data._id,
                             recdesc: response.data.batchdesc,
                             recbatid: response.data.batchid,
                             recsubj: response.data.subject,
                             reclevel: response.data.level,
                     } //end let
              this.setState({currentrecord}, () => { console.log("State of records",this.state.currentrecord)});
              }) //end then
              .catch( error => {
                console.log("Error in getting batch records!!!",error);
              });

        } // end Component Did mount
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
        handleClassDetails = (event) => {
                event.preventDefault();
                 console.log("In Class Creatio n state values",this.state);
                 var myDate = new Date(this.state.startdate);
                 if( this.state.lessonvovered === "" ||
                     this.state.homework === "" )
                    {
                      console.log("No Empty Fields Enter valid data");
                      this.setState({errmsg : "No Empty Fields Enter valid data"});
                    }
                else {
                 axios.post('/api/teacher/batch/class/new',
                          {
                                lessonvovered: this.state.lessoncovered,
                                homework : this.state.homework,
                                batch: this.state.currentrecord.recid,
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
                            console.log("Error in Adding class details",error.err);
                        }); //end new batch creation - axios call
                      } //end if
            }; // end handleclasscreation

      render()
      {
        return(<div>
                   <Teacherheader />
                   <div>
                      <h6> Batchdetails</h6>
                       <label>Batch ID:{this.state.currentrecord.recbatid}</label>
                       <label>Batch Description:{this.state.currentrecord.recdesc}</label>
                       <label>Subject:{this.state.currentrecord.recsubj}</label>
                       <label>Level:{this.state.currentrecord.reclevel}</label>
                    </div>
                    <form>
                          <div className="form-group">
                          <label>Lesson Covered Details</label>
                          <input type = "text"   value={this.state.lessoncovered} onChange = {this.handleInputChange} name = "lessoncovered" /><br />
                          </div>
                          <div className="form-group">
                          <label>Homework Assigned</label>
                          <input type = "text"   value={this.state.homework} onChange = {this.handleInputChange} name = "homwork" /><br />
                          </div>
                          <button className = "btn btn-info"  name = "cldetails" onClick = {this.handleClassDetails}>Save Class details</button>
                    </form>
        </div> )
      }
}

export default Classentry;
