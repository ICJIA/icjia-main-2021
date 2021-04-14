<template>
  <v-toolbar flat color="grey darken-3" dark class="mb-2 pr-2 pl-2">
    <v-toolbar-title
      style="font-weight: 900; font-size: 28px; margin-left: 10px"
      >{{ title }}</v-toolbar-title
    >
    <v-spacer></v-spacer>

    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
          style="margin-right: 0px !important; font-weight: 900"
        >
          MENU
          <v-icon right>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, idx) in menuItems" :key="`menu-${idx}`">
          <v-list-item-title class="hover">{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Untitled Widget Bar",
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    menuItems: {
      type: Array,
      default: () => ["Item 1", "Item 2", "Item 3"],
    },
  },
};
</script>

<style lang="scss" scoped></style>
