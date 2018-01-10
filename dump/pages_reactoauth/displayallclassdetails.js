import React,{ Component } from 'react';
import axios from 'axios';

class Allclasses extends Component
{
  //axios.get('/api/teachers/')

    render()
    {
     const classrecs = this.props.classrecs;
      return(<div>
          {classrecs.map((student,index) => (
            <tr key={classrecs._id}><th>{classrecs._id}</th>
                 <th>{classrecs.cldetails}</th>
                 <th>{classrecs.starttimings}</th>
                 <th>{classrecs.endtimings}</th>
                 <th>{classrecs.level}</th>
                 <th>{classrecs.dayofweek}</th>
            </tr>))
          }
      </div>);
    }
}

export default Allclasses;
