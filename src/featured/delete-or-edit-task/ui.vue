<script lang="ts" setup>
import {Icon} from '@/shared/icon';
import {Typography} from "@/shared/typography";
import {Field} from "@/shared/field";
import {Button} from "@/shared/button";

import { v4 as uuidv4 } from 'uuid';
import {ref, nextTick, watch} from 'vue';

import { useTasksStore } from '@/entities/task/model/store';
const store = useTasksStore();

const emit = defineEmits(['close']);
const props = defineProps<{
  text: string
  id: number
  status: string
}>();

const statusTask = ref(props.status);
const oldStatusTask = ref(props.status);
const oldTextTask = ref(props.text);
const textTask = ref(props.text);
const renderComponent = ref(true);
const sameTaskText = ref(true);
const sameTaskStatus = ref(true);

const handleClickDeleteTask = (id: number) => {
  store.removeTask(id);
  emit('close');
}
const handleClickEditTask = (id: number) => {
  store.removeTask(id);
  store.addTask({
    text: textTask.value,
    id: uuidv4(),
    status: statusTask.value,
  });
  emit('close');
}

const changeTaskStatus = (newStatus: string) => {
  statusTask.value = newStatus;
}

const changeTaskText = (taskText: string) => {
  textTask.value = taskText;
}

const reRenderUI = async () => {
  renderComponent.value = false;

  await nextTick();
  renderComponent.value = true;
}

watch(() => textTask.value, () => {
  sameTaskText.value = oldTextTask.value === textTask.value;
  reRenderUI();
})

watch(() => statusTask.value, () => {
  sameTaskStatus.value = statusTask.value === oldStatusTask.value;
  reRenderUI();
})
</script>

<template>
  <div class="vue-modal-inner">
    <div class="vue-modal-inner__icon" @click="$emit('close')">
      <Icon type='blackClose'/>
    </div>
    <div class="vue-modal-inner__content editingModal">
      <Typography class="editing-modal__header" tag-name="h2">Изменение задачи</Typography>
      <Field class="editing-modal__input" :default-text="text" @onChange="changeTaskText"/>
      <div class="editing-modal__choose-task-status" v-if="renderComponent">
        <Button
            textColor="white" color="orange"
            :disabled="'open' === statusTask"
            @click="changeTaskStatus('open')"
        >
          Отложить
        </Button>
        <Button
            textColor="white" color="orange"
            :disabled="'inWork' === statusTask || 'closed' === oldStatusTask"
            @click="changeTaskStatus('inWork')"
        >
          В работу
        </Button>
        <Button
            textColor="white"
            color="orange"
            :disabled="'closed' === statusTask"
            @click="changeTaskStatus('closed')"
        >
          Закрыть
        </Button>
      </div>
      <div class="editing-modal__confirm-buttons" v-if="renderComponent">
        <Button
            textColor="white"
            color="orange"
            :disabled="sameText && sameStatus"
            @click="handleClickEditTask(id)"
        >
          Применить
        </Button>
        <Button textColor="main"
                color="white"
                decoration="outline"
                @click="handleClickDeleteTask(id)"
        >
          Удалить задачу
        </Button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.vue-modal-inner {
  position: relative;
  max-width: 500px;
  margin: 20% auto;
  background-color: $color-white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  border-radius: 15px;
  padding: 20px;
  z-index: 2;

  &__icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 1;
  }
}

.editing-modal{
  &__header{
    margin-bottom: 20px;
  }

  &__input{
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 2px solid $color-light-gray;
  }

  &__choose-task-status{
    margin-bottom: 25px;
    display: flex;
    gap: 10px;

    Button{
      display: block;
    }
  }

  &__confirm-buttons{
    display: flex;
    gap: 30px;

    Button{
      display: block;
    }
  }
}
</style>