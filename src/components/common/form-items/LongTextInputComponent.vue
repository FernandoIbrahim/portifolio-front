<template>
    <textarea  
        class="text-sm rounded-sm mt-1 bg-neutral-700 w-48"
        :name = "nameData" 
        rows="6"
        v-on:input="updateValue">
    </textarea>
</template>

<script>


    export default {
        name: 'LongInputTextComponent',
        props: {
            nameData: {
                type: String,
                required: true
            },
            placeHolderData: {
                type: String,
                required: false
            }
        },
        methods: {
            updateValue(event) {
                this.$emit('inputTextValueChange',[ this.nameData , event.target.value ]); // Emite o evento com o valor atualizado
            }
        }
    };



</script>

