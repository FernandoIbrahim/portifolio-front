<template>
    <div class="h-full w-full items-start">

        <ProjectComponent name = "Boutique das Carnes" desc = "Projeto em grupo desenvolvido na disciplina Trabalho Interdiciplinar 3, junto com meus colegas Jhonata Silva, Lucca Azalim e Rafa Moreira. No qual, o grupo implementou uma aplicação Web para a completa gestão de uma distribuidora de carnes. " :img = "`${route}1723937166395-butique-das-carnes.png`" data = "2024" url="https://github.com/lucaazalim/boutique-das-carnes"/>
        <ProjectComponent name = "Party Hall Manager" desc = "Projeto desenvolvido em C,  no primeiro semestre entre as disciplinas de Algoritmos e Desenvolvimento Sistemas I e Fundamentos de Engenharia de Software. Um sistema de controle e gestão para lidar com desafios operacionais de um salao de Festas, como conflitos de horários para festas e a falta de armazenamento eficiente de dados de clientes e fornecedores." :img = "`${route}1723945580186-Party Hall Manager.png`" url="https://github.com/FernandoIbrahim/party-hall-manager"/>
        <ProjectComponent name = "Stock Market Simulator" desc = "Projeto sobre a implementação de um sistema de simulação de uma bolsa de valores, desenvolvido como parte do trabalho prático sobre Princípios SOLID e Padrões de Projeto, realizado em dupla na disciplina de Programação Modular, com o meu colega Gabriel Ferreira. " :img = "`${route}1723946932056-stock-market-simulator.png`" data = "2023" url="https://github.com/FernandoIbrahim/stock-market-simulator"/>

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