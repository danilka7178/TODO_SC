<script lang="ts" setup>
import {ref, computed} from "vue";

import {Typography} from '@/shared/typography';
import {Button} from '@/shared/button';

import {DeleteOrEditTask} from "@/featured/delete-or-edit-task";
import { useModalStore } from '@/shared/modal';
const modal = useModalStore();

interface Props {
  task: {
    text: string,
    id: number,
    status: string,
  },
}
const props = defineProps<Props>();

const statusTexts: { [key: string]: any } = ref({
  open: 'Открыт',
  inWork: 'В работе',
  closed: 'Закрыт',
});

const statusText = computed(() => {
  return statusTexts.value[props.task.status];
})

const changeTask = () => {
  modal.open({
    component: DeleteOrEditTask,
    componentProps: props.task,
  })
}
</script>

<template>
  <div class="task">
    <div class="task__text">
      <Typography tag-name="span">{{ task.text }}</Typography>
    </div>
    <div class="task__status">
      <Button @click="changeTask" text-color="black" color="gray">
        {{ statusText }}
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;

  &:not(:last-child){
    border-bottom: 1px $color-light-gray solid;
  }

  &__text{
    max-width: 85%;
  }
}
</style>