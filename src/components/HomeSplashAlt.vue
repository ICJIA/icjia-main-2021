<template>
  <div>
    <h2 class="ml-5">Version A (Color with tint)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-img
          src="@/assets/hero01-min.jpg"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="400"
        >
          <v-overlay absolute opacity=".3" color="blue lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.7); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 1 here</h1>
                <div class="nofo-tagline">Short summary here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          src="@/assets/hero02-min.jpg"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="400"
        >
          <v-overlay absolute opacity=".3" color="red lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.9); padding: 25px"
              width="100% !important"
              min-height="200"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 2 here</h1>
                <div class="nofo-tagline">Short summary here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
    <h2 class="ml-5">Version B (Color with tint)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <v-img
          src="@/assets/hero02-min.jpg"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="400"
        >
          <v-overlay absolute opacity=".3" color="blue lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.9); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 1 here</h1>
                <div class="nofo-tagline">Short summary here</div>
                <div class="mt-4">
                  <v-btn outlined class="mr-3">Button here</v-btn>
                  <v-btn outlined class="mr-3">Button here</v-btn>
                  <v-btn outlined>Button here</v-btn>
                </div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
    <h2 class="ml-5">Version C (Color with tint)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <v-img
          src="@/assets/hero01-min.jpg"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="400"
        >
          <v-overlay absolute opacity=".3" color="blue lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.7); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 1 here</h1>
                <div class="nofo-tagline">Short summary here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
      <v-col cols="12" md="4">
        <v-img
          src="@/assets/hero02-min.jpg"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="400"
        >
          <v-overlay absolute opacity=".3" color="red lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.9); padding: 25px"
              width="100% !important"
              min-height="200"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 2 here</h1>
                <div class="nofo-tagline">Short summary here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
      <v-col cols="12" md="4">
        <v-img
          src="@/assets/hero01-min.jpg"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="400"
        >
          <v-overlay absolute opacity=".3" color="red lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.9); padding: 25px"
              width="100% !important"
              min-height="200"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 2 here</h1>
                <div class="nofo-tagline">Short summary here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
    <h2 class="ml-5">Version D (Monochrome with tint)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-img
          src="@/assets/hero01-min-bw.png"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="400"
        >
          <v-overlay absolute opacity=".3" color="blue lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.7); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 1 here</h1>
                <div class="nofo-tagline">Short summary here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          src="@/assets/hero02-min-bw.png"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="400"
        >
          <v-overlay absolute opacity=".3" color="red lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.9); padding: 25px"
              width="100% !important"
              min-height="200"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 2 here</h1>
                <div class="nofo-tagline">Short summary here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>

    <h2 class="ml-5">Version E (Monochrome only)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-img
          src="@/assets/hero01-min-bw.png"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="400"
        >
          <v-overlay absolute opacity=".5">
            <div
              class="text-center px-5"
              style="background: rgba(50, 50, 50, 0.9); padding: 25px"
              width="100% !important"
              min-height="200"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3" style="color: #1b69bc">
                  Title 1 here
                </h1>
                <div class="nofo-tagline">Short summary here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          src="@/assets/hero02-min-bw.png"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="400"
        >
          <v-overlay absolute opacity=".5">
            <div
              class="text-center px-5"
              style="background: rgba(50, 50, 50, 0.9); padding: 25px"
              width="100% !important"
              min-height="200"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3" style="color: #1b69bc">
                  Title 2 here
                </h1>
                <div class="nofo-tagline">Short summary here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
    <h2 class="ml-5">Version F (Monochrome only)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <v-img
          src="@/assets/hero01-min-bw.png"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="500"
        >
          <v-overlay absolute opacity=".3">
            <div
              class="text-center px-5"
              style="background: rgba(50, 50, 50, 0.9); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3" style="color: #1b69bc">
                  Title 1 here
                </h1>
                <div class="nofo-tagline">Short summary here</div>
                <div class="mt-4">
                  <v-btn outlined class="mr-3">Button here</v-btn>
                  <v-btn outlined class="mr-3">Button here</v-btn>
                  <v-btn outlined>Button here</v-btn>
                </div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.nofo-title {
  font-size: 36px;
}
h2 {
  margin-top: 50px;
}
</style>
