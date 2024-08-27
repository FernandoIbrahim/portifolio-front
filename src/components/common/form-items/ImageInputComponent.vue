<template>
  <div class="flex flex-col">

    <label for="file-upload" class="cursor-pointer dark:bg-neutral-700  mt-2 mb-2 dark:text-[#DADADA] text-sm py-2 px-4 rounded">
      Selecionar Arquivo
    </label>

    <input 
      id="file-upload" 
      type="file" 
      :name="nameData"
      class="hidden"
      v-on:change="updateImageHandler"
    />

    <div v-if="fileName" class="mt-2 fex flex-row justify-start mb-4">
      <DescComponent :content = "fileName"/>
      <button 
        @click="resetImageData" 
        class=" bg-red-700 dark:text-[#DADADA] font-bold w-6 h-6 rounded p-1 flex items-center justify-center">
        x
      </button>

    </div>

  </div>
</template>

<script>

import DescComponent from '@/components/text/DescComponent.vue';

export default {
  name: 'ImageInputComponent',
  data() {
    return {
      file: null,
      fileName: '',
    };
  },
  props: {
    nameData: {
      type: String,
      required: true
    },
  },
  methods: {

    updateImageHandler(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.file = selectedFile;
        this.fileName = selectedFile.name;
        this.$emit('inputImageValueChange',[ this.nameData , selectedFile ]); 
      }
    },
    
    resetImageData(){
      this.file = null;
      this.fileName = '';
      this.$emit('inputImageValueChange',[ this.nameData , null]);
    }

  },
  components: {
    DescComponent,  
  }

};

</script>

