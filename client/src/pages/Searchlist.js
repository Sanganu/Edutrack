import React, { Component } from 'react';
import axios from 'axios';

class Searchlist extends Component {
  handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name  = target.name;
        console.log('The Value in input change',value,name);

        this.setState({
           [name]: value
         } /*,
         () =>{
           console.log('Set State in Main Section',value,name);
         } */);
  };


    render()
    {
        return(

            <select onChange = {this.handleInputChange} name ="searchstring" id="searchstring">
                  <option value ='batch>'By Batch</option>
                  <option value ='student'>By Student</option>
            </select>
            <label className ="inline">Rate per class per student($) </label>
            <input type = "text"   value={this.state.rateperhour} onChange = {this.handleInputChange} name = "rateperhour" />

 <button className = "btn btn-info"  name = "runsearch" onClick = {this.handleClassCreation}>Create Batch</button>
        );

    }


}


export default Searchlist;
