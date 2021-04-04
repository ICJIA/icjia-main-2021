<template>
  <div style="background: #eee; padding-bottom: 75px" role="main">
    <HomeSplash></HomeSplash>

    <!-- <div id="content" style="margin-top: 4px; padding-bottom: 30px"></div> -->
    <WidgetBar title="Featured Programs" style="margin-top: 5px"></WidgetBar>

    <v-row no-gutters style="margin-top: 20px">
      <v-col v-for="n in 2" :key="n" cols="12" md="6" class="mb-2">
        <HomeFeatured splashHeight="350px"></HomeFeatured>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <WidgetBar
          title="News & Information"
          style="margin-top: 20px"
          :menuItems="newsItems"
        ></WidgetBar>
        <OutreachCard v-for="n in 3" :key="`outreach-${n}`"></OutreachCard>
      </v-col>
      <v-col cols="12" md="6">
        <WidgetBar
          title="Latest Research"
          :menuItems="researchItems"
          style="margin-top: 20px"
        ></WidgetBar>
        <ResearchCard v-for="n in 3" :key="`outreach-${n}`"></ResearchCard>
      </v-col>
    </v-row>

    <HomeEvents></HomeEvents>
  </div>
</template>

<script>
import WidgetBar from "../components/WidgetBar.vue";
import { EventBus } from "@/event-bus";
export default {
  components: { WidgetBar },
  data() {
    return {
      researchItems: ["Articles", "Datasets", "Apps", "ICJIA Research Hub"],
      newsItems: ["Grants", "Employment", "Press Releases"],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.fixA11y();
    });
    EventBus.$emit(
      "systemBar",
      "Version E: News Column. Research column. Additional items in section menus. Featured Programs."
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
