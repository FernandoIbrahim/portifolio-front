<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal" @closeModal="closeModal">
      <div class="modal-content flex flex-col" @click.stop>
          
        <div class="flex flex-row justify-end w-full dark:text-[#DADADA]">
          <button class="close-button flex justify-center  items-start bg-neutral-900 prevent-selection cursor-default p-0.5 rounded-sm " @click="closeModal">
            <span class="material-symbols-outlined prevent-select"> close </span>
          </button>
        </div>
        <slot></slot>

      </div>
        
    </div>
  </template>
  
  <script>
  export default {

    name: "ModalComponent",
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };

  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  
  .modal-content {
    background-color: #262626;;
    padding: 10px;
    border-radius: 5px;
    position: relative;
    width: 324px;
  }
  
  .close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

@media  screen and (min-width: 800px){
  .modal-content{
    min-width: 300px;
  }
}
  </style>
  

