<template>
    <p class = "text-md dark:text-[#DADADA] dark:text-opacity-50"> {{ content }} </p>
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