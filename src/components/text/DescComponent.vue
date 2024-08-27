<template>
    <p class = " flex text-sm dark:text-[#DADADA] max-w-[800px] dark:text-opacity-50">{{ content }}</p>
  </template>
  
  <script>
  
      
      export default {
        name: 'DescComponent',
        props: {
          content: {
            type: String,
            required: true
          }
        }
      }
  </script>