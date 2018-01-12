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

      axios.get('/api/others/student/:'+stdid)
            .then(response =>
              {
                 console.log("The Response",response);
                 this.setState({
                   stfname: response.data.studentfname,
                   stlname: response.data.studentlname,
                   stbatchid: response.data.batchid,
                   stid: response.data._id
                 });
              })
            .catch( error => {
              console.log("Error in getting student batch records!!!",error);
            });
    }

      render()
      {
           return(<div>
             <h1> Student Main Component</h1>
             <p>{this.state.stfname}</p>
             <p>{this.state.stlname}</p>
             </div>
           )
      }
}

export default Studentmain;
