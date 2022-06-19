<script lang="ts" setup>
import type { DemoSiteType } from '~/types'

withDefaults(
  defineProps<{
    site: DemoSiteType
  }>(),
  {
    site: () => ({
      name: '云游君的小站',
      url: 'https://www.yunyoujun.cn',
      avatar: 'https://www.yunyoujun.cn/images/avatar.jpg',
      desc: '希望能成为一个有趣的人',
    }),
  },
)
</script>

<template>
  <a class="site-link" :href="site.url" target="_blank">
    <img class="rounded rounded-full w-15 h-15 shadow-md transition hover:shadow-lg" :src="site.avatar">
    <br>
    <sub m="t-1" class="block w-20 truncate whitespace-nowrap" text="xs" :title="site.desc">{{ site.name }}</sub>
  </a>
</template>
