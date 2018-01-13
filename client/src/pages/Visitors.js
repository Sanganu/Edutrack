import React, { Component } from 'react';
import axios from 'axios';
import Teacherheader from '../components/Teacherheader';

class Visitors extends Component
{
      render()
      {
           return(<div className = "vcontent">
                 <Teacherheader />
                 <table class = "table-bordered">
                    <tbody>
                      <tr>
                        <td>Teacher</td>
                        <td>Ms.Sudha Ragunathan</td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>223-345-9182</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>sudharam@gmail.com</td>
                      </tr>
                    </tbody>
                 </table>
                 <br />
                 <h5>Upcoming Events</h5>
                 <br />
                 <table class = "table-bordered">
                    <tbody>
                      <tr>
                        <td>Music Accademy</td>
                        <td>Feb 14th</td>
                      </tr>
                      <tr>
                        <td>Dance Schools of colorado</td>
                        <td>Feb 24th</td>
                      </tr>
                      <tr>
                        <td>Smith Musicals</td>
                        <td>Mar 11</td>
                      </tr>
                    </tbody>
                 </table>

           </div>)
      }
}

export default Visitors
