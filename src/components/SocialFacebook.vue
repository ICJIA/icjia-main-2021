<template>
  <div>
    <v-skeleton-loader
      v-bind="attrs"
      type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
    ></v-skeleton-loader>

    <v-skeleton-loader
      v-bind="attrs"
      type="list-item-avatar-three-line, image, article"
    ></v-skeleton-loader>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
