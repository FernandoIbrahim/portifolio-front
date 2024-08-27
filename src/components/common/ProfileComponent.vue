<template>
    <div class="flex flex-row  h-20 w-fit">

        <div class="flex flex-row ">
            <div class="h-20 w-20 ">
                <img class="rounded-full" :src = "img"/>
            </div>

            <div class="flex flex-col  relative ml-3">

                <div class =" h-20 flex flex-row items-end">
                    <TitleComponent :content= "name"/>
                </div>

                <div class = "h-full flex ">
                    <DescComponent :content = "desc"/>
                </div>

            </div>
            
        </div>
    </div>

</template>

<script> 

    import TitleComponent from '@/components/text/TitleComponent.vue'
    import DescComponent from '@/components/text/DescComponent.vue'

    export default {
        name: 'ProfileComponent',

        props:{
            name: {
                type: String,
                required: true
            },
            desc: {
                type: String,
                required: true
            },
            img: {
                type: String,
                required: true
            }
        },

        components: {
            TitleComponent,
            DescComponent,
        },
    }
</script>