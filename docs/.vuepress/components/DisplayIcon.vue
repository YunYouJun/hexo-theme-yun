<template>
  <div class="icon-box" @click="copyIcon">
    <div class="icon-body">
      <svg class="iconfont" aria-hidden="true">
        <use :xlink:href="'#icon-' + icon"></use>
      </svg>
    </div>
    <h6 class="icon-name">{{ icon }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
  methods: {
    copyIcon() {
      navigator.clipboard.writeText(this.icon);

      console.log(toast);
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    },
  },
};
</script>

<style lang="stylus">
.icon-box {
  cursor: pointer;
  width: 8rem;
  display: inline-flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;

  border-radius: 0.2rem;
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
  margin-top: 0.7rem;
}
.icon-name {
  margin-top: 0.4rem;
  margin-bottom: 0.6rem;
}
</style>
