<script lang="ts" setup>
import { useSlots } from 'vue';
import {Typography} from '@/shared/typography'
interface Props {
  textColor?: 'main' | 'white' | 'black';
  color?: 'orange' | 'white' | 'gray';
  decoration?: 'outline' | 'none';
  disabled?: boolean;
}

const slots = useSlots();
const props = defineProps<Props>();

const {
  textColor = 'main',
  color = 'orange',
  decoration = 'none',
  disabled = false,
} = props;

const classes = [
  'button',
  `textColor_${textColor}`,
  `color_${color}`,
  `decoration_${decoration}`,
  slots.icon ? 'haveIcon' : '',
  `decoration_${decoration}`,
  `disabled_${disabled}`,
]
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <Typography class="button__text" tagName="span"><slot></slot></Typography>
    <slot v-if="slots.icon" name="icon"/>
  </button>
</template>

<style lang="scss" scoped>
.button{
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  padding: 10px 20px;

  &:hover{
    opacity: .7;
  }

  &.haveIcon:deep(.typography){
    margin-right: 10px;
  }

  &.textColor_main:deep(.typography){
    color: $color-orange;
  }

  &.textColor_white:deep(.typography){
    color: $color-white;
  }

  &.textColor_black:deep(.typography){
    color: $color-black;
  }

  &.color_white{
    background-color: $color-white;
  }

  &.color_orange{
    background-color: $color-orange;
  }

  &.color_gray{
    background-color: $color-light-gray;
  }

  &.decoration_outline{
    border: 2px $color-orange solid;
  }

  &.disabled_true{
    cursor: unset;
    background-color: $color-light-gray;

    &:hover{
      opacity: unset;
    }
  }

  &.disabled_true:deep(.typography){
    color: $color-black;
  }
}
</style>