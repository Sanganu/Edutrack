import React from "react";
import { BrowserRouter as Router, Route, Switch ,Redirect} from "react-router-dom";
import Main from "./pages/Main"; //Both teacher and student login
import Batchmain from "./pages/Batchmain" ; // teacher main page
import Createbatch from "./pages/Createbatch";
import Addstudent from "./pages/Addstudent";

//import StudentLogin from "./pages/Student"
//import NoMatch from "./pages/Static/NoMatch";
//import TeacherLogin from "./pages/teachers";


const App = () =>
  <Router>
    <div>

      <Switch>
       <Route exact path = "/" component = {Main}/>
       <Route exact path="/teacher/myaccount" component={Batchmain} />
       <Route exact path="/teacher/createbatch" component={Createbatch} />
       <Route exact path ="/teacher/batch/addstudent/:batchid" component={Addstudent} />
        <Redirect to = "/" />
      </Switch>
    </div>
  </Router>;
export default App;