<template>
  <div style="background: #eee; padding-bottom: 75px" role="main">
    <HomeSplash version="A"></HomeSplash>
    <!-- <div id="content" style="margin-top: 4px; padding-bottom: 30px">
      <WidgetBar title="News & Information"></WidgetBar>
    </div> -->

    <v-row style="margin-top: 10px">
      <v-col cols="12">
        <HomeBoxesAlt
          style="margin-top: -25px"
          :secondRow="false"
          :boxes="3"
          :showTeaser="false"
        ></HomeBoxesAlt>
      </v-col>
    </v-row>
    <v-row>
      <WidgetBar title="News & Information"></WidgetBar>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <!-- <div id="content" style="margin-top: 4px; padding-bottom: 30px">
          <WidgetBar
            title="News & Information"
            :menuItems="newsItems"
          ></WidgetBar>
        </div> -->

        <OutreachCardAlt
          v-for="n in 4"
          :key="`outreach-${n}`"
          style="margin-top: 0px"
        ></OutreachCardAlt>
      </v-col>

      <v-col cols="12" md="6">
        <HomeNewsAlt2 style="margin-top: 9px"></HomeNewsAlt2>
      </v-col>
    </v-row>

    <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="0"></div>
    <HomeEvents></HomeEvents>
    <v-row style="margin-top: -20px">
      <v-col> <HomeResearchAlt></HomeResearchAlt></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
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

        <SocialTwitter
          :key="twitterKey"
          style="margin-top: -25px"
        ></SocialTwitter>
      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <div id="content" style="margin-top: 4px; padding-bottom: 30px">
          <v-toolbar flat color="grey darken-3" dark class="mb-2">
            <v-toolbar-title style="font-weight: 900; font-size: 28px"
              >Facebook</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-btn small @click="facebookKey++"
              >Refresh <v-icon small right>mdi mdi-refresh</v-icon></v-btn
            >
          </v-toolbar>
        </div>
        <SocialFacebook :key="facebookKey"></SocialFacebook>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
const $ = window.jQuery;

export default {
  data() {
    return {
      newsItems: ["Grants", "Employment", "Press Releases"],
      twitterKey: 0,
      facebookKey: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.fixA11y();
    });
    EventBus.$emit("systemBar", `Version T: Boxes with icons, no teasers`);
  },
  methods: {
    changeTab(e) {
      console.log(e);
    },
    fixA11y() {
      $("i").replaceTagName("span");
      window
        .$("button.v-icon")
        .replaceEmptyElements("This is intentionally blank");
      window
        .$("span.v-icon")
        .replaceEmptyElements("This is intentionally blank");
      $('div[role="button"]').removeRedundantAttributes("aria-owns");
      $('th[role="columnheader"]').removeRedundantAttributes("role");
      $('button[role="button"]').removeRedundantAttributes("role");
      $("th > span").replaceEmptyElements("This is intentionally blank");
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
