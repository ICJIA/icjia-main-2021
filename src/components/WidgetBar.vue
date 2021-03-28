<template>
  <v-toolbar flat color="grey darken-3" dark class="mb-2">
    <v-toolbar-title style="font-weight: 900; font-size: 28px">{{
      title
    }}</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-menu offset-y bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark icon v-bind="attrs" v-on="on">
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
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Untitled Widget Bar",
    },
  },
};
</script>

<style lang="scss" scoped></style>
