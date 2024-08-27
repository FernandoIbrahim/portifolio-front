<template>
    <div class="relative w-fit h-fit">
      <slot></slot>

      <span
        v-if="tooltip"
        class="absolute z-10 bg-black text-white text-xs p-2 rounded transition-opacity duration-300 top-[calc(100%+8px)] left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        onmouseover="showTooltip" onmouseleave="hideTooltip"
      >
        {{ message }}
      </span>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'TooltipComponent',
    props: {
      message: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        tooltip: false,
      };
    },
    computed: {

    },
    methods: {
      showTooltip() {
        this.tooltip = true;
      },
      hideTooltip() {
        this.tooltip = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione esta regra para garantir que o tooltip não afete o layout dos outros elementos */
  .relative {
    position: relative;
    overflow: visible; /* Garante que o conteúdo do tooltip não seja cortado */
  }
  </style>