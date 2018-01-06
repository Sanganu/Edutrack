import axios from "axios";

export default {
  getScores: function() {
    return axios.get("/api/score");
  },
  getStudent: function(id) {
    console.log("before axios call",id);
    return axios.get("/api/students/"+id);
  },
  deleteStudent : function(id) {
    return axios.delete("/api/students/"+id);
  },
  saveScore: function(scoredata) {
    return axios.post("/api/score",scoredata);
  }

}
