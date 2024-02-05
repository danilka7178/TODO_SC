<script lang="ts" setup>
import {AboutTasks} from "@/widgets/about-tasks";
import {AddNewTask} from "@/widgets/add-new-task";
import {TasksList} from "@/widgets/tasks-list";
import {TasksBoard} from "@/widgets/tasks-board";
import {Typography} from '@/shared/typography';
import {Container} from "@/shared/container";
import {Modal} from '@/shared/modal';
</script>

<template>
  <Modal />
  <div class="substrate">
    <Container class="container">
      <Typography class="app-name" tagName="h1" bold>ToDo List Scloud</Typography>
      <div class="widget-blocks">
        <AboutTasks class="widget-blocks__widget"/>
        <AddNewTask class="widget-blocks__widget add-task"/>
      </div>
      <TasksList />
    </Container>
  </div>
  <Container class="container--white">
    <TasksBoard/>
  </Container>
</template>

<style lang="scss" scoped>
.substrate{
  background-color: $color-light-gray;
}

.container{
  padding: 60px 10px 60px 10px;

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
  margin-bottom: 40px;

  .add-task{
    flex-grow: 1;
  }
}

@media screen and (max-width: 992px) {
  .app-name{
    margin-bottom: 10px;
  }

  .widget-blocks{
    display: grid;
    grid-row-gap: 30px;
    margin-bottom: 15px;
  }
}
</style>