<script lang="ts" setup>
import {computed, ref} from "vue";

import { useTodoStore } from '@/entities/todo/store';
const store = useTodoStore();

import {Typography} from '@/shared/typography';
import {Button} from '@/shared/button';
import {Icon} from '@/shared/icon';
import {Task} from './task';

const isShowingMore = ref(false);
const tasksList = ref<null | HTMLDivElement>(null);
const isMobile = ref( window.innerWidth < 640);


const buttonMoreTasksText = ref({
  showMore: 'Показать ещё',
  hideMore: 'Скрыть',
});

const sortedTasks = computed(() => {
  return store.todos.sort((a,b) => {
    if(a.status < b.status) return 1;
    if(a.status > b.status) return -1;
    return 0;
  });
})

const sortAndSlicedTasks = computed(() => {
  return store.todos.sort((a,b) => {
    if(a.status < b.status) return 1;
    if(a.status > b.status) return -1;
    return 0;
  }).slice(0, 5);
})

const showOrHideMoreTasks = () => {
  if(isShowingMore.value){
    tasksList.value?.scrollIntoView({ behavior: "smooth" })
  }

  isShowingMore.value = !isShowingMore.value
}
</script>

<template>
  <div class="tasks-list" ref="tasksList">
    <div class="tasks-list__header">
      <Typography bold tag-name="h3">Задачи</Typography>
      <Typography v-if="!isMobile" bold tag-name="h3">Статус</Typography>
    </div>
    <div class="tasks-list__body">
      <Task
          v-for="task in isShowingMore ? sortedTasks : sortAndSlicedTasks"
          :key="task.id"
          :task="task"
      />
    </div>
    <Button
        class="tasks-list__showOrHideButton"
        v-if="store.todos.length > 5"
        @click="showOrHideMoreTasks"
        text-color="main"
        decoration="outline"
        color="white"
    >
      <template v-slot:icon v-if="isShowingMore">
        <Icon type="hideMore"/>
      </template>
      <template v-slot:icon v-else>
        <Icon type="showMore"/>
      </template>
      {{ isShowingMore ? buttonMoreTasksText["hideMore"] : buttonMoreTasksText["showMore"] }}
    </Button>
  </div>
</template>

<style lang="scss" scoped>
.tasks-list{
  background-color: $color-white;
  border-radius: 48px;
  padding: 40px 25px;

  &__header{
    display: flex;
    justify-content: space-between;
    margin: 0 20px 20px 0;
  }

  &__body{
    margin-bottom: 40px;
  }

  &__showOrHideButton{
    max-width: max-content;
  }
}

@media screen and (max-width: 992px) {
  .tasks-list{
    padding: 20px 25px;
  }
}

@media screen and (max-width: 640px) {
  .tasks-list{
    background-color: unset;
  }
}
</style>