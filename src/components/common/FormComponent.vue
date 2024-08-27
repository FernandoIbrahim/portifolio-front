<template>

    <form class="max-w-2xl flex flex-col dark:text-[#DADADA] mt-2 mb-2 dark:bg-[#262626] p-5 items-start justify-start">
        <slot>

        </slot>
        <div class="flex flex-row justify-center w-full mt-10">
            <button class = " bg-neutral-700 p-2 w-32 radios rounded-sm" type="submit">Enviar</button>
        </div>  
    </form>

</template>

<script>

    export default {
        name: 'FormComponent',
        methods: {
            
        }
    }

</script>