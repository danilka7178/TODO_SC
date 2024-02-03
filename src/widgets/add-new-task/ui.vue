<script lang="ts" setup>
import {ref} from "vue";

import {Typography} from "@/shared/typography";
import {ButtonTaskAdd} from '@/shared/button-task-add';
import {Field} from '@/shared/field';

const inputValue = ref('');
const clearInput = ref(false);

const onChangeSearch = (value: string) => {
  if(!value.length){
    return
  }

  inputValue.value = value;
};

const onAddNewTodo = (text: string) => {
  addNewTodo(text);
};
const clickButtonAdd = () => {
  addNewTodo(inputValue.value);
  clearInput.value = !clearInput.value;
}

const addNewTodo = (todoText: string) => {
  if(!todoText.length){
    return
  }

  console.log('NEW TODO TEXT TO ADD: ', todoText)
}
</script>

<template>
<div class="add-new-task">
  <Typography class="add-new-task__header" tagName="h2">Добавить задачу</Typography>
  <div class="add-new-task__content">
    <ButtonTaskAdd @click="clickButtonAdd"/>
    <Field placeholder="Текст" @onAdd="onAddNewTodo" @onChange="onChangeSearch" :clearInput="clearInput">
      <template #rightIcon>
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.41683 15.6248C5.20362 15.6248 4.9904 15.5435 4.82764 15.3807C4.50211 15.0552 4.50211 14.5278 4.82764 14.2023L13.9943 5.03565C14.3198 4.71012 14.8472 4.71012 15.1727 5.03565C15.4982 5.36117 15.4982 5.88852 15.1727 6.21403L6.00603 15.3807C5.84327 15.5435 5.63005 15.6248 5.41683 15.6248Z" fill="#FF6600"/>
          <path d="M14.5835 15.6248C14.3703 15.6248 14.1571 15.5435 13.9943 15.3807L4.82764 6.21403C4.50211 5.8885 4.50211 5.36116 4.82764 5.03564C5.15316 4.71013 5.68051 4.71012 6.00603 5.03564L15.1727 14.2023C15.4982 14.5278 15.4982 15.0552 15.1727 15.3807C15.0099 15.5435 14.7967 15.6248 14.5835 15.6248Z" fill="#FF6600"/>
        </svg>
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
  }
}
</style>