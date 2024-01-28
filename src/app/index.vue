<script lang="ts" setup>
import { Typography } from '@/shared/typography';
import { Container } from "@/shared/container";
import { CurrentTasksInfo } from "@/widgets/current-tasks-info";
import { AddNewTask } from "@/widgets/add-new-task";
</script>

<template>
  <div class="substrate">
    <Container>
      <Typography tagName="h1" bold>ToDo List Scloud</Typography>
      <div class="top-blocks">
        <CurrentTasksInfo />
        <AddNewTask />
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.substrate{
  background-color: var(--color-light-gray);
  padding: 60px;

  &--white{
    background-color: var(--color-white);
  }
}

.top-blocks{
  display: flex;
  gap: 20px;
}


@media screen and (max-width: 992px) {
  .top-blocks{
    min-width: 600px;
    display: block;
  }
}
</style>