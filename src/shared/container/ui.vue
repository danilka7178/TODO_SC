<script lang="ts" setup>
</script>

<template>
  <div class="container"><slot></slot></div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1202px;
  width: 100%;
  margin: 0 auto;
}

@media screen and (max-width: 992px) {
  .container {
    max-width: 640px;
  }
}

@media screen and (max-width: 640px) {
  .container {
    max-width: 295px;
  }
}
</style>