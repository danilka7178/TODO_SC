<script lang="ts" setup>
import {ref} from "vue";
import {v4 as uuidv4} from 'uuid';

import { PlusTask, useTasksStore } from '@/entities/task';
import {Typography} from "@/shared/typography";
import {Field} from '@/shared/field';
import {Icon} from "@/shared/icon";

const store = useTasksStore();

const inputValue = ref('');

const onChangeSearch = (value: string) => {
  if(!value.length){
    return
  }

  inputValue.value = value;
};

const clickButtonAdd = () => {
  addNewTask(inputValue.value);
}

const addNewTask = (taskText: string) => {
  if(!taskText.length){
    return
  }

  store.addTask({
    text: taskText,
    id: uuidv4(),
    status: 'open',
  });

  inputValue.value = '';
}
</script>

<template>
<div class="add-new-task">
  <Typography class="add-new-task__header" tagName="h2">Добавить задачу</Typography>
  <div class="add-new-task__content">
    <PlusTask @click="clickButtonAdd"/>
    <Field placeholder="Текст" @onAdd="addNewTask" @onChange="onChangeSearch" :value="inputValue">
      <template #rightIcon>
        <Icon type='orangeClose'/>
      </template>
    </Field>
  </div>
</div>
</template>

<style lang="scss" scoped>
.add-new-task{
  background-color: $color-white;
  padding: 40px 25px;
  border-radius: 48px;

  &__header{
    margin-bottom: 25px;
  }

  &__content{
    display: flex;
    gap: 0 15px;

    &:deep(.field){
      flex-grow: 1;
    }
  }
}
</style>