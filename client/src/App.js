import React from "react";
import { BrowserRouter as Router, Route, Switch ,Redirect} from "react-router-dom";
import Main from "./pages/Main"; //Both teacher and student login
import Teachermain from "./pages/Teachermain" ; // teacher main page
import Createbatch from "./pages/Createbatch";
import Addstudent from "./pages/Addstudent";

import MainSection from "./pages/MainSection";
//import StudentLogin from "./pages/Student"
import NoMatch from "./pages/Static/NoMatch";
//import TeacherLogin from "./pages/teachers";


const App = () =>
  <Router>
    <div>

      <Switch>
       <Route exact path = "/" component = {Main}/>
       <Route exact path="/teacher/myaccount" component={Teachermain} />
       <Route exact path="/teacher/createbatch" component={Createbatch} />
       <Route exact path ="/teacher/batch/addstudent/:batchid" component={Addstudent} />
        <Route exact path="/score" component={MainSection} />
        <Route exact path="/score/:id" component={MainSection} />
        <Route component={NoMatch} />
        <Redirect to = "/" />
      </Switch>
    </div>
  </Router>;
export default App;
