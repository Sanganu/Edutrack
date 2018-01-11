import React,{ Component } from 'react';
import axios from 'axios';

class Allstudents extends Component
{
  state = {
    studentrecords: []
  }
 //axios.get('/api/teachers/')
 componentDidMount = () => {
   console.log("Inside component did mount before placing the axios call");
   let batchrecords = this.state.batchrecords;

   axios.get('/api/teacher/student/all/:batchid')
       .then(response =>
         {
             //console.log("The Batch Details of  ",response.data);
             for (let i =0; i<response.data.length;i++)
             {
                console.log("Records",response.data[i]._id,response.data[i].batchdesc,response.data[i].batchid,response.data[i].subject,response.data[i].level,response.data[i].rateperhour);
                  let currentrec = {
                          recid: response.data[i]._id,
                          recbatid: response.data[i].batchid,
                          recsubj: response.data[i].subject,
                          reclevel: response.data[i].level,
                          recrate: response.data[i].rateperhour
                  }
                batchrecords.push(currentrec);
              } // end for
           this.setState({batchrecords : batchrecords}, () => { console.log("State of records",this.state.batchrecords)});
         }) // end then
         .catch( error => {
           console.log("Error in getting batch records!!!",error);
         })
 } // end component did mount


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
