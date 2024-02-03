<script lang="ts" setup>
import {Icon} from '@/shared/icon';
import {Typography} from "@/shared/typography";
import {Field} from "@/shared/field";
import {Button} from "@/shared/button";

defineEmits(['close']);

defineProps<{
  text: string
  id: number
  status: string
}>();

</script>
<template>
  <div class="vue-modal-inner">
    <div class="vue-modal-inner__icon" @click="$emit('close')">
      <Icon type='blackClose'/>
    </div>
    <div class="vue-modal-inner__content editingModal">
      <Typography class="editing-modal__header" tag-name="h2">Изменение задачи</Typography>
      <Field class="editing-modal__input" :default-text="text"/>
      <div class="editing-modal__choose-task-status">
        <Button :textColor="status !== 'open' ? 'white' : 'black'"
                :color="status !== 'open' ? 'orange' : 'gray'"
                :disabled="status === 'open'"
        >
          Отложить
        </Button>
        <Button :textColor="status !== 'inWork' ? 'white' : 'black'"
                :color="status !== 'inWork' ? 'orange' : 'gray'"
                :disabled="status === 'inWork'"
        >
          В работу
        </Button>
        <Button :textColor="status !== 'closed' ? 'white' : 'black'"
                :color="status !== 'closed' ? 'orange' : 'gray'"
                :disabled="status === 'closed'"
        >
          Закрыть
        </Button>
      </div>
      <div class="editing-modal__confirm-buttons">
        <Button textColor="white" color="orange">Применить</Button>
        <Button textColor="main" color="white" decoration="outline">Удалить задачу</Button>
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