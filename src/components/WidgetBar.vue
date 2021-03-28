<template>
  <v-toolbar flat color="grey darken-3" dark class="mb-2">
    <v-toolbar-title style="font-weight: 900; font-size: 28px">{{
      title
    }}</v-toolbar-title>
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
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Untitled Widget Bar",
    },
    props: {
      showLabel: {
        type: Boolean,
        default: true,
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
