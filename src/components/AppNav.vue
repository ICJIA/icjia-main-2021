<template>
  <div>
    <v-app-bar fixed app color="white" hide-on-scroll height="90">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <div>
        <v-img
          alt="ICJIA Logo"
          class="shrink mr-2 hover"
          contain
          src="https://via.placeholder.com/105x50?text=LOGO"
          transition="scale-transition"
          width="120"
          style
          @click="
            $router.push('/').catch((err) => {
              $vuetify.goTo(0);
            })
          "
        />
      </div>
      <div
        @click="
          $router.push('/').catch((err) => {
            $vuetify.goTo(0);
          })
        "
        style="font-size: 20px; font-weight: bold; margin-left: 10px"
        class="hover"
      >
        ILLINOIS CRIMINAL JUSTICE INFORMATION AUTHORITY
      </div>

      <v-spacer></v-spacer>

      <v-menu
        bottom
        offset-y
        origin="center center"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn text class="hidden-sm-and-down" v-bind="attrs" v-on="on"
            >Item 1<v-icon right small>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <v-list nav dense elevation="2">
          <v-list-item class="appNav">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Sub Item 1</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="appNav">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Sub Item 2</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item class="appNav" target="_blank">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Sub Item 3</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="appNav" target="_blank">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Sub Item 4</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text class="hidden-sm-and-down navItem">Item 2</v-btn>

      <v-btn text class="hidden-sm-and-down navItem">Item 3</v-btn>

      <v-btn text class="hidden-sm-and-down navItem">Item 4</v-btn>

      <v-menu
        bottom
        offset-y
        origin="center center"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn text class="hidden-sm-and-down" v-bind="attrs" v-on="on"
            >Item 5<v-icon right small>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <v-list nav dense elevation="2">
          <v-list-item class="appNav">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Sub Item 1</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="appNav">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Sub Item 2</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item class="appNav" target="_blank">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Sub Item 3</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn icon>
        <span class="v-icon mdi mdi-magnify"></span>
      </v-btn>

      <!-- <v-btn icon>
        <span class="v-icon mdi mdi-dots-vertical"></span>
      </v-btn> -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  mounted() {
    // window.$("i").replaceTagName("span");
    // window.$('button[role="button"]').removeRedundantAttributes("role");
  },
};
</script>

<style lang="scss" scoped>
.navItem {
  color: #000 !important;
}
</style>
