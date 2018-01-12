import React from 'react';
import ReactDOM from 'react-dom';
//import {GoogleAPI, GoogleLogin,GoogleLogout} from 'react-google-oauth';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


/*
ReactDOM.render(
          <GoogleAPI clentId = ""
                    onUpdateSigninStatus ={() => {return <App />}}
                    onInitFailure = {() => {return(<h1>Unauthorised</h1>)}} >
                    <div>
                    <div><GoogleLogin /></div>
                    <div><GoogleLogout /></div>
                    </div>

            </GoogleAPI>, document.getElementById('root'));

*/
/*
sigininstatus = () => {
  console.log("Signin status",signinstatus);
  return <App />
}

loginfail = () => {
  console.log("Failure to log in",loginfail);

}
*/
