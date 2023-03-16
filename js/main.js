const { createApp } = Vue

createApp({
  data() {
    return {
      newTask : "",
      newtodo : "",
      arrayTask:[
        {
            task:"andare a fare la spesa",
            todo:true,
        },
        {
            task:"andare in palestra",
            todo:false,
        },
        {
            task:"tentare di conquistare il mondo",
            todo:true,
        }
      ]
    }
  },
  methods:{
    removeTask(index) {
        this.arrayTask.splice(index,1);
    },
    addTask(){
        newTask = {
            task : this.newTask,
            todo : this.randomToDo(),
        }
        this.arrayTask.unshift(newTask),
        this.newTask = ""
    },
    randomToDo(){
         return Math.random() < 0.5;
         
        
    },
   
  },

}).mount('#app')