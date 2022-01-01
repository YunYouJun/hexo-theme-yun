<template>
  <table align="center">
    <tr v-for="row in Math.ceil(sites.length / numOfRow)" :key="row" align="center">
      <td v-for="col in numOfRow" :key="col" class="px-1 py-2">
        <demo-site :site="sites[(row - 1) * numOfRow + col - 1]" />
      </td>
    </tr>
  </table>
</template>

<script lang="ts" setup>
import DemoSite from "./DemoSite.vue";
import sites from "../../assets/sites.json";

import {ref} from 'vue'

const numOfRow = ref(8)
</script>
