<template>
    <p class = " flex text-sm text-[#DADADA] max-w-[800px] text-opacity-50">{{ content }}</p>
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