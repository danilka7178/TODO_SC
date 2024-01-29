<script lang="ts" setup>

</script>

<template>
  <div class="button-task-add">
    <span class="plus-strip plus-strip--horizontal"></span>
    <span class="plus-strip plus-strip--vertical"></span>
  </div>
</template>

<style lang="scss" scoped>
.button-task-add{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--color-orange);
  cursor: pointer;
  position: relative;

  .plus-strip{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

    width: 18px;
    height: 2px;
    background-color: var(--color-white);


    &--horizontal{
      transform: rotate(90deg);
    }
  }
}
</style>