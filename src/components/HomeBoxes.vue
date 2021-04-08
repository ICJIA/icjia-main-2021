<template>
  <div>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="12" :md="boxColumns" v-for="n in boxes" :key="`row1-${n}`">
          <v-card
            color="grey darken-3"
            style="height: 200px"
            class="pt-1 px-2 text-left info-card hover mr-2 mt-2"
            ><h2
              style="
                color: #fff;
                border-bottom: 1px solid #aaa;
                padding-bottom: 5px;
                margin-bottom: 10px;
                font-size: 18px;
                text-transform: uppercase;
              "
            >
              Click through title here
            </h2>
            <p style="color: #fff" class="mt-5">
              Lorem markdownum ardent ubi te incessit cum recanduit potentior
              ignibus levitate hoc posita. At sole pennas enixa carinae
              peregrina terra nisi, pro. Nocte omnes umeris.
            </p></v-card
          >
        </v-col>
      </v-row>
      <v-row v-if="secondRow" no-gutters>
        <v-col cols="12" md="4" v-for="n in 3" :key="`row1-${n}`">
          <v-card
            color="grey darken-3"
            style="height: 200px"
            class="pt-1 px-4 text-left info-card hover mr-2 mt-2"
            ><h2
              style="
                color: #fff;
                border-bottom: 1px solid #aaa;
                padding-bottom: 5px;
                margin-bottom: 10px;
                text-transform: uppercase;
              "
            >
              Card Title here
            </h2>
            <p style="color: #fff" class="mt-5">
              Terras consistere, quod habendum, inque illam fruticosa ne alto.
              Unus honore a lingua sustulit, ore diversa gemitum muneris
              paulatim Hesperiae longo; ades.
            </p></v-card
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable vue/no-use-v-if-with-v-for */
export default {
  computed: {
    boxColumns() {
      return 12 / this.boxes;
    },
  },
  props: {
    boxes: {
      type: Number,
      default: 4,
    },
    secondRow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
