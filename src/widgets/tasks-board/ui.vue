<script lang="ts" setup>
import {ref, nextTick, watch} from "vue";
import {storeToRefs} from 'pinia';
import {TaskCardByStatus, useTasksStore} from "@/entities/task";
import {Typography} from "@/shared/typography";

const renderComponent = ref(true);
const store = useTasksStore();
const { openTasksCount, inWorkTasksCount, closedTasksCount } = storeToRefs(store);

const reRenderUI = async () => {
  renderComponent.value = false;

  await nextTick();
  renderComponent.value = true;
}

watch([openTasksCount, inWorkTasksCount, closedTasksCount], () => {
  reRenderUI();
})
</script>

<template>
  <div class="board">
    <Typography class="board__header" tag-name="h1">Доска задач</Typography>
    <div class="board__task-cards-by-status" v-if="renderComponent">
      <TaskCardByStatus status="open" @rerenderUI="reRenderUI"/>
      <TaskCardByStatus status="inWork" @rerenderUI="reRenderUI"/>
      <TaskCardByStatus status="closed" @rerenderUI="reRenderUI"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.board{

  &__header{
    margin-bottom: 40px;
  }

  &__task-cards-by-status{
    display: flex;
    gap: 15px;
  }
}
</style>