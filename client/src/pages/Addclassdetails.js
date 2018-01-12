import React, { Component } from 'react';
import axios from 'axios';
import Classentry from './Classentry';

class Addclassdetails extends Component
{

        constructor(props)
        {
          super(props);
          this.state = {
           addcldetails : true,
           invalid:'',
          batchid:'',
           vpword:'',
           logindisp : true
            };
        }
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
        };
      render()
      {
          return(<div>

                {this.state.addcldetails ?
                     <div>

                        <form className="fields">
                           <div className = "form-group">
                               <label id ="lbatchid">Batch Id</label><br />
                               <input className="textarea" onChange = {this.handleInputChange} type="text" name="batchid" value={this.state.batchid} /><br />
                           </div>
                           <button className ="btn btn-lg btn-info" id = "blogin" onClick={this.findbatch}>Save</button>
                        </form> <br />
                      </div>
                  : <div></div>}
                      {this.state.canenter ? <Classentry /> : <div></div>}
                      {this.state.invalid ? <div>
                                                 <h6 className ="errmsg">Invalid batch id - Please enter valid batchid</h6>
                                              </div>: <div></div>}

                 </div>



          )


      }
}

export default Addclassdetails;


/*

let allbatchrecs = this.props.btrecs;
return(
  <select onChange={this.handleInputChange} name="btid" id="btid">
      {allbatchrecs.map((data,index) =>
           <option value={data.recid}>{data.recbatid}</option>
         )}
 </select>
*/
