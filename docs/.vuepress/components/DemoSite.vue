<template>
  <a :href="site.url" target="_blank">
    <img width="80px" :src="site.avatar" />
    <br />
    <sub :title="site.desc">{{ site.name }}</sub>
  </a>
</template>

<script>
export default {
  props: {
    site: {
      type: Object,
      default() {
        return {
          name: "云游君的小站",
          url: "https://www.yunyoujun.cn",
          avatar: "https://www.yunyoujun.cn/images/avatar.jpg",
          desc: "希望能成为一个有趣的人",
        };
      },
    },
  },
};
</script>
