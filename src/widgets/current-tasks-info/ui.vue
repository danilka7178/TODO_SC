<script lang="ts" setup>
  import { Typography } from '@/shared/typography';
  import { TaskInfoBadge } from "@/shared/task-info-badge";
</script>

<template>
  <div class="current-task-info">
    <div class="current-task-info__header">
      <Typography tagName="h2">Текущие задачи</Typography>
    </div>
    <div class="current-task-info__content">
      <TaskInfoBadge type="opened"/>
      <TaskInfoBadge type="inWork"/>
      <TaskInfoBadge type="closed"/>
    </div>
  </div>
</template>

<style lang="scss">
  .current-task-info{
    background-color: var(--color-white);
    padding: 40px 25px;
    border-radius: 48px;

    &__header{
      margin-bottom: 25px;
    }

    &__content{
      display: flex;
      gap: 0 30px;
    }
  }

  @media screen and (max-width: 992px) {
    .current-task-info{
      min-width: 600px;
    }
  }

  @media screen and (max-width: 640px) {
    .current-task-info{
      min-width: 343px;
    }
  }
</style>