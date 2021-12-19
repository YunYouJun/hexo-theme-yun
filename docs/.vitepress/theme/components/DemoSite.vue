<template>
  <a class="site-link" :href="site.url" target="_blank">
    <img width="80" :src="site.avatar" />
    <br />
    <sub :title="site.desc">{{ site.name }}</sub>
  </a>
</template>

<script lang="ts" setup>
import { DemoSiteType } from "~/types";

withDefaults(
  defineProps<{
    site: DemoSiteType;
  }>(),
  {
    site: () => ({
      name: "云游君的小站",
      url: "https://www.yunyoujun.cn",
      avatar: "https://www.yunyoujun.cn/images/avatar.jpg",
      desc: "希望能成为一个有趣的人",
    }),
  }
);
</script>

<style lang="scss">
.site-link {
  font-size: 12px;
}
</style>
