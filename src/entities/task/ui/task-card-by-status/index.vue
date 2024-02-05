<script lang="ts" setup>
import {ref, computed} from "vue";
import {useTasksStore, type Task} from "@/entities/task";
import {Button} from "@/shared/button";
import {Typography} from "@/shared/typography";

interface Props {
  status: string;
}
const {status} = defineProps<Props>();
const emit = defineEmits(['rerenderUI']);
const store = useTasksStore();

const nameCardByStatus = status + 'Tasks';
const listByStatus = ref(store[nameCardByStatus]);

const statusText = computed(() => {
  return status === 'open' ? 'Открыто' :
         status === 'inWork' ? 'В работе' : 'Закрыто'
})

const startDrag = (event: any, task: Task) => {
  event.dataTransfer.dropEffect = 'move';
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('taskID', task.id);
}
const onDrop = (event: any, newStatus: string) => {
  const taskID = event.dataTransfer.getData('taskID');
  store.changeTaskStatus(taskID, newStatus);
  emit("rerenderUI");
}
</script>

<template>
  <div class="task-card-by-status">
    <div class="task-card-by-status__header">
      <Button color="gray" text-color="black" disabled>{{ statusText }}</Button>
    </div>
    <div
        class="task-card-by-status__body"
        @drop="onDrop($event, status)"
        @dragenter.prevent
        @dragover.prevent
    >
      <Typography
          v-for="task in listByStatus"
          :id="task.id"
          class="task-card-by-status__task"
          tag-name="span"
          bold
          size="s"
          draggable="true"
          @dragstart="startDrag($event, task)"
      >
        {{ task.text }}
      </Typography>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-card-by-status{
  flex-basis: 33%;

  &__header{
    margin-bottom: 25px;

    &:deep(button){
      width: unset;
    }

    &:deep(.typography){
      font-weight: 700;
      font-size: 18px;
    }
  }

  &__body{
    display: grid;
    grid-row-gap: 12px;
    padding: 15px;
    border-radius: 25px;
    background-color: $color-light-gray;
    min-height: 10px;
  }

  &__task{
    padding: 15px 20px;
    border-radius: 25px;
    background-color: $color-white;
  }
}
</style>