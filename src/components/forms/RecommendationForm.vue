<template>
    <FormComponent @submit.prevent="submitForm">
      <LabelText content="Nome:" placeHolderData=""/>
      <InputText @inputTextValueChange ="inputTextHandler" placeHolderData="" nameData = "nome"/>
      <LabelText content="Cargo:" />
      <InputText @inputTextValueChange = "inputTextHandler" placeHolderData="Analista de Requisitos" nameData = "cargo"/>
      <LabelText content="Recomendação:" />
      <LongTextInputComponent  @inputTextValueChange = "inputTextHandler" nameData = "recomendacao"/>
      <LabelText content="Foto Pessoal:" />
      <ImageInputComponent @inputImageValueChange = "inputPictureHandler" nameData = "image" />
      <LabelText content="Linkedin:" />
      <InputText  @inputTextValueChange = "inputTextHandler" nameData = "linkedinLink" placeHolderData="https://www.linkedin.com/in/fernandoibrahim/"/>
      <div v-if="missingData" class="w-48 flex p-1 bg-neutral-700 rounded-sm flex-col mt-4">
        <LabelText  content="ERROR"/>
        <LabelText  content="Todos os dados devem estar preenchidos"/>
      </div>
    </FormComponent>
  </template> 
  
  <script>
  import axios from 'axios';


  import FormComponent from '@/components/common/FormComponent.vue';
  import InputText from '@/components/common/form-items/InputTextComponent.vue';
  import LabelText from '@/components/common/form-items/LabelFormComponent.vue';
  import LongTextInputComponent from '@/components/common/form-items/LongTextInputComponent.vue';
  import ImageInputComponent from '@/components/common/form-items/ImageInputComponent.vue';

  import { useIsVisibleStore } from '@/stores/isModalVisible';
  
  export default {
    name: 'RecommendationForm',
    data() {
      return {
          recommendation: {
            nome: '',
            cargo: '',
            recomendacao: '',
            linkedinLink: '',
            image: ''
          },
          missingData: false
        }
    },
    components: {
      FormComponent,
      InputText,
      LabelText,
      LongTextInputComponent,
      ImageInputComponent
    },

    methods: {

      inputTextHandler(dados) {


        switch (dados[0]) {
          case 'nome':
            this.recommendation.nome = dados[1];
            break;

          case 'cargo': this.recommendation.nome = dados[1]; 
            this.recommendation.cargo = dados[1];
            break;

          case 'recomendacao': 
            this.recommendation.recomendacao = dados[1];
            break;

          case 'linkedinLink':
            this.recommendation.linkedinLink = dados[1];
            break;

        }

        this.missingData = false
        
      },

      inputPictureHandler(dados) { 
        console.log(dados[0] +'- '+ dados[1]);
          this.recommendation.image = dados[1];
        
      },

      submitForm(){

        if(!(this.recommendation.nome && this.recommendation.cargo && this.recommendation.recomendacao && this.recommendation.linkedinLink && this.recommendation.image )){
          return this.missingData = true;
        }

        const formData = new FormData();
  
        formData.append('name', this.recommendation.nome);
        formData.append('job', this.recommendation.cargo);
        formData.append('desc', this.recommendation.recomendacao);
        formData.append('linkedin', this.recommendation.linkedinLink);
        formData.append('file', this.recommendation.image); 


        axios.post('http://localhost:3001/recommendations/', formData , {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(function (response) {

            console.log(response);

          }).catch(function (error) {

            console.log(error);

        });

        this.missingData = false;
        const isVisibleStore =  useIsVisibleStore();
        isVisibleStore.setVisibility(false);
          
        

      },

    
  
    }

  }
  </script>
  