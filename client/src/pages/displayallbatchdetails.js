import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Listbatch from './Listbatch';

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

 updatebatchdetils = (event) => {
     event.preventDefault();
     console.log("In update batch fields")
 }
    render()
    {
      const stbatchrec = this.state.batchrecords;
      return(<div>
              <h1>All Batches </h1>
              <table>
                <td>Batch ID</td>
                <td>Class</td>
                <td>Level</td>
                <td>Rate/hour/student</td>
              <tbody>
                    {stbatchrec.map((data,index) =>
                      <tr key={index}>
                             <td>{data.recbatid}</td>
                              <td>{data.recsubj}</td>
                              <td>{data.reclevel}</td>
                              <td>{data.recrate}</td>
                      </tr>
                    )}
               </tbody>
              </table>
              <Link to = '/teacher/batch/classdetails'>Add Class details</Link>
              <Link to = '/teacher/batchmain'>Create New Batch</Link>
            </div>); // end return
      } // end render
} //end allbatches
export default Allbatches;

/*

<th><button className =".deletebatch" name = {data.recid} onClick = {this.deletebatchdetails}>Delete Batch</button></th>
<th><button className = ".updatebatch" name = {data.recid} onClick = {this.updatebatchdetils}>Update Batch</button></th>

render()
{
  const stbatchrec = this.state.batchrecords;
  return(<div>
          <h1>All Batches </h1>
          <table>
          <tbody>
                {stbatchrec.map((data,index) =>
                    {console.log("In map stbatchrec",data);
                     <Listbatch key={index}
                                brecords = {data}
                     />}
                )}
           </tbody>
          </table>
        </div>); // end return
  } // end render
*/
