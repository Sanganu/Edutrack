import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Header from "../../components/Header";
import axios from 'axios';

class Main extends Component
{
          state = {
            studentid : '',
            studentpassword: '',
            teacherid : '',
            teacherpassword: ''
          };
          handleInputchange = (event) => {
            const target = event.target;
            const value =  target.value;
            const name = target.name;
            console.log('The Value in input change',value,name);
            this.setState({
               [name]: value
             } /*,
             () =>{
               console.log('Set State in Main Section',value,name);
             } */);
          }

          handleteacherlogin = (event) => {
            event.preventDefault();
            console.log("In the click - before API call");
            window.location = '/teacher/createbatch/' ;
            /*
            axios.get('/api/teachers/login',
                {
                  tid: this.state.teachername,
                  tpwd : this.state.teacherpassword
                })
               .then(res =>
                  {
                    console.log("The response from APi call",res)
                    window.location = '/teacher/myaccount/' + response.id;
                  })
                 .catch(err => console.log(err));*/
          };

           handlestudentLogin = (id) => {
            console.log("In the click - before API call",id)
            axios.get('/api/student/login',
                {
                  stdid:this.state.studentname,
                  stdpwd:this.state.studentpassword
                })
               .then(res =>
                    {
                      console.log("The response from APi call",res);
                     window.location = '/student/myaccount/' + res.id;
                   }
                 )
                 .catch(err => console.log(err));
          };


  render()
  {
    return(
      <div>

          <h2>Teachers Login</h2>
          <form>
                <label className ="inline">
                    <input type = "text"   value={this.state.teacherid} onChange = {this.handleInputchange} name = "teacherid" />User Id
                 </label>
                 <label className ="inline">
                     <input type = "text"  value={this.state.teacherpassword} onChange = {this.handleInputchange} name = "teacherpassword" />Password
                  </label>
                  <button className = "btn btn-info"  name = "getquest" onClick = {this.handleteacherlogin}>Login</button>
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
               </form>
      </div>

    )
  }

}

export default Main;
