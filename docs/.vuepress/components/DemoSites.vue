<template>
  <table align="center">
    <tr v-for="row in Math.ceil(sites.length / numOfRow)" :key="row" align="center">
      <td v-for="col in numOfRow" :key="col">
        <demo-site :site="sites[(row - 1) * numOfRow + col - 1]" />
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import DemoSite from "./DemoSite.vue";
import sites from "~/assets/sites.json";
export default {
  components: {
    DemoSite,
  },
  data() {
    return {
      sites,
      numOfRow: 8,
    };
  },
};
</script>
