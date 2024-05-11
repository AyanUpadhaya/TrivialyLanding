<template>
  <div
    class="relative w-full flex flex-col items-start justify-center gap-8 lg:gap-[60px_0px] text-left text-color-text-colors-600-black-low-emp font-inter pb-6 lg:pb-0"
    id="install"
  >
    <!-- Installation -->
    <div class="flex flex-col gap-4 lg:gap-[60px]">
      <div
        class="self-stretch flex flex-col items-start justify-center gap-2 lg:gap-[12px_0px]"
      >
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[120%] lg:leading-[110%] text-2xl md:text-[30px] lg:text-[40px] text-color-primary-color-900 font-bold py-2 lg:py-0"
        >
          Installation
        </div>
        <div
          class="self-stretch relative text-sm md:text-base lg:text-lg leading-[130%] text-color-text-colors-600-black-low-emp"
        >
          Step-by-step instructions on how to get started and make everything
          good to go!
        </div>
      </div>
      <div class="flex flex-col lg:gap-6 gap-3">
        <img :src="placeholder" alt="" />
        <div
          class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          The procedure to install <b>Trivialy</b> is the same as all the other
          WordPress plugins. For further guidelines, choose any of the following
          methods.
        </div>
      </div>
    </div>

    <!-- Installing the Free version -->

    <div
      class="self-stretch flex flex-col items-start justify-center gap-3 md:gap-4 lg:gap-8"
    >
      <!-- text -->
      <div class="flex flex-col gap-3 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
          Installing the Free version
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          It’s very easy to install the free version of Trivialy. The free
          version is available on the
          <span class="text-color-status-info">WordPress.org plugins</span>
          directory. You can install Trivialy from your WordPress dashboard as
          well, in order to do that:
        </div>
      </div>
      <!-- list -->
      <ul
        class="flex flex-col gap-3 lg:gap-8 list-disc text-xs sm:text-sm lg:text-xl ml-5 text-black-low-emp mb-3 lg:mb-8"
      >
        <li>
          Go to your WordPress site <span class="font-semibold">Dashboard</span>
        </li>
        <li>
          Navigate to <span class="font-semibold">Plugins > Add New</span> and
          type <span class="font-semibold">“Trivialy”</span> in the search field
        </li>
        <li>
          Find <span class="font-semibold">“Trivialy”</span> from the list and
          hit <span class="font-semibold">“Install Now”</span>
        </li>
      </ul>
      <!-- img -->
      <div class="flex flex-col lg:gap-6 gap-3">
        <img :src="placeholder" alt="" />
        <div
          class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          After successful installation, activate the plugin to create a
          full-fledged online learning platform.
        </div>
      </div>
    </div>

    <!-- Installing the Pro version -->

    <div
      class="self-stretch flex flex-col items-start justify-center gap-3 md:gap-4 lg:gap-8"
    >
      <!-- text -->
      <div class="flex flex-col gap-3 lg:gap-8">
        <div
          class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
        >
          Installing the Pro version
        </div>
        <div
          class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
        >
          The pro version of Trivialy comes with a plugin (zip file) and a
          license key. Please note, it is required to have Trivialy free version
          activated in order to use the premium version. So, firstly, you need
          to visit https://www.trivialy.com You will see a download button right
          beside it. Once you have downloaded the plugin, do the following steps
          to install Trivialy Pro successfully.
        </div>
      </div>
      <!-- list -->
      <ul
        class="flex flex-col gap-3 lg:gap-8 list-disc text-xs sm:text-sm lg:text-xl ml-5 text-black-low-emp mb-3 lg:mb-8"
      >
        <li>
          Go to your WordPress site <span class="font-semibold">Dashboard</span>
        </li>
        <li>
          Navigate to <span class="font-semibold">Plugins > Add New</span>
        </li>
        <li>
          On the top, right beside the
          <span class="font-semibold">“Add Plugins”</span> you’ll see an
          <span class="font-semibold"> “Upload Plugin”</span> button, click on
          it.
        </li>
      </ul>
      <div class="flex flex-col lg:gap-8 gap-3">
        <!-- one -->
        <div class="flex flex-col lg:gap-6 gap-3">
          <img :src="placeholder" alt="" />
          <div
            class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
          >
            Now you’ll get an upload form. Choose the Zip file from your
            computer by clicking on
            <span class="font-semibold">“Choose File” </span> or just drag and
            drop Trivialy Pro zip file, then click on
            <span class="font-semibold">“Install Now”</span>.
          </div>
        </div>

        <!-- two -->
        <div class="flex flex-col lg:gap-6 gap-3">
          <img :src="placeholder" alt="" />
          <div
            class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
          >
            After successful installation, you need to activate the plugin. This
            will complete your installation process.
          </div>
        </div>

        <!-- three -->
        <div class="flex flex-col lg:gap-6 gap-3">
          <img :src="placeholder" alt="" />
          <div
            class="leading-[130%] lg:leading-[140%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
          >
            Your installation process for the premium version is now complete.
          </div>
        </div>
      </div>
    </div>

    <!-- License Activation -->

    <!-- text -->
    <div class="flex flex-col gap-3 lg:gap-8">
      <div
        class="self-stretch relative tracking-[-0.04em] leading-[110%] text-color-primary-color-900 text-xl lg:text-[28px] font-bold"
      >
        License Activation
      </div>
      <div
        class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
      >
        To insert your license key, navigate to Trivialy > Trivialy Pro License,
        enter the license key in the text field and then click on “Connect with
        License key”.
      </div>
    </div>

    <div
      class="self-stretch relative leading-[140%%] text-color-text-colors-600-black-low-emp text-sm md:text-base lg:text-xl"
    >
      Updated on February 29, 2024
    </div>
  </div>
</template>
<script>
import { install, placeholder } from "../../../assets/getAssets";

export default {
  data() {
    return {
      install,
      placeholder,
    };
  },
};
</script>
