<template>
  <div>
    <!-- <v-app-bar
      fixed
      app
      inverted-scroll
      height="35"
      color="grey lighten-2"
      role="navigation"
      id="systemBar"
      aria-labelledby="systemBar"
    >
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

      <div
        class="ml-5 hidden-sm-and-down"
        style="font-weight: 900; font-size: 14px"
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="0"
      >
        {{ title }}
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
            <span class="v-icon left mdi mdi-account-box mr-2"></span>
            <span class="hidden-sm-and-down">Contact</span>
          </v-btn>
        </template>
        <span>Contact Us</span>
      </v-tooltip>
      |
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            small
            text
            style="font-size: 10px; font-weight: 900"
            v-bind="attrs"
            v-on="on"
            class="twitter"
          >
            <span class="v-icon left fab fa-twitter-square mr-2 twitter"></span>
            <span class="hidden-sm-and-down">Tweet</span>
          </v-btn>
        </template>
        <span>Tweet this page on Twitter</span>
      </v-tooltip>
      |
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            small
            text
            style="font-size: 10px; font-weight: 900"
            v-bind="attrs"
            v-on="on"
          >
            <span
              class="v-icon left fab fa-facebook-square mr-2 facebook"
            ></span>
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
            <span class="v-icon fas fa-globe mr-2 translation"></span>
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
            @click="openSearchModal()"
            style="font-size: 10px; font-weight: 900"
          >
            <span class="v-icon mdi mdi-magnify"></span>
            <span class="hidden-sm-and-down">Search</span>
          </v-btn>
        </template>
        <span>Search ICJIA</span>
      </v-tooltip>
    
    </v-app-bar> -->

    <v-app-bar
      fixed
      app
      color="white"
      height="90"
      hide-on-scroll
      scroll-threshold="1"
      style="z-index: 9999; border-bottom: 1px solid #eee !important"
      flat
    >
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
        nudge-left="100px"
        style="z-index: 100000"
        open-on-hover
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="hidden-sm-and-down navItem"
            v-bind="attrs"
            v-on="on"
            >Home 1<v-icon right small>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <v-list nav dense elevation="2">
          <v-list-item class="appNav" to="/">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version A: Original with tabbed content</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="appNav" to="/version-b">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version B: Original without tabbed content</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item class="appNav" to="/version-c">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version C: Click-through boxes near top (Four
                boxes)</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="appNav" to="/version-d">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version D: Click-through boxes near bottom (Four
                boxes)</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider> </v-divider>
          <v-list-item class="appNav" to="/version-e">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version E: News Column. Featured Programs. Research in
                horizontal tabs.</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="appNav" to="/version-f">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version F: Featured Programs v2 (Research in horizontal
                tabs)</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="appNav" to="/version-g">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version G: 'Spotlight' instead of 'Featured' (Research in
                horizontal tabs)</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="appNav" to="/version-h">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version H: Vertical Tabs for Research</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu
        bottom
        offset-y
        origin="center center"
        transition="scale-transition"
        nudge-left="100px"
        style="z-index: 100000"
        open-on-hover
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="hidden-sm-and-down navItem"
            v-bind="attrs"
            v-on="on"
            >Home 2<v-icon right small>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <v-list nav dense elevation="2">
          <v-list-item class="appNav" to="/version-i">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version I: News with Twitter opposite</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="appNav" to="/version-j">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version J: News with Twitter and Facebook at
                bottom</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="appNav" to="/version-k">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version K: Smaller news cards</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider> </v-divider>
          <v-list-item class="appNav" to="/version-L">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version L: Kitchen sink v1 (Three click-through
                boxes)</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="appNav" to="/version-m">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version M: Kitchen sink v2 (Two click-through
                boxes)</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="appNav" to="/version-n">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version N: "We're gonna need a bigger sink."</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="appNav" to="/version-o">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version O: Maximum Overload</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu
        bottom
        offset-y
        origin="center center"
        transition="scale-transition"
        nudge-left="160px"
        style="z-index: 100000"
        open-on-hover
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="hidden-sm-and-down navItem"
            v-bind="attrs"
            v-on="on"
            >Home 3<v-icon right small>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <v-list nav dense elevation="2">
          <v-list-item class="appNav" to="/version-p">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version P: Press removed, employment removed, one column
                twitter</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="appNav" to="/version-q">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version Q: Press, employment, grants -- removed. Events
                includes funding.</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="appNav" to="/version-r">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version R: Boxes with icons and short teasers, press
                removed</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="appNav" to="/version-s">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version S: Version R with research at top</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <!-- <v-list-item class="appNav" to="/version-t">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Version T: Boxes with icons, no teasers</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item> -->
        </v-list>
      </v-menu>

      <v-menu
        bottom
        offset-y
        origin="center center"
        transition="scale-transition"
        style="z-index: 100000"
        open-on-hover
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="hidden-sm-and-down navItem"
            v-bind="attrs"
            v-on="on"
            >UI Elements<v-icon right small>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <v-list nav dense elevation="2">
          <v-list-item class="appNav" to="/heroes">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Home Splash Versions</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="appNav" to="/nav">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Navbar versions</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="appNav" to="/boxes">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Click-through box versions</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="appNav" to="/context-bar">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Context bar / Research Hub</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="appNav" to="/context-bar-irb">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Context bar / IRB</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="appNav" to="/context-bar-gata">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Context bar / GATA</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            small
            v-bind="attrs"
            v-on="on"
            @click="openTranslationModal()"
            style="font-size: 10px; font-weight: 900"
          >
            <span class="v-icon fas fa-globe mr-2 translation"></span>
           
          </v-btn>
        </template>
        <span>Translate this page on Google</span>
      </v-tooltip> -->

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="openSearchModal()">
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
      style="z-index: 99999"
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
    openSearchModal() {
      EventBus.$emit("search");
    },
    openTranslationModal() {
      EventBus.$emit("translate", this.$route.fullPath);
    },
  },
  data() {
    return {
      drawer: false,
      title: "Default Page Title",
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
    EventBus.$on("searchMounted", () => {
      console.log("search mounted");
    });
    EventBus.$on("systemBar", (title) => {
      this.title = title;
    });
  },
};
</script>

<style>
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

.v-icon.twitter {
  color: #1da1f2 !important;
}

.v-icon.facebook {
  color: #3b5998 !important;
}

/* .v-icon.translation {
  color: #174629 !important;
} */
</style>
