import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Listbatch from './Listbatch';
import Addclassdetails from './Addclassdetails';
import Teacherheader from '../components/Teacherheader';


class Allclasses extends Component
{
   state = {
     classrecords: []
   }
  //axios.get('/api/teachers/')
  componentDidMount = () => {
    console.log("all class =Inside component did mount before placing the axios call");
    let classrecords = this.state.classrecords;

    axios.get('/api/teacher/batch/class/all/:'+"")
        .then(response =>
          {
            //console.log("The Batch Details of  ",response.data);
            for (let i =0; i<response.data.length;i++)
            {
               console.log("Records",response.data[i]._id,response.data[i].batchdesc,response.data[i].batchid,response.data[i].subject,response.data[i].level,response.data[i].rateperhour);
                 let currentrec = {
                         classid: response.data[i]._id,
                         recbatid: response.data[i].batchid,
                         recdesc: response.data[i].batchdesc,
                         recsubj: response.data[i].subject,
                         reclevel: response.data[i].level,
                         recrate: response.data[i].rateperhour
                 }
               classrecords.push(currentrec);
            } // end for
            this.setState({batchrecords : batchrecords}, () => { console.log("State of records",this.state.batchrecords)});
          }) // end then
          .catch( error => {
            console.log("Error in getting batch records!!!",error);
          });
  } // end component did mount


    render()
    {
      const classrec = this.state.classrecords;
      return(<div>
              <Teacherheader />
              <h6 className ="tablehead">Batch Details </h6>
              <div className = "table-responsive">
                    <table className = "table table-hover">
                    <tbody>
                     <tr>
                      <td>Batch ID</td>
                      <td>Class</td>
                      <td>Level</td>
                      <td>Rate/class/student</td>
                      </tr>
                          {classrec.map((data,index) =>
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
export default Allclasses;

/*
<button className ="btn btn-large-info" id = "blogin" onClick={this.onClassclick}>Add Class Details</button>
{this.displayclass ? <Addclassdetails btrecs = {this.state.batchrecords}/> :<div></div>}
*/