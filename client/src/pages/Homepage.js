import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './components/header';

class Homepage extends Component {

      render()
      {
         return (
         <div>
                 <div className = "Jumbotron">
                     <h1>Giksha Solutions</h1>
                     <h3>Class management solution for Independant Teachers</h3>
                </div>
                <div className = "Navbar">
                    <Link to ="/teacher/tmain">Teachers login</Link><br />
                    <Link to ="/other/students/loginpg">Student Login</Link><br />
                    <Link to ="/other/users">Visitors</Link><br />
                </div>
           </div>
         );
      }
}

export default Homepage;
