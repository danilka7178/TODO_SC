<script lang="ts" setup>
import { Typography } from '@/shared/typography';
import { Container } from "@/shared/container";
import { InfoAboutCurrentTasks } from "@/widgets/info-about-current-tasks";
import { AddNewTask } from "@/widgets/add-new-task";
</script>

<template>
  <Container class="container">
    <Typography tagName="h1" bold>ToDo List Scloud</Typography>
    <div class="widget-blocks">
      <InfoAboutCurrentTasks />
      <AddNewTask />
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.container{
  background-color: var(--color-light-gray);
  padding: 60px;

  &--white{
    background-color: var(--color-white);
  }
}

.widget-blocks{
  display: flex;
  gap: 20px;

  @media screen and (max-width: 992px) {
    min-width: 600px;
    display: block;
  }
}
</style>