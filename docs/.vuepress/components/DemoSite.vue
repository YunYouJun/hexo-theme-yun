<template>
  <a class="site-link" :href="site.url" target="_blank">
    <img width="80" :src="site.avatar" />
    <br />
    <sub :title="site.desc">{{ site.name }}</sub>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { DemoSiteType } from "~/types"
export default defineComponent({
  props: {
    site: {
      type: Object as PropType<DemoSiteType>,
      default() {
        return {
          name: "云游君的小站",
          url: "https://www.yunyoujun.cn",
          avatar: "https://www.yunyoujun.cn/images/avatar.jpg",
          desc: "希望能成为一个有趣的人",
        } as DemoSiteType;
      },
    },
  },
});
</script>

<style lang="scss">
.site-link {
  font-size: 12px;
}
</style>
