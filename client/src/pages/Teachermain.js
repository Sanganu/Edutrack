import React, { Component, Link } from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import Allbatches from './displayallbatchdetails';
import Batchmain from './Batchmain';
import Createbatch from './Createbatch';


class Teachermain extends Component
{
         constructor(props)
         {
           super(props);
           this.state = {
            canenter : false,
            vemail:'',
            vpword:''
           };
         }
         logincheck = (event) => {
           event.preventDefault();
           console.log("Teacher's login plan is to implement OAuth, but feature deferred");
           console.log("Use myemail@yahoo.com abd welcome to enter site ");
           if (this.state.vemail === "myemail@yahoo.com" &&
               this.state.vpword === "welcome")
               this.setState({canenter : true});
            else {
                this.setState({canenter : false});
            }
         }


          render()
          {
                  return(<div>
                        <form class="fields">
                                <label id ="lemail">Email Addess</label><br />
                                <input class="textarea" type="text" name="this.state.vemail" id = "this.state.vemail" /><br />
                                <label id = "lpsword">Password</label><br />
                                <input class="textarea" type="password" name="this.state.vpword" id = "this.state.vpword" /><br />
                                <button class="btn btn-large-info" id = "blogin" onClick={this.logincheck}>Login</button>
                          </form>
                              {this.state.canenter ? <Allbatches />
                                                    : <div>
                                                         <h1>Invalid Credentials - Please use right credentials</h1>
                                                      </div>}

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

      </label>
      <label className ="">
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
