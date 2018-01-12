import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import Allbatches from './displayallbatchdetails';
import Batchmain from './Batchmain';
import Createbatch from './Createbatch';
import Visitors from './Visitors';
import Header from '../components/Header';

class Teachermain extends Component
{
         constructor(props)
         {
           super(props);
           this.state = {
            canenter : '',
            invalid:'',
            vemail:'',
            vpword:'',
            logindisp : true
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


         logincheck = (event) => {
               event.preventDefault();
               console.log("Teacher's login plan is to implement OAuth, but feature deferred due to lack of time");
               console.log("Use myemail@yahoo.com and welcome to enter site ");
               console.log(this.state.vemail, this.state.vpword);

               if (this.state.vemail === "myemail@yahoo.com" &&
                   this.state.vpword === "welcome")
                   {
                      console.log('if valid');
                    // window.location = '/teacher/batchmain/';
                     this.setState ({
                          canenter: true,
                          invalid:false,
                          logindisp: false
                     })
                   }
                else {

                    this.setState({invalid : true});
                }
         }


          render()
          {
                  return( <div>

                        {this.state.logindisp ?
                             <div>
                             <Header />
                            <form className="fields">
                                 <div className = "form-group">
                                    <label id ="lemail">Email Addess</label><br />
                                    <input className="textarea" onChange = {this.handleInputChange} type="text" name="vemail" value={this.state.vemai} /><br />
                                </div>
                                <div className = "form-group">
                                    <label id = "lpsword">Password</label><br />
                                    <input className="textarea" onChange = {this.handleInputChange} type="password" name="vpword" value ={this.state.vpword} /><br />
                                </div>
                              </form> <br />
                              <button className ="btn btn-lg btn-info" id = "blogin" onClick={this.logincheck}>Login</button>
                              </div>
                          : <div></div>}
                              {this.state.canenter ? <Allbatches /> : <div></div>}
                              {this.state.invalid ? <div>
                                                         <h6 className ="errmsg">Invalid Credentials - Please use right credentials</h6>
                                                      </div>: <div></div>}

                         </div>
                  ) ; //end return
          } //end render

} //end class Teacher Main

export default Teachermain;

/*
<label className ="inline">
    <input type = "text"   value={this.state.teacherid} onChange = {this.handleInputchange} name = "teacherid" />User Id
 </label>
 <label className ="inline">
     <input type = "text"  value={this.state.teacherpassword} onChange = {this.handleInputchange} name = "teacherpassword" />Password
  </label>
  <button className = "btn btn-info"  name = "getquest" onClick = {this.handleteacherlogin}>Login</button>
</form>
</form>
<h2>Students Login</h2>
 <h5>Please use your signin credentials assigned to you</h5>
<form>
     <label className ="">
        <input value={this.state.studentid}
               onChange={this.handleInputChange}
               name="studentid"
               placeholder="Enter your Student ID"
               type = "text"
         />

      </label>      <label className ="">
         Enter your password
         <input value={this.state.studentpassword}
                onChange={this.handleInputChange}
                name="studentpwd"
                placeholder="Enter your PIN"
          />

       </label>
       <button className="btn btn-info" name="stlogin"  onClick = {this.handlestudentLogin}>Login</button>



          nextcomp = (event) =>
          {
                const itlink = event.target.name;
                if ( itlink === "batchmain")
                {
                  console.log("batchmain");
                    return <Batchmain />
                }
                else if( itlink === "search")
                {
                  console.log("search")
                }
          } */
