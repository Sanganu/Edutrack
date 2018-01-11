import React, { Component, Link } from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';

class Studentlogin extends Component
{
    render()
    {
      return(
        import React, { Component } from 'react';
        //import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
        import ReactDOM from 'react-dom';
        import Allbatches from './displayallbatchdetails';
        import Batchmain from './Batchmain';
        import Createbatch from './Createbatch';
        import Visitors from './Visitors';

        class Teachermain extends Component
        {
                 constructor(props)
                 {
                   super(props);
                   this.state = {
                    canenter : '',
                    invalid:'',
                    vemail:'',
                    vpword:''
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
                                  invalid:false
                             })
                           }
                        else {

                            this.setState({invalid : true});
                        }
                 }


                  render()
                  {
                          return(<div>
                                <form className="fields">
                                        <label id ="lemail">Email Addess</label><br />
                                        <input className="textarea" onChange = {this.handleInputChange} type="text" name="vemail" value={this.state.vemai} /><br />
                                        <label id = "lpsword">Password</label><br />
                                        <input className="textarea" onChange = {this.handleInputChange} type="password" name="vpword" value ={this.state.vpword} /><br />
                                  </form>
                                  <button className ="btn btn-large-info" id = "blogin" onClick={this.logincheck}>Login</button>

                                      {this.state.canenter ? <Allbatches /> : <div></div>}
                                      {this.state.invalid ? <div>
                                                                 <h1>Invalid Credentials - Please use right credentials</h1>
                                                              </div>: <div></div>}

                            </div>
                          ) ; //end return
                  } //end render

        } //end class Student Main


      )
    }



}


export default Studentlogin;
