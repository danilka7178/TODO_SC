<script lang="ts" setup>
  import { Typography } from '@/shared/typography';
  import { TaskInfoBadge } from "@/shared/task-info-badge";
</script>

<template>
  <div class="info-about-current-tasks">
    <Typography class="info-about-current-tasks__header" tagName="h2">Текущие задачи</Typography>
    <div class="info-about-current-tasks__content">
      <TaskInfoBadge type="opened"/>
      <TaskInfoBadge type="inWork"/>
      <TaskInfoBadge type="closed"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .info-about-current-tasks{
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
      gap: 0 30px;
    }
  }
</style>