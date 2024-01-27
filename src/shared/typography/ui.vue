<script lang="ts" setup>
interface Props {
  tagName: 'span' | 'p' | 'h1';
  bold?: boolean;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const props = defineProps<Props>();
</script>

<template>
  <component
      :is="props.tagName"
      :class="['typography', size ? `size_${size}` : '' , bold ? 'bold' : '', `tag_${tagName}`]"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
  .typography {
    font-family: 'PT Sans Caption', 'serif';
    font-style: normal;
    line-height: 150%;
    color: var(--color-black);
  }

  .bold { font-weight: 700; }

  .size_xs { font-size: 12px; }
  .size_s { font-size: 14px; }
  .size_m { font-size: 16px; }
  .size_l { font-size: 20px; }
  .size_xl { font-size: 24px; }

  .tag_h1 {
    font-size: 32px;
    font-family: 'Montserrat', 'serif';
  }

  @media screen and (max-width: 992px) {
    .size_xl { font-size: 18px; }

    .tag_h1 {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 640px) {

    .tag_h1 {
      font-size: 20px;
    }
  }

</style>