<template>
  <p class = "flex items-center gap-1 text-[#DADADA] text-md">{{ content }}</p>
</template>

<script>

    
    export default {
      name: 'TitleComponent',
      props: {
        content: {
          type: String,
          required: true
        }
      }
    }
</script>