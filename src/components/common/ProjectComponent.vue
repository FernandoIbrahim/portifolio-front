<template>

    <div class = "project-card flex mt-10 mb-10 p-5 w-full justify-start rounded-sm  hover:bg-gradient-to-br from-neutral-800 to-neutral-900 hover:scale-[101%] duration-300"
    :onmouseover ="mouseOn" :onmouseleave="mouseOut"
    @click = "navigate"
    >

          <div class = "image-box flex flex-col justify-center mr-5">
            <img class="imagem-item rounded-sm" :src="img"/> 
          </div>

          <div class="flex flex-col">
            <div class = "text-title flex  flex-row w-full h-8 items-end mb-2">

              <TitleComponent :content="name"/>

              <div class="flex flex-col justify-end h-8 mb-1 ml-2 duration-75" v-if="mouseOuver" :class="{mouseOuver: 'anime-in-slow'}" >
                <svg class="w-5 h-5 flex items-start  p-0.5" fill="white">
                  <use :href="`/icons/icons.svg#link`" class="flex"/>
                </svg>
              </div>

            </div>

            <div class = "flex  flex-row w-full items-end mb-2">
              <DescComponent :content="desc"/>
            </div>
          </div>

    </div>


</template>

<script>
import TitleComponent from '@/components/text/TitleComponent.vue';
import DescComponent from '@/components/text/DescComponent.vue';

    export default {
        name: 'ProjectComponent',
        components: {
          TitleComponent,
          DescComponent
        },

        props: {
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
          },
          url: {
            type: String,
            required: false
          }
        },
        data(){
          return {
            mouseOuver: false
          }
        },
        methods: {
          mouseOn(){
            this.mouseOuver = true;
            console.log('mouse on')
          },
          mouseOut(){
            this.mouseOuver = false;
            console.log('mouse out')
          },
          navigate() {
              if (this.url.includes('http')) {
                  window.open(`${this.url}`);
              }
          },
          updateCurrentPath() {
              this.currentPath = window.location.pathname;
          }
        }

    }

</script>


<style>

.imagem-item {
  width: 180px;
  height: 120px;
  background-color: blueviolet;
}

.image-box{
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
}


.project-card {

  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  min-height: 100px; 
  height: fit-content;

}

.text-title{
  justify-content: center;
}


@media  screen and (min-width: 440px){

  .imagem-item{
    width: 240px;
    height: 144px;
    background-color: blueviolet;
  }
}



@media  screen and (min-width: 600px){

.project-card  {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 144px;
}

.imagem-item{
  width: 100%;
  height: 144px;
  background-color: blueviolet;
}

.image-box{
  display: flex;
  height: 144px;
  min-width: 256px;
  width: 256px;
  margin-bottom: 0px;
}

.text-title{
  justify-content: start;
}


}

@media  screen and (min-width: 840px){

  .project-card  {
  
    width: 100%;
    min-height: 144px;
  
  }
}

@media  screen and (min-width: 1100px){

  .project-card {

    width: 100%;
    min-height: 144px;

  }


}




</style>