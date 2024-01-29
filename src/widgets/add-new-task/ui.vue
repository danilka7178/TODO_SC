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
  background-color: $color-white;
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
</style>