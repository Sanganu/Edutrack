import React, { Component, Link } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Studentmain from './Studentmain';


class Studentlogin extends Component
{
             constructor(props)
                 {
                   super(props);
                   this.state = {
                          canenter : '',
                          invalid:'',
                          vemail:'',
                          vpword:'',
                          vuname: '',
                          showstlogin: true,
                          studentrecord:''
                     };

                 } //end constructor
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
                 }; //end handle input cjange


                 logincheck = (event) => {
                       event.preventDefault();
                       console.log("Student's Login");
                       if (this.state.vemail === "" ||
                           this.state.vpword === "" ||
                           this.state.vuname === "")
                           {
                              console.log('Enter Valid Credentials in all fields');
                            // window.location = '/teacher/batchmain/';

                           }
                        else {
                          console.log(this.state.vemail, this.state.vpword,this.state.vuname);
                           axios.post('/api/others/student/login',
                                  {
                                    semail: this.state.vemail,
                                    suname : this.state.vuname,
                                    spword: this.state.vpword
                                  })
                                  .then( response =>
                                   {
                                     if(response.data !== null)
                                     {
                                       console.log("The response from student login valid",response);
                                       this.setState({canenter : true,
                                                      invalid : false,
                                                      showstlogin:false,
                                                      studentrecord:response.data});
                                     }
                                     else {
                                       this.setState({errmsg: " Invalid Credentials .. Enter valid credentials"});
                                       console.log("Student Login details- invalid ");
                                       this.setState({canenter : false,
                                                      invalid: true});
                                     }


                                   })
                                   .catch(error => {
                                       this.setState({errmsg: error.errstring +" Invalid Credentials .. Enter valid credentials"});
                                       console.log("Error in validating student login ",error.err);
                                       this.setState({canenter : false,
                                                      invalid: true});
                                   });
                          } //end else

                 } // end login check


                  render()
                  {
                          return(<div>
                                 {this.state.showstlogin ?
                                   <div>
                                            <h3>Student Login </h3>
                                            <form className="fields">
                                                    <label id ="lemail">Email Addess</label><br />
                                                    <input className="textarea" onChange = {this.handleInputChange} type="text" name="vemail" value={this.state.vemai} /><br />
                                                    <label id ="lemail">User Name</label><br />
                                                    <input className="textarea" onChange = {this.handleInputChange} type="text" name="vuname" value={this.state.vuname} /><br />
                                                    <label id = "lpsword">Password</label><br />
                                                    <input className="textarea" onChange = {this.handleInputChange} type="password" name="vpword" value ={this.state.vpword} /><br />
                                              </form>
                                              <button className ="btn btn-large-info" id = "blogin" onClick={this.logincheck}>Login</button>
                                   </div>
                                  :  <div></div> }
                                  {this.state.canenter ? <Studentmain studentdet = {this.state.studentrecord}/> : <div></div>}
                                  {this.state.invalid ? <div>
                                                       <h1>Invalid Credentials - Please use right credentials</h1>
                                                      </div>: <div></div>}
                              </div>
                           ) ; //end return
                  } //end render

} //end class Student Main


export default Studentlogin;
