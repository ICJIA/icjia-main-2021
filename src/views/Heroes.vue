<template>
  <div class="mt-3 mb-12">
    <HomeSplashAlt></HomeSplashAlt>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
export default {
  mounted() {
    EventBus.$emit(
      "systemBar",
      "Splash samples: Various colors & button configurations"
    );
  },
};
</script>

<style lang="scss" scoped></style>
