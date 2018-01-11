import React,{ Component } from 'react';
import axios from 'axios';

class Listbatch extends Component
{
      render()
      {
        //const classrecs = this.props.brecords;
        console.log("Listbatch records",this.props.brecords);
        <h1>Render Listbatch</h1>
         return(
           <tr>
                   <th>{this.props.brecords.recid}</th>
                   <th>{this.props.brecords.recbatid}</th>
                   <th>{this.props.brecords.recsubj}</th>
                   <th>{this.props.brecords.reclevel}</th>
                   <th>{this.props.brecords.recrate}</th>
                   <th><button className =".deletebatch" name = {this.props.brecords.recid} onClick = {this.deletebatchdetails}>Delete Batch</button></th>
                   <th><button className = ".updatebatch" name = {this.props.brecords.recid} onClick = {this.updatebatchdetils}>Update Batch</button></th>
           </tr>
         )
      }
}

export default Listbatch;
/*

*/
