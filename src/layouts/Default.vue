<template>
  <div class="font-sans text-black leading-normal flex flex-col min-h-screen">
    <GlobalHeader></GlobalHeader>
    <div class="flex-grow">
      <slot />
    </div>
    <GlobalFooter></GlobalFooter>
  </div>
</template>

<script>
import config from "~/.temp/config.js";
import GlobalHeader from "@/components/GlobalHeader.vue";
import GlobalFooter from "@/components/GlobalFooter.vue";

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  },
  computed: {
    config() {
      return config;
    }
  }
};
</script>

<style lang="css">
a {
  @apply text-red;
  transition: all 0.3s ease-in-out;
}
</style>
