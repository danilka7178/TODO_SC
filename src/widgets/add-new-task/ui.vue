<script lang="ts" setup>
import {ref} from "vue";

import {Typography} from "@/shared/typography";
import {ButtonTaskAdd} from '@/shared/button-task-add';
import {Field} from '@/shared/field';
import {Icon} from "@/shared/icon";

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
  }
}
</style>