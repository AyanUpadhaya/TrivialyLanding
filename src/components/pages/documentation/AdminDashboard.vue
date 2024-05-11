<template>
  <div
    class="relative w-full flex flex-col items-start justify-center gap-8 lg:gap-[60px_0px] text-left text-color-text-colors-600-black-low-emp font-inter pb-6 lg:pb-0"
    id="install"
  >
    <!-- Admin Dashboard -->
    <div class="flex flex-col gap-6 lg:gap-[60px]">
      <div
        class="self-stretch flex flex-col items-start justify-center gap-2 lg:gap-[12px_0px]"
      >
      

        <div class="self-stretch relative tracking-[-0.04em] leading-[120%] lg:leading-[110%] text-[32px] lg:text-[40px] text-color-primary-color-900 font-bold py-2 lg:py-0"
        >Admin Dashboard</div
      >

        <div
          class="self-stretch relative text-sm md:text-base lg:text-lg leading-[130%] text-color-text-colors-600-black-low-emp"
        >
          Dashboard to keep track of all the functionalities
        </div>
      </div>
      
      <div
        class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
      >
        With Trivialy, Admin get a dedicated Frontend Dashboard to keep track of
        all the functionalities from one place. To visit your Dashboard, go to
        your Trivialy-powered site and hover over your profile icon, and click
        on the Dashboard option. Or, you can also directly enter the
        URL Trivialy/dashboard into your browser’s address bar to go there.
      </div>
    </div>

    <!-- Dashboard Overview -->

    <div
      class="self-stretch flex flex-col items-start justify-center gap-3 md:gap-4 lg:gap-8"
    >
      <!-- text -->
      <div class="flex flex-col gap-3 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
          Dashboard Overview
        </div>
        <div>
          <img :src="dashboardoverview" alt="" />
        </div>
      </div>
    </div>

    <!-- Dashboard Sidebar -->

    <div
      class="self-stretch flex flex-col items-start justify-center gap-3 md:gap-4 lg:gap-8"
    >
      <!-- text -->
      <div class="flex flex-col gap-3 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
          Dashboard Sidebar
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          On the Dashboard Overview, you’ll find a sidebar on the left that you
          can use to navigate to the other sections of the Frontend Dashboard.
          The sections included are listed below.
        </div>
      </div>
      <!-- list -->
      <ul
        class="flex flex-col gap-3 lg:gap-8 list-disc text-sm lg:text-xl ml-5 text-color-status-info"
      >
        <li>
          <span class="font-semibold">General</span>
        </li>
        <li>
          <span class="font-semibold">Quiz</span>
        </li>
        <li>
          <span class="font-semibold">Spin n Win</span>
        </li>
        <li>
          <span class="font-semibold">Scratch n Win</span>
        </li>
        <li>
          <span class="font-semibold">Leaderboard</span>
        </li>
        <li>
          <span class="font-semibold">Subscription</span>
        </li>
        <li>
          <span class="font-semibold">Setting</span>
        </li>
        <li>
          <span class="font-semibold">Upgrade</span>
        </li>
        <li>
          <span class="font-semibold">About</span>
        </li>
      </ul>
    </div>

    <!-- General -->
    <div class="flex flex-col gap-3 lg:gap-8">
      <div class="flex flex-col gap-2 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
          General
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div>
        <img :src="dashboardoverview" alt="" />
      </div>
    </div>

    <!-- quiz -->

    <div class="flex flex-col gap-3 lg:gap-8">
      <div class="flex flex-col gap-2 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
        Quiz
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div>
        <img :src="quizform" alt="" />
      </div>
    </div>


     <!-- Spin n Win -->

     <div class="flex flex-col gap-3 lg:gap-8">
      <div class="flex flex-col gap-2 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
        Spin n Win
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div>
        <img :src="spinnwinform" alt="" />
      </div>
    </div>


     <!-- Drag n Match -->

     <div class="flex flex-col gap-3 lg:gap-8">
      <div class="flex flex-col gap-2 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
        Drag n Match
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div>
        <img :src="dragandmatchform" alt="" />
      </div>
    </div>



     <!-- Scratch n Win -->

     <div class="flex flex-col gap-3 lg:gap-8">
      <div class="flex flex-col gap-2 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
        Scratch n Win
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div>
        <img :src="scratchandwinform" alt="" />
      </div>
    </div>
     <!-- Popup -->

     <div class="flex flex-col gap-3 lg:gap-8">
      <div class="flex flex-col gap-2 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
        Popup
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div>
        <img :src="popupform" alt="" />
      </div>
    </div>
     <!-- Leaderboard -->

     <div class="flex flex-col gap-3 lg:gap-8">
      <div class="flex flex-col gap-2 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
        Leaderboard
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div>
        <img :src="leaderboard" alt="" />
      </div>
    </div>
     <!-- Subscription -->

     <div class="flex flex-col gap-3 lg:gap-8">
      <div class="flex flex-col gap-2 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
        Subscription
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div>
        <img :src="subscription" alt="" />
      </div>
    </div>
     <!-- settings -->

     <div class="flex flex-col gap-3 lg:gap-8">
      <div class="flex flex-col gap-2 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
        Settings
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div>
        <img :src="settings" alt="" />
      </div>
    </div>
     <!-- upgrade -->

     <div class="flex flex-col gap-3 lg:gap-8">
      <div class="flex flex-col gap-2 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
        Upgrade
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div>
        <img :src="upgrade" alt="" />
      </div>
    </div>
     <!-- aboutform -->

     <div class="flex flex-col gap-3 lg:gap-8">
      <div class="flex flex-col gap-2 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
        About
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div>
        <img :src="aboutform" alt="" />
      </div>
    </div>

    
  </div>
</template>
<script>
import {
  dashboardoverview,
  quizform,
  spinnwinform,
  dragandmatchform,
  scratchandwinform,
  popupform,
  leaderboard,
  subscription,
  settings,
  upgrade,
  aboutform,
} from "../../../assets/getAssets";

export default {
  data() {
    return {
      dashboardoverview,
      quizform,
      spinnwinform,
      dragandmatchform,
      scratchandwinform,
      popupform,
      leaderboard,
      subscription,
      settings,
      upgrade,
      aboutform,
    };
  },
};
</script>
