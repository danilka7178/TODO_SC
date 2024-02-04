<script lang="ts" setup>
import {ref} from "vue";
import { v4 as uuidv4 } from 'uuid';

import {Typography} from "@/shared/typography";
import {Field} from '@/shared/field';
import {Icon} from "@/shared/icon";
import {ButtonTaskAdd} from '@/featured/button-task-add';

import { useTodoStore } from '@/entities/todo/store';
const store = useTodoStore();

const inputValue = ref('');

const onChangeSearch = (value: string) => {
  if(!value.length){
    return
  }

  inputValue.value = value;
};

const clickButtonAdd = () => {
  addNewTodo(inputValue.value);
}

const addNewTodo = (todoText: string) => {
  if(!todoText.length){
    return
  }

  store.addTodo({
    text: todoText,
    id: uuidv4(),
  });

  inputValue.value = '';
}
</script>

<template>
<div class="add-new-task">
  <Typography class="add-new-task__header" tagName="h2">Добавить задачу</Typography>
  <div class="add-new-task__content">
    <ButtonTaskAdd @click="clickButtonAdd"/>
    <Field placeholder="Текст" @onAdd="addNewTodo" @onChange="onChangeSearch" :value="inputValue">
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