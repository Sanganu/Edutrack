import React, { Component } from 'react';
import axios from 'axios';

class Studentmain extends Component
{
  state = {
    stfname:'',
    stlname: '',
    stbatchid:'',
    stid:''
  }
    componentWillReceiveProps = () => {
      let stdid = this.props.data._id;
     /*
      axios.get('/api/others/student/class')
            .then(response =>
              {
                 console.log("The Response",response);
                 this.setState({

                 });
              })
            .catch( error => {
              console.log("Error in getting student class records!!!",error);
            }); */
    }

      render()
      {
           return(<div>

                     <h4 className = "subhead">Welcome {this.props.studentdet.studentfname}    {this.props.studentdet.studentlname} </h4>
                     <br />
                     <div className = "row">
                     <div className = "col-md-6">
                         <p>Parent:{this.props.studentdet.parentname} </p>
                         <p>Phone number:{this.props.studentdet.parentphonenumber}</p>
                         <p>Email: {this.props.studentdet.loginemail}</p>
                     </div>
                     <div className = "col-md-6">
                           <p>Batch ID: {this.props.studentdet.batchid.batchid}</p>
                           <p>Batch Description{this.props.studentdet.batchid.batchdesc}</p>
                           <p>level: {this.props.studentdet.batchid.level}</p>
                           <p>Rate:{this.props.studentdet.batchid.rateperhour}</p>
                      </div>
                      </div>
                 </div>)
      }
}

export default Studentmain;
