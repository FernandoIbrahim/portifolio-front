<template>
  <input 
    class="text-sm rounded-sm pl-2 p-1 mt-1 mb-2 w-48 bg-neutral-700" 
    type="text" 
    :placeholder="placeHolderData" 
    :name="nameData"
    v-on:input="updateValueHandler"
  />
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    nameData: {
      type: String,
      required: true
    },
    placeHolderData: {
      type: String,
      default: '' // Valor padrão se não for fornecido
    },
  },
  data() {
    return {
    };
  },
  methods: {
    updateValueHandler(event) {
      this.$emit('inputTextValueChange',[ this.nameData , event.target.value ]); // Emite o evento com o valor atualizado
    }
  }
};
</script>
