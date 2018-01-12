import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Listbatch from './Listbatch';
import Addclassdetails from './Addclassdetails';
import Teacherheader from '../components/Teacherheader';


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
                         recdesc: response.data[i].batchdesc,
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
          });
  } // end component did mount
  onClassclick = () => {
    this.setState({displayclass : true});
  }

    render()
    {
      const stbatchrec = this.state.batchrecords;
      return(<div>
              <Teacherheader />
              <h6 className ="tablehead">Batch Details </h6>
              <div className = "table-responsive">
                    <table className = "table table-hover">
                    <tbody>
                     <tr>
                      <td>Batch ID</td>
                      <td>Desription</td>
                      <td>Class</td>
                      <td>Level</td>
                      <td>Rate/class/student</td>
                      </tr>
                          {stbatchrec.map((data,index) =>
                            <tr key={index}>
                                   <td>{data.recbatid}</td>
                                   <td>{data.recdesc}</td>
                                    <td>{data.recsubj}</td>
                                    <td>{data.reclevel}</td>
                                    <td>{data.recrate}</td>
                            </tr>
                          )}
                     </tbody>
                    </table>
              </div>
              <div className = "Navbar">
                    <Link to = '/teacher/batch/addclass' className = 'mainlink'>Add Class details</Link><br />
                     <Link to = '/teacher/batchmain' className = 'mainlink'>Create New Batch</Link><br />
                     <Link to ='/teacher/student' className = 'mainlink'>Search Student Records</Link>
              </div>
            </div>); // end return
      } // end render
} //end allbatches
export default Allbatches;

/*
<button className ="btn btn-large-info" id = "blogin" onClick={this.onClassclick}>Add Class Details</button>
{this.displayclass ? <Addclassdetails btrecs = {this.state.batchrecords}/> :<div></div>}
*/
