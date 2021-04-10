<template>
  <div style="background: #eee; padding-bottom: 75px" role="main">
    <HomeSplash version="A"></HomeSplash>
    <!-- <div id="content" style="margin-top: 4px; padding-bottom: 30px">
      <WidgetBar title="News & Information"></WidgetBar>
    </div> -->

    <v-row style="margin-top: -20px">
      <v-col cols="12" md="6">
        <div id="content" style="margin-top: 20px; padding-bottom: 30px">
          <WidgetBar
            title="News & Information"
            :menuItems="newsItems"
          ></WidgetBar>
        </div>

        <OutreachCardAlt
          v-for="n in 4"
          :key="`outreach-${n}`"
        ></OutreachCardAlt>
      </v-col>
      <v-col cols="12" md="6">
        <!-- <WidgetBar
          title="Latest Research"
          :menuItems="researchItems"
          style="margin-top: 20px"
        ></WidgetBar> -->
        <HomeResearchAlt2 style="margin-top: 20px"></HomeResearchAlt2>
      </v-col>
    </v-row>

    <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="0"></div>
    <HomeEventsAlt2></HomeEventsAlt2>
    <v-row>
      <v-col cols="12">
        <div id="content" style="margin-top: 4px; padding-bottom: 30px">
          <v-toolbar flat color="grey darken-3" dark class="mb-2">
            <v-toolbar-title style="font-weight: 900; font-size: 28px"
              >Twitter</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-btn small @click="twitterKey++"
              >Refresh <v-icon small right>mdi mdi-refresh</v-icon></v-btn
            >
          </v-toolbar>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="2"> </v-col>
      <v-col cols="12" md="8">
        <SocialTwitter
          :key="twitterKey"
          style="margin-top: -25px"
        ></SocialTwitter
      ></v-col>
    </v-row>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
export default {
  data() {
    return {
      newsItems: ["Grants", "Employment", "Press Releases"],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.fixA11y();
    });
    EventBus.$emit(
      "systemBar",
      "Version Q: Press removed, employment removed, grants removed, one column twitter"
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
