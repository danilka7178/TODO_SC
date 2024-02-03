<script lang="ts" setup>
import {ref, useSlots, watch} from 'vue';

interface Props {
  disabled?: boolean;
  placeholder?: string;
  clearInput: boolean;
}

const showIcon = ref(window.innerWidth < 992);
const isFocused = ref(false);
const todo = ref('');
const input = ref(null);

const slots = useSlots();
const props = defineProps<Props>();
const emit = defineEmits(['onAdd', 'onChange']);

const { disabled = false, placeholder = '' } = props;

const onCancel = () => {
  if(!todo.value){
    return
  }

  todo.value = '';
};

const calcIconShow = (didWeShowIcon: boolean) => {
  if(didWeShowIcon){
    showIcon.value = true;
    return
  }

  if(isFocused.value){
    showIcon.value = true;
    return
  }

  showIcon.value = false;
}

const onInput = (eventTarget: EventTarget | null) => {
  if (!eventTarget) return;
  const value = (eventTarget as HTMLInputElement).value;
  emit('onChange', value);
};

const focusInput = () => {
  isFocused.value = true;
  showIcon.value = true;
}
const blurInput = () => {
  isFocused.value = false;
  showIcon.value = window.innerWidth < 992;
}

const onAddTodo = (text: string) => {
  if(!text.length){
    return
  }

  emit('onAdd', text);
  todo.value = '';
  input.value?.blur();
}

watch(() => props.clearInput, () => {
  todo.value = '';
  input.value?.blur();
});

</script>

<template>
  <div :class="[
    'field',
    `disabled_${disabled}`,
    `right-icon_${Boolean(slots.rightIcon)}`
  ]"
       @mouseenter="calcIconShow(true)"
       @mouseleave="calcIconShow(false)"
  >
    <input
        ref="input"
        v-model="todo"
        class="field__input"
        type="text"
        @input="onInput($event.target)"
        @keyup.enter="onAddTodo(todo)"
        :placeholder="placeholder"
        :disabled="disabled"
        @focus="focusInput"
        @blur.self="blurInput"
    />
    <div v-if="slots.rightIcon && showIcon" class="field__right-icon" @click="onCancel" @mousedown.prevent>
      <slot name="rightIcon"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.field{
  position: relative;

  &__right-icon{
    top: 10px;
    right: 10px;
    position: absolute;
    cursor: pointer;
  }

  &__input {
    border-radius: 100px;
    padding: 12px;
    border: 1px solid $color-light-gray;
    color: $color-black;
    transition: .3s ease-in-out;
    min-width: 400px;

    &:hover{
      border: 1px solid $color-orange;
    }
  }
}

@media screen and (max-width: 1200px) {
  .field{
    &__input{
      min-width: 350px;
    }
  }
}

@media screen and (max-width: 1060px) {
  .field{
    &__input{
      min-width: 300px;
    }
  }
}

@media screen and (max-width: 992px) {
  .field{
    &__input{
      min-width: 450px;
    }
  }
}

@media screen and (max-width: 640px) {
  .field{
    &__input{
      min-width: unset;
    }
  }
}
</style>