<script setup lang="ts">
import { computed } from 'vue'

withDefaults(defineProps<{
  type?: string
  text?: string
}>(), {
  type: 'tip',
  text: '',
})

const styles = computed(() => ({

}))
</script>

<template>
  <span
    class="badge bg-blue-600 inline-block leading-4 rounded"
    border="~ blue-500"
    bg="opacity-10"
    text="sm blue-500"
    p="x-2 y-1"
    :class="type"
    :style="styles"
  >
    <slot>{{ text }}</slot>
  </span>
</template>
