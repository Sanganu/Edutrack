import React, { Component } from 'react';


class QuestList extends Component {

      constructor(props){
        super(props);
        this.state = {
          myscore : 0,
          currentq : '',
          currenta: 0,
        }
      }



      userinput = () =>
      {
              let textval = Number(this.refs.userreply.value)
              let canswer = Number(this.props.currenta)
              let myscore = this.state.myscore
              console.log("textval",textval,"canswer",canswer,myscore);

              if ( canswer === textval)
              {
                console.log("Increment score");
                myscore++;
              }
              //this.refs.qdisplay.value = "";
              //
              this.setState({
                myscore: myscore
              },
              () => {
                   console.log("textval",textval,"canswer",canswer,myscore);
                 this.props.onClick()
              });
        //console.log("checkans child usererpl",textval)

      }

     componentWillReceiveProps(nextprops)
     {
       if(nextprops !== this.props.qno)
       {
         this.refs.userreply.value ="";
       }
     }


    render(){
           const currentq = this.props.currentq;
           return(<div>
                     <div className ="summary">
                          <h6 name="score">Score: {this.state.myscore}</h6>

                      </div>
                      <div>

                            <h3 ref="qdisplay" name="Question">{currentq}</h3>
                            <label>
                                <textarea type="text" ref = "userreply" ></textarea>
                            </label>
                           <button onClick={this.userinput}>Submit</button>
                      </div>
                   </div>)
              }
}
export default QuestList;
