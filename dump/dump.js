{this.state.displaybatch ? <Createbatch displayme ={displaybatch}
                                        batchdet = {batchdet}
                                        onInsert={this.handleBatchCreated} />
                        : <Addstudent batchdet = {batchdet}
                                      onchange = {this.handleStudentAdded} />}
 <table>
 <Allstudents studentrec = {this.state.studentdet} />
 </table>

 handleStudentAdded = (newstudent) => {
   let studentdet = this.state.studentdet;
   studentdet.push(newstudent);
   this.setState({ studentdet },
     () => {
       console.log('Setstate callback',this.state.studentdet);
     });
 };

 <Allstudents studentrec = {this.state.studentdet} />

 /*
 {this.state.displaybatch ? <Createbatch displayme ={displaybatch}
                                         batchdet = {batchdet}
                                         onInsert={this.handleBatchCreated} />
                         : <Addstudent batchdet = {batchdet}
                                       onchange = {this.handleStudentAdded} />}
  <table>
  <Allstudents studentrec = {this.state.studentdet} />
  </table>
 */
