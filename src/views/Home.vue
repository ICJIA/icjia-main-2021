<template>
  <div style="background: #eee" role="main">
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
    <HomeResearch></HomeResearch>

    <div
      id="content"
      style="
        margin-top: 4px;
        padding-bottom: 30px;
        border-bottom: 1px solid #ccc;
      "
    >
      <v-toolbar flat color="grey darken-3" dark style="margin-top: -13px">
        <v-toolbar-title style="font-weight: 900; font-size: 28px"
          >News & Information
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-menu offset-y bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>Item 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Item 2</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Item 3</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </div>

    <v-col cols="12" md="6">
      <OutreachCard v-for="n in 3" :key="`outreach-${n}`"></OutreachCard>
    </v-col>
    <v-col cols="12" md="6">
      <HomeNews></HomeNews>
    </v-col>
  </div>
</template>

<script>
export default {
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
