const app = Vue.createApp({
data(){
      return {
            wixilagaliyay :'',
            goals:[]
      };
},
      methods:{
            addGoal(){
                  this.goals.push(this.wixilagaliyay);
            },
            removeGoal(inx){
                  this.goals.splice(inx,1);
            }
      }

});
app.mount('#userGoal')