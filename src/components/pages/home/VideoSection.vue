<template>
  <section
    class="bg-darkslateblue px-4 flex justify-center pb-[60px] md:pb-[110px] overflow-hidden"
  >
    <div
      class="relative flex justify-center items-center"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <img
        :src="videoThumbnail"
        alt=""
        :class="isChecked ? 'opacity-0' : 'opacity-100'"
      />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <label
          @click="handleVideoOpen"
          class="cursor-pointer"
          :class="isChecked ? 'opacity-0' : ''"
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
        </label>
      </div>
    </div>
    <div class="relative">
      <VideoPlayerModal
        :isChecked="isChecked"
        :handleStatus="handleStatus"
      ></VideoPlayerModal>
    </div>
  </section>
</template>

<script>
import { VideoPlayer } from "@videojs-player/vue";
import VideoPlayerModal from "../../modals/VideoPlayerModal.vue";
import "video.js/dist/video-js.css";
import { exploreVideo, videoThumbnail } from "../../../assets/getAssets.js";
import { Transition } from "vue";
export default {
  components: {
    VideoPlayer,
    VideoPlayerModal,
  },
  data() {
    return {
      videoUrl: exploreVideo,
      videoThumbnail: videoThumbnail,
      isChecked: false,
    };
  },
  methods: {
    handleStatus() {
      this.isChecked = false;
    },

    handleVideoOpen() {
      this.isChecked = true;
    },
  },
};
</script>
<style>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
