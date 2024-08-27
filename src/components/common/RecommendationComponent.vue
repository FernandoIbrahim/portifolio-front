<template>
    <div class="flex flex-col items-center px-5 w-full rounded-sm mt-4 " >

        <div class="flex change-direction min-h-30  h-fit min-w-fit w-full mb-5 mt-8 ">

            <div class=" flex flex-row w-full">

                <div class="min-h-10 min-w-10 h-10 w-10">
                    <img class=" h-10 w-10 rounded-full" :src = "img"/>
                </div>
            
                <div class="flex flex-col  relative ml-3">
                
                    <div class ="h-fit flex flex-row items-start">
                        <TitleComponent :content= "title"/>
                    </div>
                
                    <div class = "min-h-full flex ">
                        <DescComponent :content = "school"/>
                    </div>

                </div>


            </div>

            <div class = "w-28 min-w-28 ml-5 flex justify-end items-center">
                    <p class = "text-sm dark:text-[#DADADA] dark:text-opacity-50"> {{ date }} </p>
            </div>
        </div>

        <!-- <hr class="component-division w-4/5 "> -->
    </div>
     
</template>


<script>

    import TitleComponent from '@/components/text/TitleComponent.vue'
    import DescComponent from '@/components/text/DescComponent.vue'

    export default {
        name: "ExperienceComponent",
        props: {
            title: {
                type: String,
                required: true
            },
            school: {
                type: String,
                required: true
            },
            date: {
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
            DescComponent
        }
    }
</script>


<style>

.component-division{
    color: #DADADA;
    opacity: 0.5;
    size: 1px;
}

.change-direction{
    display: flex;
    flex-direction: column;
}





@media  screen and (min-width: 700px){
    
    .change-direction{
        display: flex;
        flex-direction: row;
    }

}
</style>