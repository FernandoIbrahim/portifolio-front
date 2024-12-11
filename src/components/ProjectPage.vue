<template>
    <div class="h-full w-full items-start">

        <ProjectComponent name = "Boutique das Carnes" desc = " Participei no desenvolvimento de uma aplicação Web para a gestão completa de uma distribuidora de carnes situada na cidade de Ilheus (Bahia). Minha principal contribuição foi no backend, onde fui responsável por implementar a conexão da aplicação com um banco de dados relacional MariaDB, utilizando o Node.js com o framework Express, e o ORM Sequelize para a interação com o banco de dados." :img = "`/projects/1723937166395-butique-das-carnes.png`" data = "2024" url="https://github.com/lucaazalim/boutique-das-carnes"/>
                <ProjectComponent name = "Sistema de Aluguel de Carros " desc = "O projeto  foi desenvolvido em java, durante a disciplina de Projetos de Software, visando colocar em prática os aprendizados ligados a arquitetura MVC, Spring Boot e aplicações backend." data = "2024" :img = "`/sistema-aluguel-carros.jpg`" url="https://github.com/FernandoIbrahim/lds/tree/main/lab-02"/>
        <ProjectComponent name = "Party Hall Manager" desc = " Sistema de controle e gestão desenvolvido em C no primeiro semestre, voltado para resolver desafios operacionais em um salão de festas. O projeto aborda problemas como conflitos de horários para eventos e a falta de um armazenamento eficiente de dados de clientes e fornecedores" :img = "`/projects/1723945580186-Party Hall Manager.png`" url="https://github.com/FernandoIbrahim/party-hall-manager"/>

    </div>

</template>

<script>

    import ProjectComponent from '@/components/common/ProjectComponent.vue'

    export default {
        name: 'ProjectPage',
        components: {
            ProjectComponent,
        },
        data(){
            return {
                items: [],
                route: 'http://localhost:5173/projects/'
            }
        }
    }

</script>