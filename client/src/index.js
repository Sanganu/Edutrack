import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleAPI} from 'react-google-oauth';
import './index.css';
import App from './App';

ReactDOM.render(
          <GoogleAPI clentID = ""
                    onUpdateSigninStatus ={signinstatus}
                    onInitFailure = {loginfail}
                    <div><GoogleLogin /></div>
                    <div><GoogleLogout /></div>
                    <App />
            </GoogleAPI>, document.getElementById('root'));
      );


sigininstatus = () => {
  console.log("Signin status",signinstatus);

}

loginfail = () => {
  console.log("Failure to log in",loginfail);

}
