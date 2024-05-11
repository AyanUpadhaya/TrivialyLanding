<template>
  <section>
    <input
      type="checkbox"
      id="videoPopup"
      class="modal-toggle"
      :checked="isChecked"
      @change="handleToggleChange"
    />
    <div class="modal shadow-noShadow">
      <div
        class="modal-box w-full p-4 bg-transparent max-w-[1400px] shadow-noShadow"
      >
        <video-player
          :src="videoUrl"
          :poster="videoThumbnail"
          controls
          responsive
          :control-bar="{ playToggle: false }"
          :loop="false"
          :volume="0.6"
          :fluid="true"
          class="w-full h-full object-cover rounded-3xl overflow-hidden"
        >
          <template v-slot="{ player, state }">
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <button
                type="button"
                @click="state.playing ? player.pause() : player.play()"
                v-if="!state.playing"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[30px] h-[30px] md:w-[60px] md:h-[60px] lg:w-[120px] lg:h-[120px]"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM40 67.5V32.5C40 30.45 42.35 29.25 44 30.5L67.35 48C68.7 49 68.7 51 67.35 52L44 69.5C42.35 70.75 40 69.55 40 67.5Z"
                    fill="#EFF1FE"
                  />
                </svg>
              </button>
            </div> </template
        ></video-player>

        <!-- cross button -->
        <button
          class="absolute top-5 right-5 bg-slate-500/40 rounded-full h-6 w-6 sm:h-10 sm:w-10 flex justify-center items-center"
          @click="handleStatus"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="h-4 w-4 sm:h-8 sm:w-8"
          >
            <path
              d="M18.3 5.71022C17.91 5.32022 17.28 5.32022 16.89 5.71022L12 10.5902L7.11 5.70021C6.72 5.31021 6.09 5.31021 5.7 5.70021C5.31 6.09021 5.31 6.72022 5.7 7.11022L10.59 12.0002L5.7 16.8902C5.31 17.2802 5.31 17.9102 5.7 18.3002C6.09 18.6902 6.72 18.6902 7.11 18.3002L12 13.4102L16.89 18.3002C17.28 18.6902 17.91 18.6902 18.3 18.3002C18.69 17.9102 18.69 17.2802 18.3 16.8902L13.41 12.0002L18.3 7.11022C18.68 6.73022 18.68 6.09022 18.3 5.71022Z"
              fill="#D0D0D0"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import { exploreVideo, videoThumbnail } from "../../assets/getAssets.js";

export default {
  props: {
    handleStatus: Function,
    modalClose: String,
    isChecked: Boolean,
  },
  data() {
    return {
      videoUrl: exploreVideo,
      videoThumbnail: videoThumbnail,
    };
  },
  computed: {
    controlBarOptions() {
      // Conditionally return an empty object or the desired control bar options
      return this.isChecked ? {} : { controlBar: false };
    },
  },

  components: {
    VideoPlayer,
  },

  watch: {
    isChecked: "handleToggleChange",
  },
  methods: {
    handleClose() {
      this.$router.push(this.path);
    },
    handleToggleChange() {
      // If needed, you can handle additional logic when the toggle changes
    },
    handlePlayandPause() {
      if (this.isChecked) {
        player.play();
      }
    },
  },
  mounted() {
    this.handlePlayandPause();
  },
};
</script>

<style scoped>
.vjs-poster {
  background-size: cover !important;
  border-radius: 24px !important;
}
.vjs-poster img {
  object-fit: cover !important;
}
.vjs-text-track-display {
  height: 100%;
}
.video-js .vjs-big-play-button {
  display: none !important;
}
.vjs-tech {
  border-radius: 24px !important;
}

@media screen and (max-width: 576px) {
  .vjs-poster {
    background-size: cover !important;
    border-radius: 16px !important;
  }
  .vjs-tech {
    border-radius: 16px !important;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
