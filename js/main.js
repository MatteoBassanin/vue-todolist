const { createApp } = Vue

createApp({
  data() {
    return {
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
  }
}).mount('#app')