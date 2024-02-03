<script lang="ts" setup>
import {computed, reactive, ref} from "vue";

import {Typography} from '@/shared/typography';
import {Button} from '@/shared/button';
import {Icon} from '@/shared/icon';
import {Modal} from '@/shared/modal'

const isOpenModal = ref(false);
const taskToChange = ref (null);

const statusTexts = ref({
  open: 'Открыт',
  inWork: 'В работе',
  closed: 'Закрыт',
});

const buttonMoreTasksText = ref({
  showMore: 'Показать ещё',
  hideMore: 'Скрыть',
});

const isShowingMore = ref(false);
const tasksList = ref(null);

const tasks = reactive([
{
  id: 0,
  text: 'Поднять инфрастуктуру проекта',
  status: 'open',
},
{
  id: 1,
  text: 'Проснуться, улыбнуться, сделать отжимания, слетать на Марс и прочитать книгу',
  status: 'inWork',
},
{
  id: 2,
  text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
  status: 'closed',
},
{
  id: 3,
  text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
  status: 'open',
},
{
  id: 4,
  text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
  status: 'open',
},
{
  id: 5,
  text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
  status: 'open',
},
{
  id: 6,
  text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
  status: 'closed',
},
{
  id: 7,
  text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
  status: 'inWork',
},
{
  id: 8,
  text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
  status: 'inWork',
}
])

const sortedTasks = computed(() => {
  return tasks.sort((a,b) => {
    if(a.status < b.status) return 1;
    if(a.status > b.status) return -1;
    return 0;
  });
})

const changeTask = (taskId: number) => {
  taskToChange.value = tasks[taskId];
  isOpenModal.value = !isOpenModal.value;
}

const showOrHideMoreTasks = () => {
  if(isShowingMore.value){
    tasksList.value?.scrollIntoView({ behavior: "smooth" })
  }

  isShowingMore.value = !isShowingMore.value
}
</script>

<template>
  <Modal :open="isOpenModal" @close="isOpenModal = !isOpenModal">
    <div>123</div>
  </Modal>
  <div class="tasks-list" ref="tasksList">
    <div class="tasks-list__header">
      <Typography bold tag-name="h3">Задачи</Typography>
      <Typography bold tag-name="h3">Статус</Typography>
    </div>
    <div class="tasks-list__task task" v-for="task in isShowingMore ? sortedTasks : sortedTasks.slice(0, 5)" :key="task.id">
      <div class="task__text">
        <Typography tag-name="span">{{ task.text }}</Typography>
      </div>
      <div class="task__status">
        <Button @click="changeTask(task.id)" text-color="black" color="gray">
          {{ statusTexts[task.status] }}
        </Button>
      </div>
    </div>
    <div class="tasks-list__footer" v-if="tasks.length >= 5">
      <Button class="tasks-list__showOrHideButton" @click="showOrHideMoreTasks" text-color="main" decoration="outline" color="white">
        <template v-slot:icon v-if="isShowingMore">
          <Icon type="hideMore"/>
        </template>
        <template v-slot:icon v-else>
          <Icon type="showMore"/>
        </template>
        {{ isShowingMore ? buttonMoreTasksText["hideMore"] : buttonMoreTasksText["showMore"] }}
      </Button>
    </div>
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
    margin: 0px 20px 20px 0px;
  }

  &__task{
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  &__footer{
    margin-top: 40px;
  }

  &__showOrHideButton{
    max-width: max-content;
  }
}

.task{
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child){
    border-bottom: 1px $color-light-gray solid;
  }

  &__text{
    max-width: 85%;
  }
}

@media screen and (max-width: 992px) {
  .tasks-list{
    padding: 20px 15px;
  }
}
</style>