<template>
  <div>
    <context-nav2 class="context-bar"></context-nav2>

    <v-container>
      <v-row>
        <v-col class="my-5">
          <v-skeleton-loader
            boilerplate
            type="card-avatar, article, actions"
          ></v-skeleton-loader>
          <v-skeleton-loader
            boilerplate
            type="table-heading, list-item-two-line, image, table-tfoot"
          ></v-skeleton-loader
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    console.table(this.$myApp.config.contextMenus);
  },
  data() {
    return {
      tab: null,
      items: [" Articles ", " Web Applications ", " Datasets "],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style>
.context-bar {
  position: sticky !important;
  top: 0px !important;
  z-index: 1000 !important;
}
.btn--context {
  border: 1px solid #fff !important;
}
</style>
