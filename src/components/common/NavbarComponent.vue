<template>
    <nav class=" flex flex-row items-center h-16 justify-between z-10 gap-1 dark:text-[#DADADA] bg-neutral-900">

        <div class="left-10 flex relative">

            <ButtonComponent content = "home" mainUrl = "/" title="Home" />

        </div>

        <div class=" mr-20 relative">
            <ul class="flex flex-row gap-[4vw] items-center">
                <li class="flex items-center">
                    <ButtonComponent content = "project" mainUrl = "/project" title="Projetos"/>
                </li>

                <li>
                    <ButtonComponent content = "education" mainUrl = "/education" title="Estudos"/>
                </li>

                <li>
                    <ButtonComponent content = "recommendation" mainUrl = "/recommendation" title="Recomendações"/>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

import ButtonComponent from '@/components/common/ButtonComponent.vue'
export default {
    name: 'NavbarComponent',
    components: {
        ButtonComponent
    }
}
</script>

<style scoped>
/* Adicione estilos específicos aqui */
</style>
