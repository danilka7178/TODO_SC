<script lang="ts" setup>
import { Typography } from '@/shared/typography';
import { Container } from "@/shared/container";
import { AboutTasks } from "@/widgets/about-tasks";
import { AddNewTask } from "@/widgets/add-new-task";
</script>

<template>
  <div class="substrate">
    <Container class="container">
      <Typography class="app-name" tagName="h1" bold>ToDo List Scloud</Typography>
      <div class="widget-blocks">
        <AboutTasks class="widget-blocks__widget"/>
        <AddNewTask class="widget-blocks__widget"/>
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>

.substrate{
  background-color: $color-light-gray;
}

.container{
  padding: 60px 20px;

  &--white{
    background-color: $color-white;
  }
}

.app-name{
  margin-bottom: 15px;
}

.widget-blocks{
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  &__widget{
    max-width: 588px;
  }
}

@media screen and (max-width: 992px) {
  .container{
    padding: 20px 10px;
  }

  .app-name{
    margin-bottom: 10px;
  }

  .widget-blocks{
    display: grid;
    grid-row-gap: 30px;

    &__widget{
      max-width: 550px;
    }
  }
}

@media screen and (max-width: 640px) {
  .container{
    padding: 10px 0;
  }
}
</style>