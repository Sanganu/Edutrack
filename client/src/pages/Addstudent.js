import React, { Component } from 'react';
import axios from 'axios';
import Allstudents from './displayallstudents';
import Teacherheader from '../components/Teacherheader';

class Addstudent extends Component {
    state = {
          studentfname: "",
          studentlname: "",
          loginemail: "",
          parentname: "",
          parentphonenumber: "",
          studentrecs: []
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
       if( this.state.studentfname === "" ||
            this.state.studentlname === "" ||
             this.state.loginemail === "" ||
             this.state.parentname === "" ||
             this.state.parentphonenumber === "")
             {
               console.log("Empty fields not accepted");
             }
        else {
        axios.post('/api/teacher/student/new',
                  {
                    studentfname: this.state.studentfname,
                    studentlname: this.state.studentlname,
                    parentname: this.state.parentname,
                    loginemail: this.state.loginemail,
                    parentphonenumber: this.state.parentphonenumber,
                    batchid:
                    this.props.batchdet.bid
                  })
                  .then(res =>
                    {
                       console.log("The response from adding student",res.data._id,"Res",res);
                      let newstrec = {
                          stdfname : res.data.studentfname,
                          stdlname : res.data.studentlname,
                          stdemail : res.data.loginemail
                      }
                      strecs.push(newstrec);
                      this.setState({studentrecs : strecs},
                          () => {
                            this.setState({
                                  studentfname: '',
                                  studentlname: '',
                                  parentname: '',
                                  loginemail: '',
                                  parentphonenumber: '',
                            })
                          });
                    })
                  .catch(error => console.log("Error!!!!",error)
                ); // End of axios
              } //end if
    }; // end of handleStudentCreation



      render() {
        const bdetails = this.props.batchdet;
            return(
              <div>
                 <Teacherheader />
                    <div className = "container">
                            <p>Batch ID:   {bdetails.batchid}</p>
                            <label>Batch description:  {bdetails.batchdesc}</label>
                            <p>Subject:   {bdetails.subject}</p>
                            <label>Level: {bdetails.level}</label>
                            <label>Rate: {bdetails.rateperhour}$</label>
                     </div>
                    <h5 className = "subcr">Add Students to the Batch</h5>
                    <form className = "form-inline">
                        <div className = "form-group">
                            <label className ="inline">Student Firstname </label>
                            <input type = "text"   value={this.state.studentfname} onChange = {this.handleInputChange} name = "studentfname" />
                        </div>
                        <div className = "form-group">
                             <label className ="inline">Student Lastname  </label>
                             <input type = "text"   value={this.state.studentlname} onChange = {this.handleInputChange} name = "studentlname" />
                        </div>
                        <div className = "form-group">
                             <label className ="inline">Email </label>
                             <input type = "text"   value={this.state.loginemail} onChange = {this.handleInputChange} name = "loginemail" />
                        </div>
                         <div className = "form-group">
                             <label className ="inline">Parent/Guardian name   </label>
                             <input type = "text"   value={this.state.parentname} onChange = {this.handleInputChange} name = "parentname" />
                         </div>
                         <div className = "form-group">
                             <label className ="inline">Parent Phone number</label>
                             <input type = "text"   value={this.state.parentphonenumber} onChange = {this.handleInputChange} name = "parentphonenumber" />
                          </div>

                          <button className = "btn btn-info"  name = "clcreation" onClick = {this.handleStudentCreation}>Create Student account</button>
                    </form>
                     <br />
                      <h6 className ="tablehead">Stuent Details </h6>
                      <div className = "table-responsive">
                            <table className = "table table-hover">
                            <tbody>
                             <tr>
                                  <th>Firstname</th>
                                  <th>Lastname</th>
                                  <th>Email</th>
                             </tr>

                               <Allstudents studentrec = {this.state.studentrecs}/>
                            </tbody>
                            </table>
                      </div>
              </div>
            ) //end return
      } // end render

} // end class

export default Addstudent;
