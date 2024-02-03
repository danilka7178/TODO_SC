<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import {Icon} from "@/shared/icon";

interface Props {
  open: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['close']);

const close = () => {
  emit("close");
};

const handleKeyup = (event: any) => {
  if (event.keyCode === 27) {
    close();
  }
};

onMounted(() => document.addEventListener("keyup", handleKeyup));
onUnmounted(() => document.removeEventListener("keyup", handleKeyup));
</script>

<template>
  <transition name="fade">
    <div class="vue-modal" v-show="open">
      <transition name="drop-in">
        <div class="vue-modal__inner" v-show="open">
          <div class="vue-modal__content">
            <div class="vue-modal__icon" @click="close">
              <Icon type='blackClose'/>
            </div>
            <slot />
          </div>
        </div>
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
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;

  &__inner {
    max-width: 500px;
    margin: 20% auto;
  }

  &__content {
    position: relative;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-clip: padding-box;
    border-radius: 0.3rem;
    padding: 1rem;
  }

  &__icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
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
