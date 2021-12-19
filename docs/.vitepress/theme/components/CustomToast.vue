<template>
  <div class="toast" id="toast">复制成功</div>
</template>

<style lang="scss">
.toast {
  position: fixed;
  top: 5rem;
  color: white;
  background-color: #4caf50;
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  box-shadow: 0 0 0.2rem #4caf50;
  transition: 0.4s;
  opacity: 0;

  &.show {
    opacity: 1;
  }
}
</style>
