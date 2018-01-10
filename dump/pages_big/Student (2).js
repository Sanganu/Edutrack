import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import axios from "axios" ;

class StudentLogin extends Component {
    state = {
      lgname: "10001",
      lgpwd:"Alkeys",
    };
    handleInputChange =(value,name) => {

         this.setState({
            [name]: value
          },
          () =>{
            console.log('Set State in Main Section',value,name);

          });
    }
    handleLogin = () => {
        let id = this.state.lgname;
        console.log("In the click - call function")
        this.getStudentDetails(id);
    }

    getStudentDetails = (id) => {
      console.log("In the click - before API call",id)
      axios.get('/api/students/login',
          {
            stdid:this.state.lgname,
            stdpwd:this.state.lgpwd
          })
         .then(res =>
              console.log("The response from APi call",res)
           )
           .catch(err => console.log(err));
    };

      render() {
        return(
          <fieldset>
               <Jumbotron>
                  <h2>Homework tracking system</h2>
                  <h4></h4>
               </Jumbotron>
               <h5>Please use your signin credentials assigned to you</h5>
               <form>
               <label className ="">
                  <input value={this.state.lgname}
                         onChange={this.handleInputChange}
                         name="lgname"
                         placeholder="Enter your Username"
                         type = "text"
                   />

                </label>
                <label className ="">
                   Enter your password
                   <input value={this.state.lgpwd}
                          onChange={this.handleInputChange}
                          name="lgname"
                          placeholder="Enter password"
                    />

                 </label>
                 <button className="btn btn-info" name="stlogin"  onClick = {this.handleLogin}>Login</button>
               </form>
          </fieldset>
        )
      }

}

export default StudentLogin;
