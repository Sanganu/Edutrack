import React, { Component } from 'react';
import axios from 'axios';

class Addclassdetails extends Component
{
      render()
      {
         let allbatchrecs = this.props.btrecs;
         return(
           <select onChange={this.handleInputChange} name="btid" id="btid">
               {allbatchrecs.map((data,index) =>
                    <option value={data.recid}>{data.recbatid}</option>
                  )}
          </select>


           )
      }
}

export default Addclassdetails;
