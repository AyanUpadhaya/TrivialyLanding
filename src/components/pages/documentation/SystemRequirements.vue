<template>
  <div
    class="relative w-full flex flex-col items-start justify-center gap-8 lg:gap-[60px_0px] text-left text-color-text-colors-600-black-low-emp font-inter pb-6 lg:pb-0 "
    id="install"
  >
  <!-- top -->
    <div
      class="self-stretch flex flex-col items-start justify-center gap-[16px_0px] lg:gap-[60px] text-2xl lg:text-21xl"
    >
    <!-- text -->
      <div class="flex flex-col items-start justify-center gap-2 lg:gap-[12px_0px]">
    
        <div class="self-stretch relative tracking-[-0.04em] leading-[120%] lg:leading-[110%] text-2xl md:text-[30px] lg:text-[40px] text-color-primary-color-900 font-bold py-2 lg:py-0"
        >System Requirements</div
      >
        <div
          class="self-stretch relative text-sm lg:text-lg leading-[130%] text-color-text-colors-600-black-low-emp"
        >
          Ensuring Compatibility: Essential System Requirements
        </div>
      </div>
      <!-- list -->
      <div class="self-stretch">
        <ul
          class="flex flex-col gap-3 md:gap-4 lg:gap-8 list-disc text-xs md:text-base lg:text-xl ml-5 text-black-low-emp"
        >
          <li>
            <span class="font-bold">PHP:</span>
            7.4 (or later) for Tutor LMS Free & Pro
          </li>
          <li>
            <span class="font-bold">Database:</span>
            MariaDB 10.1 or later / MySQL 5.7 or later
          </li>
          <li>
            <span class="font-bold">WordPress:</span>
            5.8 or higher
          </li>
          <li>
            <span class="font-bold">Browser:</span>
            Chrome, Firefox, Safari <br />
            Internet Explorer is not supported
          </li>
          <li>
            <span class="font-bold">Server Modules:</span>
            mod_rewrite, cURL, fsockopen
          </li>
        </ul>
      </div>
    </div>

    <!-- bottom -->
    <div
      class="self-stretch flex flex-col items-start justify-center gap-[32px]"
    >
      <!-- text -->
      <div class="flex flex-col gap-3">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
          Recommended Hosting
        </div>
        <div
          class="self-stretch relative leading-[130%] text-color-text-colors-600-black-low-emp text-sm lg:text-xl"
        >
          We have tested Trivially and all the features on all of the following
          web hosting providers and did not find an issues.
        </div>
      </div>
      <!-- list -->
      <ul
        class="flex flex-col gap-3 lg:gap-8 list-disc text-sm lg:text-xl ml-5 text-color-status-info"
      >
        <li>
          <span class="font-bold">Cloudways</span>
        </li>
        <li>
          <span class="font-bold">EasyWP</span>
        </li>
        <li>
          <span class="font-bold">Kinsta</span>
        </li>
        <li>
          <span class="font-bold">WP Engine</span>
        </li>
        <li>
          <span class="font-bold">NameCheap</span>
        </li>
        <li>
          <span class="font-bold">GoDaddy</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { install } from "../../../assets/getAssets";

export default {
  data() {
    return {
      install,
    };
  },
};
</script>
