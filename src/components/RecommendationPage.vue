<template>
    <div class="w-full">
        <AtacarejoComponent  title = "Atacarejo Fernando" job=""  :img = "`/atacarejo.jpg`" desc = "Atacarejo Fernando é uma empresa" />
    </div>

</template>

<script>
import AtacarejoComponent from './common/AtacarejoComponent.vue';

    export default {

        name: "RecomendationaPage",
        components: {
            AtacarejoComponent,
        },
        data(){
            return {
                showModal: false,
                items: [],
                route: 'http://localhost:5173/'
            }
        },

    }
</script>


<style>

</style>