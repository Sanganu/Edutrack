import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
                    <Link to ="/teacher/tmain">Teachers login</Link>
                    <Link to ="/other/students/loginpg">Student Login</Link>
                    <Link to ="/other/users">Visitors</Link>
                </div>
           </div>
         );
      }
}

export default Homepage;
