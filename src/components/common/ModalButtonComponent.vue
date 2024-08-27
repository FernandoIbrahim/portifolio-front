<template>
  <button
    :title="title"
    class="flex justify-center items-center bg-stone-200 prevent-selection cursor-default p-0.5 rounded-sm"
    @click="openModal"
    data-bs-toggle="tooltip" data-bs-placement="bottom">
    <span class="material-symbols-outlined prevent-select">{{ content }}</span>

    <ModalComponent :isVisible="isVisible" @close="closeModal">
      <div class="flex flex-col justify-center items-center w-full">
        <RecommendationForm />
      </div>
    </ModalComponent>
  </button>
</template>

<script>
import ModalComponent from '@/components/common/ModalComponent.vue';
import RecommendationForm from '@/components/forms/RecommendationForm.vue';
import { useIsVisibleStore } from '@/stores/isModalVisible';

export default {
  name: 'ModalButtonComponent',
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
      required: false
    }
  },
  methods: {
    openModal() {
      const visibleStore = useIsVisibleStore();
      visibleStore.setVisibility(true);
    },
    closeModal() {
      const visibleStore = useIsVisibleStore();
      visibleStore.setVisibility(false);
    }
  },
  computed: {
    isVisible() {
      const visibleStore = useIsVisibleStore();
      return visibleStore.getVisibility();
    }
  },
  components: {
    ModalComponent,
    RecommendationForm
  }
};
</script>

<style>
.on-main-url {
  background-color: rgb(38 38 38);
}
</style>
