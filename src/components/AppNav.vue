<template>
  <div>
    <v-app-bar fixed app height="35" color="grey lighten-2">
      <v-img
        alt="ICJIA Logo"
        class="shrink hover"
        contain
        src="https://ipsumimage.appspot.com/155x100?l= LOGO "
        transition="scale-transition"
        width="50"
        style
        @click="
          $router.push('/').catch((err) => {
            $vuetify.goTo(0);
          })
        "
      />

      <div class="ml-5 hidden-sm-and-down" style="font-weight: 900">
        Title of page or article or news item goes here
      </div>

      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            small
            text
            style="font-size: 10px; font-weight: 900"
            v-bind="attrs"
            v-on="on"
          >
            <span class="v-icon left fab fa-twitter-square mr-2"></span>
            <span class="hidden-sm-and-down">Tweet</span>
          </v-btn>
        </template>
        <span>Tweet this page on Twitter</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            small
            text
            style="font-size: 10px; font-weight: 900"
            v-bind="attrs"
            v-on="on"
          >
            <span class="v-icon left fab fa-facebook-square mr-2"></span>
            <span class="hidden-sm-and-down">Share</span>
          </v-btn>
        </template>
        <span>Share this page on facebook</span>
      </v-tooltip>
      |
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            small
            v-bind="attrs"
            v-on="on"
            @click="openTranslationModal()"
            style="font-size: 10px; font-weight: 900"
          >
            <span class="v-icon fas fa-globe mr-2"></span>
            <span class="hidden-sm-and-down">Translate</span>
          </v-btn>
        </template>
        <span>Translate this page on Google</span>
      </v-tooltip>
      |
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            small
            v-bind="attrs"
            v-on="on"
            style="font-size: 10px; font-weight: 900"
          >
            <span class="v-icon mdi mdi-magnify"></span>
            <span class="hidden-sm-and-down">Search</span>
          </v-btn>
        </template>
        <span>Search ICJIA</span>
      </v-tooltip>
      <v-spacer
        v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
      ></v-spacer>
    </v-app-bar>

    <v-app-bar fixed app color="white" height="90" hide-on-scroll>
      <div
        class="hover hamburger text-center"
        v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
        @click="drawer = true"
      >
        <span class="v-icon mdi mdi-menu"></span>
        <div style="font-size: 10px; font-weight: 900">MENU</div>
      </div>

      <v-spacer
        v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
      ></v-spacer>
      <v-img
        alt="ICJIA Logo"
        class="shrink mr-2 hover"
        contain
        src="https://ipsumimage.appspot.com/155x100?l= LOGO "
        transition="scale-transition"
        width="90"
        style
        @click="
          $router.push('/').catch((err) => {
            $vuetify.goTo(0);
          })
        "
      />

      <div
        @click="
          $router.push('/').catch((err) => {
            $vuetify.goTo(0);
          })
        "
        style="font-size: 16px; font-weight: bold; margin-left: 10px"
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
        open-on-hover
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
        open-on-hover
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

      <!-- <v-btn icon>
        <span class="v-icon mdi mdi-dots-vertical"></span>
      </v-btn> -->

      <v-menu
        offset-y
        bottom
        open-on-hover
        v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
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

      <!-- <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="openTranslationModal()">
            <span class="v-icon mdi mdi-globe-model"></span>
          </v-btn>
        </template>
        <span>Translate this page</span>
      </v-tooltip> -->
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <span class="v-icon mdi mdi-magnify"></span>
          </v-btn>
        </template>
        <span>Search</span>
      </v-tooltip>
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
import { EventBus } from "@/event-bus";
export default {
  methods: {
    openTranslationModal() {
      EventBus.$emit("translate", this.$route.fullPath);
    },
  },
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
  mounted() {},
};
</script>

<style lang="scss" scoped>
.navItem {
  color: #000 !important;
  font-weight: 900;
}

.hamburger {
  width: 70px;
  margin-left: 10px;
  margin-right: 10px;
}

.hamburger:hover {
  background: #eee;
  padding: 5px;
}

.translate {
  position: absolute;
  right: 40px;
  top: 10px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
}

.searchResults {
  position: absolute;
  top: 100px;
  z-index: 500000;
  background: #000;
}
</style>
