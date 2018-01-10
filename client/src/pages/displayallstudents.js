import React,{ Component } from 'react';
import axios from 'axios';

class Allstudents extends Component
{

    render()
    {
           const studentrec = this.props.studentrec;
            return(<div>
                {studentrec.map((student,index) => (
                  <tr key={studentrec._id}><th>{studentrec.studentfname}</th>
                       <th>{studentrec.studentlname}</th>
                       <th>{studentrec.loginemail}</th>
                  </tr>))}
            </div>
            );
    }
}

export default Allstudents;
