<template>
  <div style="background: #fafafa" role="main">
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
    <HomeBoxes></HomeBoxes>

    <div id="content" style="margin-top: -25px">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <h2
              style="
                font-size: 36px;
                border-bottom: 1px solid #ccc;
                padding-bottom: 8px;
                margin-bottom: 25px;
              "
            >
              Community Outreach
            </h2>
            <div v-for="n in 4" :key="n">
              <HomeCommunityOutreach></HomeCommunityOutreach>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <h2
              style="
                font-size: 36px;
                border-bottom: 1px solid #ccc;
                padding-bottom: 8px;
                margin-bottom: 25px;
              "
            >
              Newsroom
            </h2>
            <div v-for="n in 5" :key="n">
              <HomeNewsroom></HomeNewsroom>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <HomeEvents></HomeEvents>
    </div>
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
      window.$('button[role="button"]').removeRedundantAttributes("role");
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
