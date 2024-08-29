<template>
    <div class="flex flex-col items-center px-5 w-full rounded-sm mt-4 " >

        <div class="flex flex-col min-h-30  h-fit min-w-fit w-full mb-5 mt-8  justify-center">

            <div class=" flex flex-col items-center">

                <div class="p-0">
                    <img class=" image-atacarejo rounded-md w-[240px] h-[91px] sm:w-[256px] sm:h-[98px] md:w-[512px] md:h-[196px]" :src = "img"/>
                </div>
            
                <div class="flex flex-col  relative ml-3 items-center">
                

                
                    <div class = "min-h-full flex justify-center max-w-[1000px] mt-10">
                        <DescComponent :content = "desc"/>
                    </div>

                </div>

                


            </div>

        </div>

        <!-- <hr class="component-division w-4/5 "> -->
    </div>
     
</template>


<script>

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
  background-color: none;
}

</style>