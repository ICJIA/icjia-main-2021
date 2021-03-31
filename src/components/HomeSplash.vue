<template>
  <v-carousel v-model="model" hide-delimiters hide-delimiter-background>
    <v-carousel-item v-for="(color, index) in colors" :key="index">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height text-center" align="center" justify="center">
          <div style="width: % !important">
            <v-container>
              <v-row>
                <v-col cols="12" md="4">
                  <v-menu
                    top
                    transition="slide-y-transition"
                    id="button-1"
                    role="navigation"
                    open-on-hover
                  >
                    <template v-slot:activator="{ on, attrs }"
                      ><v-btn v-bind="attrs" v-on="on" large
                        >Button 1 name here</v-btn
                      ></template
                    >
                    <v-list>
                      <v-list-item v-for="(item, index) in items" :key="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>
                <v-col cols="12" md="4">
                  <v-menu
                    top
                    transition="slide-y-transition"
                    role="navigation"
                    id="button-2"
                    aria-label="Click this button for a menu of Y"
                    open-on-hover
                  >
                    <template v-slot:activator="{ on, attrs }"
                      ><v-btn v-bind="attrs" v-on="on" large
                        >Button 2 name here</v-btn
                      ></template
                    >
                    <v-list>
                      <v-list-item v-for="(item, index) in items" :key="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu></v-col
                >
                <v-col cols="12" md="4">
                  <v-menu
                    top
                    transition="slide-y-transition"
                    role="navigation"
                    id="button-3"
                    aria-label="Click this button for a menu of Z"
                    open-on-hover
                  >
                    <template v-slot:activator="{ on, attrs }"
                      ><v-btn v-bind="attrs" v-on="on" large
                        >Button 3 name here</v-btn
                      ></template
                    >
                    <v-list>
                      <v-list-item v-for="(item, index) in items" :key="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
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
</template>

<script>
export default {
  mounted() {
    window.$('div[role="button"]').removeRedundantAttributes("aria-owns");
  },
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
};
</script>

<style lang="scss" scoped></style>
