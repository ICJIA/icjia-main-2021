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
    <div id="content">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <div v-for="n in 3" :key="n">
              <HomeCommunityOutreach></HomeCommunityOutreach>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <HomeNewsroom></HomeNewsroom>
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
</style>
