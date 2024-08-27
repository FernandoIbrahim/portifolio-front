<template>
    <div class="flex flex-row  h-20 w-fit">

        <div class="flex flex-row ">
            <div class="h-10 w-10 ">
                <img class="rounded-full" :src = "img"/>
            </div>

            <div class="flex flex-col  relative ml-3">

                <div class =" h-8 flex flex-row items-end">
                    <TitleComponent :content= "name"/>
                </div>

                <div class = "h-full flex ">
                    <DescComponent :content = "job"/>
                </div>

            </div>
            
        </div>
    </div>

</template>

<script> 

    import TitleComponent from '@/components/text/TitleComponent.vue'
    import DescComponent from '@/components/text/DescComponent.vue'

    export default {
        name: 'SmallProfileComponent',

        props:{
            name: {
                type: String,
                required: true
            },
            job: {
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