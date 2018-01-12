import React, { Component } from 'react';
import axios from 'axios';
import Classentry from './Classentry';
import Teacherheader from '../components/Teacherheader';

class Addclass extends Component
{

        constructor(props)
        {
          super(props);
          this.state = {
                 addcldetails : true,
                 invalid:'',
                 batchid:'',
                 batchrecords :[],
                 canenter: false,
                 invalid:false,
                currentbatch: {}
         }; // end state
       } ;// end constructor
        handleInputChange = (event) => {
              const target = event.target;
              const value = target.value;
              const name  = target.name;

                    //console.log('The Value in input change',value,name);

              this.setState({
                 [name]: value
               } /*,
               () =>{
                 console.log('Set State in Main Section',value,name);
               } */);
        }; //End handle Input change

    /*   findbatch = (event) => {
          event.preventDefault();
          console.log("In findbatch before");
          axios.get('/api/teacher/batch/:batchid')
              .then(response =>
               {
                 console.log("Batch details fetched",response);
                  this.setState({
                      htbatchid : response.data.batchid,
                      htbatchdesc: response.data.batchdesc,
                      subject: response.data.subject,
                      level: response.data.level,
                      rateperhour: response.data.rateperhour,
                      students: response.data.students,
                      addcldetails: false,
                      canenter: true
                    });  // end state set
               }) // end then response
              .catch(err =>
              {
                console.log("Error in fetching batch details",err);

                this.setState({invalid: true});
              }) // end catch
        } // end findbatch */
        componentDidMount = () =>
        {
          let batchrecords = this.state.batchrecords;
          console.log("In component did mount");
          axios.get('/api/teacher/batch/all')
              .then(response =>
                {
                  for (let i =0; i<response.data.length;i++)
                  {
                    // console.log("Records",response.data[i]._id,response.data[i].batchdesc,response.data[i].batchid,response.data[i].subject,response.data[i].level,response.data[i].rateperhour);
                       let currentrec = {
                               recid: response.data[i]._id,
                               recdesc: response.data[i].batchdesc,
                               recbatid: response.data[i].batchid,
                               recsubj: response.data[i].subject,
                               reclevel: response.data[i].level,

                       } //end let
                     batchrecords.push(currentrec);
                   } // end for
                }) //end then
                .catch( error => {
                  console.log("Error in getting batch records!!!",error);
                });
                this.setState({batchrecords : batchrecords}, () => { console.log("State of records",this.state.batchrecords)});
          } // end Component Did mount

      render()
      {
          const stbatchrec = this.state.batchrecords;
          const batchid = this.state.batchid;
          {console.log("The stbatchrec",stbatchrec);}

          return(<div>
                {this.state.addcldetails ?
                     <div>
                            <h4>Select Batch for which you would like to add class details</h4>
                               <select  onChange = {this.batchSelect} type="text" name="batchid" value={this.state.batchid}>
                               {stbatchrec.map((data,index) =>
                                 <option value={data.recid}>
                                         {data.recsubj}
                                         {data.recdesc}
                                         {data.reclevel}
                                         {data.reclevel}
                                 </option>)}
                                </select>
                      </div>
                  : <div></div>}
                      {this.state.canenter ? <Classentry batch =  {batchid}/> : <div></div>}
                      {this.state.invalid ? <div>
                                               <h6 className ="errmsg">Invalid batch id - Please enter valid batchid</h6>
                                           </div>: <div></div>}
                 </div>) // end return
      }
}

export default Addclass;


/*

let allbatchrecs = this.props.btrecs;
return(
  <select onChange={this.handleInputChange} name="btid" id="btid">
      {allbatchrecs.map((data,index) =>
           <option value={data.recid}>{data.recbatid}</option>
         )}
 </select>
*/
