<script lang="ts" setup>
import { Typography } from '@/shared/typography';
import { Icon } from "@/shared/icon";
interface Props {
  type: 'opened' | 'inWork' | 'closed',
}

const props = defineProps<Props>();
const { type } = props;

let tasksOpenedCount = 1;
let tasksInWorkCount = 2;
let tasksClosedCount = 2;

let iconType = type + 'Tasks';
let typographyText = type === 'opened' ? 'Открыто - ' + tasksOpenedCount:
                     type === 'inWork' ? 'В работе - ' + tasksInWorkCount :
                                         'Закрыто - ' + tasksClosedCount ;
</script>

<template>
  <div class="task-info-badge">
    <Icon :type=iconType></Icon>
    <Typography tagName="span" size="s" bold>{{ typographyText }}</Typography>
  </div>
</template>

<style lang="scss">
.task-info-badge{
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 120px;
  border: 1px var(--color-light-gray) solid;
  border-radius: 50px;
  padding: 10px 20px;
  gap: 8px;
}
</style>