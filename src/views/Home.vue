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
    <HomeBoxes></HomeBoxes>

    <div id="content" style="margin-top: -10px">
      <v-row no-gutters class="hidden-sm-and-down">
        <v-col style="border-right: 1px solid #fff">
          <v-toolbar flat color="grey darken-3" dark>
            <v-toolbar-title style="font-weight: 900"
              >Community Outreach</v-toolbar-title
            >
          </v-toolbar>
        </v-col>
        <v-col style="border-left: 1px solid #fff">
          <v-toolbar flat color="grey darken-3" dark>
            <v-toolbar-title style="font-weight: 900">Newsroom</v-toolbar-title>
          </v-toolbar>
        </v-col>
      </v-row>

      <v-row no-gutters style="margin-top: 10px">
        <v-toolbar
          flat
          color="grey darken-3"
          dark
          class="mb-3 hidden-md-and-up"
        >
          <v-toolbar-title style="font-weight: 900"
            >Community Outreach</v-toolbar-title
          >
        </v-toolbar>
        <v-col
          cols="12"
          md="6"
          style="border-right: 1px solid #eee"
          class="px-5"
        >
          <div v-for="n in 4" :key="n">
            <HomeCommunityOutreach></HomeCommunityOutreach>
          </div>
        </v-col>
        <v-toolbar
          flat
          color="grey darken-3"
          dark
          class="mt-3 mb-3 hidden-md-and-up"
        >
          <v-toolbar-title style="font-weight: 900">Newsroom</v-toolbar-title>
        </v-toolbar>
        <v-col
          cols="12"
          md="6"
          class="px-5"
          style="border-left: 1px solid #ccc"
        >
          <div v-for="n in 5" :key="n">
            <HomeNewsroom></HomeNewsroom>
          </div>
        </v-col>
      </v-row>

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
