import React, { Component, Link } from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';

class Studentlogin extends Component
{
    render()
    {
      return(
        <form className="fields">
                    <label id = "ht-fname" name = "htfname">First Name</label><br />
                    <input classame ="materialize-textarea" type="text" name="htuser_fname" id = "htuser_fname" ><br />
                    <label id = "ht-lname" name = "htfname">Last Name</label><br />
                   <input className ="materialize-textarea" type="text" name="htuser_lname" id ="htuser_lname" ><br />
                     <label id ="ht-yesnoemail">Email Addess</label><br />
                    <input className ="materialize-textarea" type="text" name="htemail" id = "htemail"><br />
                    <label id = "ht-yesnopwd1">Password</label><br />
                    <input className ="materialize-textarea" type="text" name="htpassword" id = "htpassword"><br />
                    <label id = "ht-yesnopwd2">Confirm Password</label><br />
                    <input className ="materialize-textarea" type="text" name="htconfirmpassword" id = "htconfirmpassword" ><br />
                    <button className="btn waves-effect waves-light" id = "htnewuser">Create Account</button>
            </form>
      )
    }



}


export default Studentlogin;
