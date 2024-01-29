<script lang="ts" setup>
import {Typography} from "@/shared/typography";
import {ButtonTaskAdd} from '@/shared/button-task-add';
</script>

<template>
<div class="add-new-task">
  <Typography class="add-new-task__header" tagName="h2">Добавить задачу</Typography>
  <div class="add-new-task__content">
    <ButtonTaskAdd />
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

    @media screen and (max-width: 992px) {
      min-width: 600px;
    }

    @media screen and (max-width: 640px) {
      min-width: 343px;
    }

    &__header{
      margin-bottom: 25px;
    }

    &__content{
      display: flex;
      gap: 0 15px;
    }
  }

</style>