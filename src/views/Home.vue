<template>
  <div style="background: #eee; padding-bottom: 75px" role="main">
    <v-carousel v-model="model" hide-delimiters hide-delimiter-background>
      <v-carousel-item v-for="(color, index) in colors" :key="index">
        <v-sheet :color="color" height="100%" tile>
          <v-row
            class="fill-height text-center"
            align="center"
            justify="center"
          >
            <div style="width: % !important">
              <v-container>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-menu top transition="slide-y-transition">
                      <template v-slot:activator="{ on, attrs }"
                        ><v-btn v-bind="attrs" v-on="on" large
                          >Button 1 name here</v-btn
                        ></template
                      >
                      <v-list>
                        <v-list-item
                          v-for="(item, index) in items"
                          :key="index"
                        >
                          <v-list-item-title>{{
                            item.title
                          }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu></v-col
                  >
                  <v-col cols="12" md="4">
                    <v-menu top transition="slide-y-transition">
                      <template v-slot:activator="{ on, attrs }"
                        ><v-btn v-bind="attrs" v-on="on" large
                          >Button 2 name here</v-btn
                        ></template
                      >
                      <v-list>
                        <v-list-item
                          v-for="(item, index) in items"
                          :key="index"
                        >
                          <v-list-item-title>{{
                            item.title
                          }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu></v-col
                  >
                  <v-col cols="12" md="4">
                    <v-menu top transition="slide-y-transition">
                      <template v-slot:activator="{ on, attrs }"
                        ><v-btn v-bind="attrs" v-on="on" large
                          >Button 3 name here</v-btn
                        ></template
                      >
                      <v-list>
                        <v-list-item
                          v-for="(item, index) in items"
                          :key="index"
                        >
                          <v-list-item-title>{{
                            item.title
                          }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu></v-col
                  >
                </v-row>
              </v-container>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <HomeEvents></HomeEvents>

    <div id="content" style="margin-top: 4px; padding-bottom: 30px">
      <WidgetBar title="News & Information"></WidgetBar>
    </div>

    <v-row style="margin-top: -40px">
      <v-col> <HomeResearch></HomeResearch></v-col>
    </v-row>
    <v-row style="margin-top: -30px">
      <v-col cols="12" md="6">
        <OutreachCard v-for="n in 3" :key="`outreach-${n}`"></OutreachCard>
      </v-col>
      <v-col cols="12" md="6">
        <HomeNews></HomeNews>
      </v-col>
    </v-row>
    <WidgetBar title="Social Media"></WidgetBar>
    <v-row>
      <v-col cols="12" md="6">
        <SocialFacebook></SocialFacebook>
      </v-col>
      <v-col cols="12" md="6">
        <SocialTwitter></SocialTwitter>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import WidgetBar from "../components/WidgetBar.vue";
export default {
  components: { WidgetBar },
  data() {
    return {
      model: 0,

      colors: [
        "grey darken-1",
        "grey darken-2",
        "grey darken-3",
        "grey darken-2",
      ],
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
  mounted() {
    this.fixA11y();
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
