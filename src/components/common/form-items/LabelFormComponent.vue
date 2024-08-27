<template>
    <p class = "text-sm mt-2 dark:text-[#DADADA] max-w-[800px]">{{ content }}</p>
  </template>
  
  <script>
  
      
      export default {
        name: 'LabelComponent',
        props: {
          content: {
            type: String,
            required: true
          }
        }
      }
  </script>