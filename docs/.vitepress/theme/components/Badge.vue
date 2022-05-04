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
    class="badge bg-blue-500 rounded"
    text="sm white"
    p="x-2 y-1"
    :class="type"
    :style="styles"
  >
    <slot>{{ text }}</slot>
  </span>
</template>
