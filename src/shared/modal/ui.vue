<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import { useModalStore } from './store';
const modal = useModalStore();

const handleKeyup = (event: any) => {
  if (event.keyCode === 27) {
    modal.close();
  }
};

onMounted(() => document.addEventListener("keyup", handleKeyup));
onUnmounted(() => document.removeEventListener("keyup", handleKeyup));
//TODO! Warn - Vue received a Component that was made a reactive object.
</script>

<template>
  <transition name="fade">
    <div class="vue-modal" v-if="modal.state.component" @click.self="modal.close">
      <transition name="drop-in">
        <Component
            :is="modal.state.component"
            v-bind="modal.state.componentProps"
            @close="modal.close()"
        />
      </transition>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.vue-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: $color-light-gray;
  z-index: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drop-in-enter-active,
.drop-in-leave-active {
  transition: all 0.3s ease-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
