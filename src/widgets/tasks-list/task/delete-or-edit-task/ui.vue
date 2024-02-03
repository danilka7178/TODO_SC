<script lang="ts" setup>
import {Icon} from '@/shared/icon';
defineEmits(['close'])

defineProps<{
  title: string
  body: string
}>()
</script>
<template>
  <div class="vue-modal-inner">
    <div class="vue-modal-inner__icon" @click="$emit('close')">
      <Icon type='blackClose'/>
    </div>
    <div class="vue-modal-inner__content">
      DELETE OR EDIT
    </div>
  </div>
</template>
<style lang="scss" scoped>
.vue-modal-inner {
  position: relative;
  max-width: 500px;
  margin: 20% auto;
  background-color: $color-white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  border-radius: 15px;
  padding: 20px;
  z-index: 2;

  &__icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 1;
  }

  &__content {
  }
}
</style>