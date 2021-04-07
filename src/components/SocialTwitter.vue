<template>
  <div style="">
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
      default: 3,
    },
  },
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    console.log("created");
  },
  mounted() {},
  beforeDestroy() {},
};
</script>

<style>
/* .twitter-timeline {
  height: 550px !important;
  overflow-y: auto !important;
} */
</style>
