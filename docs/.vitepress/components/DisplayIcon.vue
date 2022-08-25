<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    icon: string
  }>(),
  {
    icon: '',
  },
)

const copyIcon = () => {
  navigator.clipboard.writeText(`icon-${props.icon}`)

  const toast = document.getElementById('toast')
  toast.classList.add('show')
  setTimeout(() => {
    toast.classList.remove('show')
  }, 3000)
}
</script>

<template>
  <div class="icon-box" @click="copyIcon">
    <div class="icon-body">
      <svg class="iconfont" aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`" />
      </svg>
    </div>
    <span class="icon-name">{{ icon }}</span>
  </div>
</template>

<style lang="scss">
.icon-box {
  cursor: pointer;
  width: 6rem;
  display: inline-flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;

  border-radius: 0.5rem;
  transition: 0.2s;

  &:hover {
    color: white;
    background-color: black;
  }
}

.iconfont {
  width: 2rem;
  height: 2rem;
  fill: currentColor;
  overflow: hidden;
}
.icon-body {
  margin-top: 0.5rem;
}
.icon-name {
  margin-top: 0.4rem;
  margin-bottom: 0.6rem;
  font-size: 0.8rem;
}
</style>
