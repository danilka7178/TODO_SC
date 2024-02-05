<script lang="ts" setup>
</script>

<template>
  <div class="plus-task">
    <span class="plus-task__strip plus-task__strip--horizontal"/>
    <span class="plus-task__strip"/>
  </div>
</template>

<style lang="scss">
.plus-task{
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: $color-orange;
  cursor: pointer;

  &:hover{
    opacity: .8;
  }

  &__strip{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

    width: 18px;
    height: 2px;
    background-color: $color-white;

    &--horizontal{
      transform: rotate(90deg);
    }
  }
}
</style>