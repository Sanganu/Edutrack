import React,{ Component } from 'react';
import axios from 'axios';
import Listbatch from 'Listbatch';

class Allbatches extends Component
{
   state = {
     batchrecords: []
   }
  //axios.get('/api/teachers/')
  componentDidMount = () => {
    console.log("Inside component did mount before placing the axios call");
    let batchrecords = this.state.batchrecords;

    axios.get('/api/teacher/batch/all')
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

   deletebatchdetails = (event) => {
     event.preventDefault();
     console.log("Event is",event,": key :",event.key);
   }

    render()
    {
      //const classrecs = this.state.bacthrecords;
      return(<div>
              <h1>All Batches</h1>
              <table>
              <tbody>
              {this.state.batchrecords.map((classrecs,index) =>
                <tr >
                     <th><p>{classrecs.recbatit}</p></th>
                     <th>{classrecs.recbatid}</th>
                     <th>{classrecs.recsubj}</th>
                     <th>{classrecs.reclevel}</th>
                     <th>{classrecs.recrate}</th>
                     <th><button className =".deletebatch" key = {classrecs.recid} onClick = {this.deletebatchdetails}>Delete Batch</button></th>
                     <th><button className = ".updatebatch" name = {classrecs.recid} onClick = {this.updatebatchdetils}>Update Batch</button></th>
                </tr>
              )}
               </tbody>
                </table>
            </div>);
    } // end render
} //end allbatches

export default Allbatches;
