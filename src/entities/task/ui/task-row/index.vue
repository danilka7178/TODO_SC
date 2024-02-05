<script lang="ts" setup>
import {ref, computed, shallowRef} from "vue";
import {type Task} from "@/entities/task";
import {DeleteOrEditTask} from "@/featured/delete-or-edit-task";
import {Typography} from '@/shared/typography';
import {Button} from '@/shared/button';
import {useModalStore} from '@/shared/modal';

const modal = useModalStore();
const {task} = defineProps<{ task: Task }>();
const isMobile = ref( window.innerWidth < 640);

const statusTexts: { [key: string]: any } = ref({
  open: 'Открыт',
  inWork: 'В работе',
  closed: 'Закрыт',
});

const statusText = computed(() => {
  return statusTexts.value[task.status];
})

const changeTask = () => {
  modal.open({
    component: shallowRef(DeleteOrEditTask),
    componentProps: task,
  })
}
</script>

<template>
  <div class="task">
    <div class="task__text">
      <Typography tag-name="span">{{ task.text }}</Typography>
    </div>
    <div class="task__status">
      <Button
          @click="changeTask"
          :text-color="isMobile ? 'main' : 'black'"
          :color="isMobile ? 'white' : 'gray'"
          :decoration="isMobile ? 'outline' : 'none'"
      >
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

@media screen and (max-width: 992px) {
  .task{
    &__text{
      max-width: 75%;
    }
  }
}

@media screen and (max-width: 640px) {
  .task{
    display: block;
    padding: 20px;
    border-radius: 50px;
    background-color: $color-white;

    &:not(:last-child){
      border-bottom: unset;
    }

    &__text{
      max-width: unset;
      margin-bottom: 15px;

      &:deep(.typography){
        font-weight: 700;
      }
    }

    &__status{
      &:deep(button){
        display: block;
      }
      &:deep(.typography){
        font-weight: 700;
      }
    }
  }
}
</style>