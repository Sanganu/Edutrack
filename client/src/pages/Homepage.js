import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';

class Homepage extends Component {

      render()
      {
         return (
         <div>
                <Header />
                <div className = "Navbar">
                    <Link to ="/teacher/tmain" className="mainlink">Teachers login</Link><br />
                    <Link to ="/other/students/loginpg" className="mainlink">Student Login</Link><br />
                    <Link to ="/other/users" className="mainlink">Visitors</Link><br />
                </div>
           </div>
         );
      }
}

export default Homepage;
