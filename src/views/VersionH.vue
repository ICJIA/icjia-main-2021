<template>
  <div style="background: #eee; padding-bottom: 75px" role="main">
    <HomeSplash version="A"></HomeSplash>
    <!-- <div id="content" style="margin-top: 4px; padding-bottom: 30px">
      <WidgetBar title="News & Information"></WidgetBar>
    </div> -->
    <v-row style="margin-top: -40px">
      <v-col> <HomeResearchAlt></HomeResearchAlt></v-col>
    </v-row>
    <v-row style="margin-top: -20px">
      <v-col cols="12" md="6">
        <OutreachCard v-for="n in 3" :key="`outreach-${n}`"></OutreachCard>
      </v-col>
      <v-col cols="12" md="6">
        <HomeNews></HomeNews>
      </v-col>
    </v-row>

    <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="0"></div>
    <HomeEvents></HomeEvents>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
export default {
  data() {
    return {
      researchItems: ["Articles", "Datasets", "Apps", "ICJIA Research Hub"],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.fixA11y();
    });
    EventBus.$emit(
      "systemBar",
      "Version A: News Column with a second column for tabbed content"
    );
  },
  methods: {
    changeTab(e) {
      console.log(e);
    },
    fixA11y() {
      window.$("i").replaceTagName("span");
      window
        .$("button.v-icon")
        .replaceEmptyElements("This is intentionally blank");
      window
        .$("span.v-icon")
        .replaceEmptyElements("This is intentionally blank");
      window.$('div[role="button"]').removeRedundantAttributes("aria-owns");
      window.$('th[role="columnheader"]').removeRedundantAttributes("role");
      window.$('button[role="button"]').removeRedundantAttributes("role");
      window.$("th > span").replaceEmptyElements("This is intentionally blank");
      window
        .$("button.v-icon")
        .addAriaLabel("Click this to toggle display of the news article");
    },
  },
};
</script>

<style>
.v-tab {
  justify-content: left !important;
}
.v-tab--active {
  color: #000 !important;
}

.v-card > *:first-child:not(.v-btn):not(.v-chip),
.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
