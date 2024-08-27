<template>

    <div class="flex flex-col">

        <ProfileComponent name="Fernando Ibrahim" desc="Software Developer" img="http://localhost:5173/foto.jpeg"/>

        <div class="mt-7 flex flex-col max-w-[800px] gap-4 pb-8 text-bs dark:text-[#DADADA]">
            <p>Olá!</p>
            <p>Meu nome é Fernando, sou atualmente estudante de Engenharia de Software na PUC Minas. </p>
            <p>Busco por oportunidades para colocar os meus aprendizados, desenvolvidos durante o curso, em prática, no mercado de trabalho. Atualmente, tenho focado meus estudos em frameworks de desenvolvimento de aplicações web, como o <span class=" text-emerald-600">Vue.js</span> e <span class="text-emerald-600" >Express</span>, e na linguagem de programação <span class="text-emerald-600" >Java</span> para os estudos de Algorítmos e Estuturas de Dados.</p>
        </div>
        
        <div class="flex flex-row justify-between h-fit w-32 dark:text-[#DADADA]">

            <ButtonComponent content = "github" mainUrl = "https://github.com/FernandoIbrahim" title="github"/>
            <ButtonComponent content = "linkedin" mainUrl = "https://www.linkedin.com/in/fernandoibrahim/" title="linkedin"/>
            <ButtonComponent content = "leetcode" mainUrl = "https://leetcode.com/u/FernandoIbrahim/" title="leetcode"/>

        </div>


    </div>

</template>

<script>

    import ProfileComponent from '@/components/common/ProfileComponent.vue'
    import ButtonComponent from './common/ButtonComponent.vue';

    export default {
        name: 'HomePage',
        components: {
            ProfileComponent,
            ButtonComponent
        }
    }
</script>

