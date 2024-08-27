<template>
    <p class = "text-md text-[#DADADA] text-opacity-50"> {{ content }} </p>
  </template>
  
  <script>
  
      
      export default {
        name: 'DeafultTextComponent',
        props: {
          content: {
            type: String,
            required: true
          }
        }
      }
  </script>