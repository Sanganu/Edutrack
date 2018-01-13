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

        getBatch = (event) =>
        {
          event.preventDefault();
          let batchrecords = this.state.batchrecords;
          let batchid = this.state.batchid;

          console.log("batch details retrieve");

          axios.get('/api/teacher/batch/'+batchid)
              .then(response =>
                {
                     let currentrec = {
                               recid: response.data._id,
                               recdesc: response.data.batchdesc,
                               recbatid: response.data.batchid,
                               recsubj: response.data.subject,
                               reclevel: response.data.level,

                       } //end let
                    this.setState({batchrecords : currentrec}, () => { console.log("State of records",this.state.batchrecords)});
                }) //end then
                .catch( error => {
                  this.setState({errmsg : "Error in getting batch records"+error},
                        () =>{
                             console.log("Error in getting batch records!!!",error);
                        });
                }); // end catch

          } // end

      render()
      {
          const stbatchrec = this.state.batchrecords;
          const batchid = this.state.batchid;


          return(<div>
                            <Teacherheader />
                           <h5 className = "subcr">Record Class details for the batch</h5>
                           <p className="errmsg">{this.state.errmsg}</p>
                        <form className = "form-horizontal">
                            <div className = "form-group">
                               <label className ="inline">Enter Batch ID (numbers only) :  </label>
                               <input type = "text"   value={this.state.batchid} onChange = {this.handleInputChange} name = "batchid" /><br />
                             </div>

                             <button className = "btn btn-info"  name = "clcreation" onClick = {this.getBatch}>Get Batch Details</button>
                        </form>


                 </div>) // end return
      }
}

export default Addclass;
