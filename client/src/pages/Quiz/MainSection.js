import React, { Component } from 'react';
import InputSection from './InputSection';
import QuestList from './DisplayQuestion'



class MainSection extends Component {
       constructor(props) {
                   super(props);
                   this.state = {
                      addition: true,
                      subtraction:  true,
                      multiplication: true,
                      division: true,
                      tquest: 5,
                      anslet: [],
                      question:'',
                      answer:'',
                      qno:0,
                      userreply:0,
                      upto:10,
                      text:''
                    };
       }

       handleInputChange =(value,name) => {

            this.setState({
               [name]: value
             },
             () =>{
               console.log('Set State in Main Section',value,name);

             });
              /*
            if(name === 'score')
            {
              this.setState({qno: this.state.qno++});

            }*/
       }



       startQuiz = () => {
              //  console.log("staartquiz",this.state.anslet);
               this.setState({
                 question:this.state.anslet[this.state.qno].q,
                 answer: this.state.anslet[this.state.qno].a

               },
               () => {
                 console.log('Setstate callback',this.state.question,this.state.answer,this.state.qno);
               });

       }

      generateQuestion =() => {
         let maxnum = 0;
         let tqt = this.state.tquest;
         let add = this.state.addition;
         let sub = this.state.subtraction;
         let mul = this.state.multiplication;
         let div = this.state.division;
        //  console.log('Insidegenerate',tqt,add,sub,mul,div);
         let min = 2;
         let max = 12;
         let questionarray = [];

         if ( add || sub || mul || div)
         {
             while(maxnum < tqt)
             {
                         let num1 = Math.floor(Math.random()*(max-1)+1);
                         let num2 = Math.floor(Math.random()*(min-1)+1);
                         if( add && maxnum<tqt)
                         {
                              questionarray.push({
                              q:`${num1}+${num2}`,
                              a:num1+num2
                            })

                             maxnum++;
                         }
                         if( mul && maxnum<tqt)
                         {
                              questionarray.push({
                               q:`${num1}*${num2}`,
                               a:num1*num2
                             })
                             maxnum++;
                         }
                         if( sub && maxnum<tqt)
                         {
                                if(num1 > num2)
                                {
                                   questionarray.push({
                                     q:`${num1}-${num2}`,
                                    a:num1+num2
                                     })
                                      maxnum++;
                                }
                                 else if(num2 > num1)
                                 {
                                    questionarray.push({
                                     q:`${num2}-${num1}`,
                                     a:num2-num1
                                     })
                                      maxnum++;
                                 }

                         }
                          if( div && maxnum<tqt)
                          {
                              let num3 = num1*num2;
                               questionarray.push({
                                     q:`${num3} / ${num2}`,
                                      a:num1
                                  })

                              maxnum++ ;
                          }
             }//end while
            //  console.log("The Question array", questionarray);
             this.setState(
                   {
                     anslet:questionarray,
                     text:"",
                     qno:0,
                   }
                 ,
                    () => {
                       this.startQuiz( );
                     }
             );
         } //end if part
         else {
             alert("Choose an option");
         } // end if statement add sub mul div
      }//end generateQuestion

      checkAnswers = () =>
      {

          var myscore = this.state.score;
          // var userreply = this.state.userreply;
          var qno = this.state.qno;
          var l = this.state.anslet.length;
          console.log('qno',qno,'question',this.state.question);

          qno++ ;

           if ( qno < l)
           {
                 this.setState({
                   myscore: myscore,
                   qno: qno,

                 },
                  () =>{
                       this.startQuiz();
                  });
           }
           else {
            this.setState({
                 text:'Welldone!!! Press Start Quiz to play again'
               })
               console.log("End of Quiz");
           }

      }



       render() {
         const addition = this.state.addition;
         const subtraction = this.state.subtraction;
         const multiplication = this.state.multiplication;
         const division = this.state.division;
         const tquest = this.state.tquest;
         const anslet = this.state.anslet;
         const question = this.state.question;
         const answer = this.state.answer;
         const score = this.state.score;
         const qno = this.state.qno;
         const upto = this.state.upto;

          return(
            <div>
                   <InputSection addition = {addition}
                                 subtraction = {subtraction}
                                 multiplication = {multiplication}
                                 division = {division}
                                 tquest = {tquest}
                                 upto = {upto}
                                 onChange = {this.handleInputChange}
                                 onClick = {this.generateQuestion} />

                   <QuestList  currentq = {question}
                               currenta={answer}
                               currentqno = {qno}
                               onChange = {this.handleInputChange}
                                onClick = {this.checkAnswers} />
                                <div>
                                     <h4>{this.state.text}</h4>
                                </div>
             </div>
           ); // end of return
       }; // end of render
}

export default MainSection;
