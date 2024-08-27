<template>
    <button  :class= "{'color-inversion': (isHovering && !isMainURL) }"
      :title="title"  
      class="flex justify-center items-center bg-neutral-900 prevent-selection cursor-default p-0.5 rounded-sm"
      @click = "send" 
      @mouseover= "isHovering = true" @mouseout="isHovering = false"
      data-bs-toggle="tooltip" data-bs-placement="bottom">

     <span class="material-symbols-outlined prevent-select"> {{ content }} </span>

  </button>
</template>
  


  <script>

  export default {
    name: 'button1Component',
    props: {
      content: {
        type: String,
        required: true
      },
      mainUrl: {
        type: String,
        required: false
      },
      title: {
        type: String,
        required: false
      }
      
    },
    data(){
      return {
        isHovering: false,
        currentPath: '',
      }
    },    
    methods: {
      send(){
        
      },
    },
    created(){
      console.log('Objeto criado'); 
    },
  };


  </script>


  
  <style>

  .on-main-url {

    background-color: rgb(38 38 38);
    


  }

  </style>
  