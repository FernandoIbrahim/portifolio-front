<template>
    <div class="tooltip">

        <button  :class= "{ 'on-main-url': isMainURL , 'color-inversion': (isHovering && !isMainURL) }"
            class="flex justify-center items-center bg-neutral-900 prevent-selection cursor-default p-0.5 rounded-sm"
            @click = "navigate" 
            @mouseover= "isHovering = true" @mouseout="isHovering = false"
            >
            <!-- <span class="material-symbols-outlined prevent-select"> {{ content }} </span> -->
            <svg class="w-7 h-7 justify-center items-center p-0.5" fill="white">
                <use :href="`https://localhost:5173/icons/icons.svg#${content}`" />
            </svg>

        </button>

        <span class="tooltiptext text-xs">{{ title }}</span>

    </div>
</template>
  


<script>

export default {

    name: 'buttonComponent',
    props: {
        content: {
            type: String,
            required: true
        },
        mainUrl: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isHovering: false,
            currentPath: '',
        };
    },
    computed: {
        isMainURL() {
            return this.mainUrl === this.currentPath;
        }
    },
    methods: {
        navigate() {
            if (this.mainUrl.includes('http')) {
                window.open(`${this.mainUrl}`);
            }
            else {
                this.$router.push(`${this.mainUrl}`);
                this.isMainURL;
            }
        },
        updateCurrentPath() {
            this.currentPath = window.location.pathname;
        }
    },
    watch: {
        '$route'() {
            this.updateCurrentPath();
        }
    },
    created() {
        console.log('Objeto criado');
    },
    components: {
    }
};


</script>


  
<style>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltiptext {
  visibility: hidden;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 3px 8px;
  border-radius: 2px;
  white-space: nowrap;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  top: 120%;
  left: 50%;
  transform: translateX(-50%); /* Centraliza o tooltip horizontalmente */
  
  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltiptext::after {
  content: "";
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.on-main-url {
  background-color: rgb(38, 38, 38);
}


</style>
  