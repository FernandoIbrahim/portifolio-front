<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-col w-full">
            <TitleComponent content = "Graduações"/>
            <ExperienceComponent   title = "Engenharia de Software" school = "PUC Minas" :img = "`/education/1723947579293-PUC Minas.jpeg`" date = "2023 - now"/>
            <ExperienceComponent   title = "Técnico em Informática Integrado ao Ensino Médio" school = "IFMG" :img = "`/education/1723948007103-ifmg.jpeg`" date = "2020 - 2022"/>
        </div>
        <div class="flex flex-col mt-20">
            <TitleComponent content = "Certificados"/>
            <ExperienceComponent   title = "FCE - First Certificate in English" school = "Cambridge English" :img = "`/education/1724421943348-cambridge.jpeg`" date = "2023"/>
            <ExperienceComponent   title = "PET - Preliminary English Test" school = "Cambridge English" :img = "`/education/1724421943348-cambridge.jpeg`" date = "2021"/>
        </div>
    </div>
    
</template>

<script>
    import ExperienceComponent from '@/components/common/ExperienceComponent.vue'
    import TitleComponent from './text/TitleComponent.vue';


    export default {
        name: "EducationPage",
        data(){
            return {
                courses: [],
                certificates: [],
                route: 'http://localhost:5173/education/'
            }
        },
        components: {
            ExperienceComponent,
            TitleComponent
        },
        created(){
        },
    }
</script>

