<template>
    <div class="flex flex-col items-center px-5 w-full rounded-sm mt-4 " >

        <div class="flex flex-col min-h-30  h-fit min-w-fit w-full mb-5 mt-8  justify-center">

            <div class=" flex flex-col items-center">

                <div class="p-0">
                    <img class=" image-atacarejo rounded-md w-[240px] h-[149px] sm:w-[360px] sm:h-[240px] md:w-[480px] md:h-[298px]" :src = "img"/>
                </div>
            
                <div class="flex flex-col  relative ml-3 items-center">
                
                    <div class ="h-fit flex flex-row mt-10 justify-center">
                        <TitleComponent class="w-full" :content= "title"/>
                    </div>
                
                    <div class = "min-h-full flex justify-center">
                        <DescComponent :content = "desc"/>
                    </div>

                </div>


            </div>

        </div>

        <!-- <hr class="component-division w-4/5 "> -->
    </div>
     
</template>


<script>

    import TitleComponent from '@/components/text/TitleComponent.vue'
    import DescComponent from '@/components/text/DescComponent.vue'

    export default {
        name: "AtacarejoComponent",
        props: {
            title: {
                type: String,
                required: true
            },
            desc: {
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


.image-atacarejo{
  background-color: blueviolet;
}

</style>