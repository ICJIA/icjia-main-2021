<template>
  <div>
    <v-app-bar fixed app color="white" hide-on-scroll height="90">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <div>
        <v-img
          alt="ICJIA Logo"
          class="shrink mr-2 hover"
          contain
          src="https://via.placeholder.com/175x100/aaaaaa/FFFFFF/?text=LOGO"
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
        class="hover hidden-sm-and-down"
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
          <v-btn
            text
            class="hidden-sm-and-down navItem"
            v-bind="attrs"
            v-on="on"
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
          <v-btn
            text
            class="hidden-sm-and-down navItem"
            v-bind="attrs"
            v-on="on"
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
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      disable-resize-watcher
      color="white"
      ><v-list class="mt-5">
        <div v-for="item in items" :key="item.title">
          <div v-if="item.items.length">
            <v-list-group v-model="item.active" no-action>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.title"
                    style="font-size: 18px; font-weight: bold"
                  ></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="child in item.items"
                :key="child.title"
                exact
                @click="drawer = false"
              >
                <v-list-item-content style="margin-left: -40px">
                  <v-list-item-title
                    v-text="child.title"
                    style="
                      font-size: 14px !important;
                      font-weight: bold;
                      color: #555;
                    "
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </div>
          <div v-else>
            <v-list-item
              style="margin-bottom: -5px"
              exact
              @click="drawer = false"
            >
              <v-list-item-title style="font-size: 18px; font-weight: bold">
                {{ item.title }}</v-list-item-title
              >
            </v-list-item>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          url: "/",
          items: [
            { title: "SubItem 1", url: "/" },
            { title: "SubItem 2", url: "/" },
            { title: "SubItem 3", url: "/" },
            { title: "SubItem 4", url: "/" },
          ],
          title: "Item 1",
        },
        {
          url: "/",
          items: [],
          title: "Item 2",
        },
        {
          url: "/",
          items: [],
          title: "Item 3",
        },
        {
          items: [],
          title: "Item 4",
        },
        {
          items: [
            { title: "SubItem 1", url: "/" },
            { title: "SubItem 2", url: "/" },
            { title: "SubItem 3", url: "/" },
            { title: "SubItem 4", url: "/" },
          ],
          title: "Item 5",
        },
      ],
    };
  },
  mounted() {
    // window.$("i").replaceTagName("span");
    // window.$('button[role="button"]').removeRedundantAttributes("role");
  },
};
</script>

<style lang="scss" scoped>
.navItem {
  color: #000 !important;
  font-weight: 900;
}
</style>
