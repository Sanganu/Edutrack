import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleAPI, GoogleLogin,GoogleLogout} from 'react-google-oauth';
import './index.css';
import App from './App';

ReactDOM.render(
          <GoogleAPI clentId = "729258013011-gf6tpb74g19eiho8g125uohso22murrg.apps"
                    onUpdateSigninStatus ={() => {return <App />}}
                    onInitFailure = {() => {return(<h1>Unauthorised</h1>)}} >
                    <div>
                    <div><GoogleLogin /></div>
                    <div><GoogleLogout /></div>
                    </div>

            </GoogleAPI>, document.getElementById('root'));


/*
sigininstatus = () => {
  console.log("Signin status",signinstatus);
  return <App />
}

loginfail = () => {
  console.log("Failure to log in",loginfail);

}
*/
