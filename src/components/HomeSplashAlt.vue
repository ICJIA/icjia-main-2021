<template>
  <div>
    <h2 class="ml-5">
      Version A (Color with tint -- sample images -- same tint as R3 splash)
    </h2>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-01-min.jpg')"
          :lazy-src="
            getImagePath('https://dev.icjia.cloud/chicago-01-min.jpg', 0, 0, 10)
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="450"
        >
          <v-overlay absolute opacity=".3" color="blue lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.8); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 1 here</h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-02-min.jpg')"
          :lazy-src="
            getImagePath('https://dev.icjia.cloud/chicago-02-min.jpg', 0, 0, 10)
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="450"
        >
          <v-overlay absolute opacity=".3" color="red lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.8); padding: 25px"
              width="100% !important"
              min-height="200"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 2 here</h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
    <h2 class="ml-5">Version B (Color with tint -- sample images)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-03-min.jpg')"
          :lazy-src="
            getImagePath('https://dev.icjia.cloud/chicago-03-min.jpg', 0, 0, 10)
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="450"
        >
          <v-overlay absolute opacity=".3" color="blue lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.9); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 1 here</h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4">
                  <v-container fluid
                    ><v-row>
                      <v-col cols="12" md="4">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col></v-row
                    ></v-container
                  >
                </div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
    <h2 class="ml-5">Version C (Color with tint -- sample images)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-01-min.jpg')"
          :lazy-src="
            getImagePath('https://dev.icjia.cloud/chicago-01-min.jpg', 0, 0, 10)
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="450"
        >
          <v-overlay absolute opacity=".3" color="blue lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.9); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 1 here</h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
      <v-col cols="12" md="4">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-02-min.jpg')"
          :lazy-src="
            getImagePath('https://dev.icjia.cloud/chicago-02-min.jpg', 0, 0, 10)
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="450"
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
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
      <v-col cols="12" md="4">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-03-min.jpg')"
          :lazy-src="
            getImagePath('https://dev.icjia.cloud/chicago-03-min.jpg', 0, 0, 10)
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="450"
        >
          <v-overlay absolute opacity=".3" color="blue lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.9); padding: 25px"
              width="100% !important"
              min-height="200"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 3 here</h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
    <h2 class="ml-5">Version D (Monochrome with tint -- sample images)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-01-min-bw.jpg')"
          :lazy-src="
            getImagePath(
              'https://dev.icjia.cloud/chicago-01-min-bw.jpg',
              0,
              0,
              10
            )
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="450"
        >
          <v-overlay absolute opacity=".3" color="blue lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.7); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 1 here</h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-02-min-bw.jpg')"
          :lazy-src="
            getImagePath(
              'https://dev.icjia.cloud/chicago-02-min-bw.jpg',
              0,
              0,
              10
            )
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="450"
        >
          <v-overlay absolute opacity=".3" color="red lighten-3">
            <div
              class="text-center px-5"
              style="background: rgba(125, 125, 125, 0.7); padding: 25px"
              width="100% !important"
              min-height="200"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3">Title 2 here</h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>

    <h2 class="ml-5">Version E (Monochrome only -- sample images)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-01-min-bw.jpg')"
          :lazy-src="
            getImagePath(
              'https://dev.icjia.cloud/chicago-01-min-bw.jpg',
              0,
              0,
              10
            )
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="450"
        >
          <v-overlay absolute opacity=".5">
            <div
              class="text-center px-5"
              style="background: rgba(50, 50, 50, 0.8); padding: 25px"
              width="100% !important"
              min-height="200"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3" style="color: #1b69bc">
                  Title 1 here
                </h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-02-min-bw.jpg')"
          :lazy-src="
            getImagePath(
              'https://dev.icjia.cloud/chicago-02-min-bw.jpg',
              0,
              0,
              10
            )
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="450"
        >
          <v-overlay absolute opacity=".5">
            <div
              class="text-center px-5"
              style="background: rgba(50, 50, 50, 0.8); padding: 25px"
              width="100% !important"
              min-height="200"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3" style="color: #1b69bc">
                  Title 2 here
                </h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4"><v-btn outlined>Button here</v-btn></div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
    <h2 class="ml-5">Version F (Monochrome only -- sample images)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-01-min-bw.jpg')"
          :lazy-src="
            getImagePath(
              'https://dev.icjia.cloud/chicago-01-min-bw.jpg',
              0,
              0,
              10
            )
          "
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
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4">
                  <v-container fluid
                    ><v-row>
                      <v-col cols="12" md="4">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col></v-row
                    ></v-container
                  >
                </div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
    <h2 class="ml-5">Version G (Monochrome only -- sample images)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-03-min-bw.jpg')"
          :lazy-src="
            getImagePath(
              'https://dev.icjia.cloud/chicago-03-min-bw.jpg',
              0,
              0,
              10
            )
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="500"
        >
          <v-overlay absolute opacity=".3">
            <div
              class="text-center px-5"
              style="background: rgba(36, 92, 150, 0.8); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3" style="color: #fff">
                  Title 1 here
                </h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4">
                  <v-container fluid
                    ><v-row>
                      <v-col cols="12" md="6">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col></v-row
                    ></v-container
                  >
                </div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
    <h2 class="ml-5">Version H (Monochrome only -- sample images)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-03-min-bw.jpg')"
          :lazy-src="
            getImagePath(
              'https://dev.icjia.cloud/chicago-03-min-bw.jpg',
              0,
              0,
              10
            )
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="500"
        >
          <v-overlay absolute opacity=".3">
            <div
              class="text-center px-5"
              style="background: rgba(36, 92, 150, 0.8); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3" style="color: #fff">
                  Title 1 here
                </h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4">
                  <v-container fluid
                    ><v-row>
                      <v-col cols="12" md="12">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col>
                    </v-row></v-container
                  >
                </div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
      <v-col cols="12" md="4">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-01-min-bw.jpg')"
          :lazy-src="
            getImagePath(
              'https://dev.icjia.cloud/chicago-01-min-bw.jpg',
              0,
              0,
              10
            )
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="500"
        >
          <v-overlay absolute opacity=".3">
            <div
              class="text-center px-5"
              style="background: rgba(36, 92, 150, 0.8); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3" style="color: #fff">
                  Title 2 here
                </h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4">
                  <v-container fluid
                    ><v-row>
                      <v-col cols="12" md="12">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col>
                    </v-row></v-container
                  >
                </div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
      <v-col cols="12" md="4">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-02-min-bw.jpg')"
          :lazy-src="
            getImagePath(
              'https://dev.icjia.cloud/chicago-02-min-bw.jpg',
              0,
              0,
              10
            )
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="500"
        >
          <v-overlay absolute opacity=".3">
            <div
              class="text-center px-5"
              style="background: rgba(36, 92, 150, 0.8); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3" style="color: #fff">
                  Title 3 here
                </h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4">
                  <v-container fluid
                    ><v-row>
                      <v-col cols="12" md="12">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col>
                    </v-row></v-container
                  >
                </div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
    <h2 class="ml-5">Version I (Monochrome only -- sample images)</h2>
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <v-img
          :src="getImagePath('https://dev.icjia.cloud/chicago-01-min-bw.jpg')"
          :lazy-src="
            getImagePath(
              'https://dev.icjia.cloud/chicago-01-min-bw.jpg',
              0,
              0,
              10
            )
          "
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="500"
        >
          <v-overlay absolute opacity=".3">
            <div
              class="text-center px-5"
              style="background: rgba(36, 92, 150, 0.8); padding: 25px"
              width="100% !important"
            >
              <div class="text-center px-5" style="min-width: 350px">
                <h1 class="nofo-title mt-3" style="color: #fff">
                  Title 1 here
                </h1>
                <div class="nofo-tagline">Teaser here</div>
                <div class="mt-4">
                  <v-container fluid
                    ><v-row>
                      <v-col cols="12" md="4">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-btn outlined class="mr-3">Button here</v-btn>
                      </v-col></v-row
                    ></v-container
                  >
                </div>
              </div>
            </div>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getImageURL } from "@/services/Image";

export default {
  methods: {
    getImagePath(url, imgWidth = 0, imgHeight = 0, imageQuality = 30) {
      let imgPath;
      imgPath = `${url}`;
      const thumborImgPath = getImageURL(
        imgPath,
        imgWidth,
        imgHeight,
        imageQuality
      );
      console.log(thumborImgPath);
      return thumborImgPath;
    },
  },
};
</script>

<style scoped>
.nofo-title {
  font-size: 36px;
}
h2 {
  margin-top: 50px;
}
</style>
