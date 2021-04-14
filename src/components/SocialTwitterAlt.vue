<template>
  <div style="">
    <div v-if="okToLoad">
      <Timeline
        id="ICJIA_Illinois"
        sourceType="profile"
        :options="{ tweetLimit: 2, cards: 'hidden', dnt: true }"
        error-message="<div class='text-center mb-4'>The ICJIA_Illinois timeline could not be loaded. Please refresh.</div>"
        ><div class="text-center">
          <v-progress-circular
            indeterminate
            aria-label="Progress bar: Loading"
            color="primary"
            size="50"
            class="mb-4"
          ></v-progress-circular></div
      ></Timeline>
    </div>
    <div v-else class="text-center">
      <div class="mb-4 mt-12" style="color: red">
        The ICJIA_Illinois timeline could not be loaded. Please refresh.
      </div>
      <v-progress-circular
        indeterminate
        aria-label="Progress bar: Loading"
        color="primary"
        size="50"
        class="mb-4"
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Tweet, Moment, Timeline } from "vue-tweet-embed";
export default {
  components: {
    Timeline,
  },
  props: {
    tweetLimit: {
      type: Number,
      default: 55,
    },
  },
  data() {
    return {
      isLoading: true,
      okToLoad: false,
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    let rnd = Math.floor(Math.random() * 3) + 1;
    this.okToLoad = rnd < 3 ? false : true;
  },
  beforeDestroy() {},
};
</script>

<style>
/* .twitter-timeline {
  height: 550px !important;
  overflow-y: auto !important;
} */
</style>
