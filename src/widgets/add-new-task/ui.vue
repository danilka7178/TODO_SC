<script lang="ts" setup>
import {Typography} from "@/shared/typography";
</script>

<template>
<div class="add-new-task">
  <div class="add-new-task__header">
    <Typography tagName="h2">Добавить задачу</Typography>
  </div>
  <div class="add-new-task__content">
    <span>BTN</span>
    <span>INPUT</span>
  </div>
</div>
</template>

<style lang="scss" scoped>
  .add-new-task{
    min-width: 588px;
    background-color: var(--color-white);
    padding: 40px 25px;
    border-radius: 48px;

    &__header{
      margin-bottom: 25px;
    }

    &__content{
      display: flex;
      gap: 0 15px;
    }
  }

  @media screen and (max-width: 992px) {
    .add-new-task{
      min-width: 600px;
    }
  }

  @media screen and (max-width: 640px) {
    .add-new-task{
      min-width: 343px;
    }
  }
</style>