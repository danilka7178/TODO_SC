<script lang="ts" setup>
  import { Typography } from '@/shared/typography';
  import { TaskInfoBadge } from "./task-info-badge";
</script>

<template>
  <div class="about-tasks">
    <Typography class="about-tasks__header" tagName="h2">Текущие задачи</Typography>
    <div class="about-tasks__badges">
      <TaskInfoBadge class="about-tasks__badge" type="opened"/>
      <TaskInfoBadge class="about-tasks__badge" type="inWork"/>
      <TaskInfoBadge class="about-tasks__badge" type="closed"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-tasks{
  background-color: $color-white;
  padding: 40px 25px;
  border-radius: 48px;

  &__header{
    margin-bottom: 25px;
  }

  &__badges{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 992px) {
    .about-tasks{
      padding: 30px 20px;

      &__header{
        margin-bottom: 15px;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .about-tasks{
      &__header{
        margin-bottom: 10px;
      }

      &__badges{
        display: grid;
        grid-row-gap: 8px;
      }
    }
  }
}
</style>