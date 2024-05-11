<template>
  <section
    class="font-inter px-4 overflow-hidden"
    :class="!isPricingPage ? 'bg-darkslateblue' : ''"
  >
    <div
      class="max-w-[1305px] mx-auto"
      :class="isPricingPage ? 'pb-[124px]' : 'pb-[110px]'"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div
        class="w-full relative rounded-[40px] flex flex-col items-center justify-center px-0 box-border text-center text-37xl font-text-body-body-3-bold-semibold-600"
        :class="showColor ? 'bg-dark-grayish-900 ' : '',
          !isPricingPage ? 'py-20 shadow-pricingBox' : ''
        "
      >
        <div class="flex flex-col items-center justify-start gap-[84px_0px]">
          <div
            class="max-w-[1176px] flex flex-col items-end justify-center gap-[18px_0px]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h3
              class="w-[1176px] relative tracking-[-0.02em] leading-[105%] inline-block font-bold"
              :class="
                isHeadingWhite ? 'text-white' : 'text-primary-color-900'
              "
            >
              Trivialy Packages
            </h3>
            <div
              class="self-stretch relative text-xl leading-[140%]"
              :class="
                isParaWhite
                  ? 'text-white-medium-emp'
                  : 'text-black-low-emp'
              "
            >
              Unlock the Full Potential of Trivally: Explore Our Tailored
              Packages for Every Need.
            </div>
          </div>
          <div
            :class="
              isPricingPage ? 'bg-neutral-40' : 'bg-color-neutral-colors-50'
            "
            class="max-w-[1100px] rounded-3xl h-[501px] flex flex-row items-end justify-start p-8 box-border gap-[0px_40px] text-left text-21xl"
          >
            <!-- free -->
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              class="flex-1 rounded-2xl bg-color-primary-color-900 shadow-recommnededBox overflow-hidden flex flex-col items-center justify-end pt-10 px-7 pb-[60px] relative gap-[44px_0px] text-color-neutral-colors-50"
            >
              <div
                class="self-stretch flex flex-col items-center justify-center gap-[32px_0px] z-[0]"
              >
                <div
                  class="self-stretch flex flex-col items-center justify-center gap-[16px_0px]"
                >
                  <b
                    class="self-stretch relative tracking-[-0.04em] leading-[110%]"
                    >$0</b
                  >
                  <div
                    class="self-stretch relative text-base leading-[140%] text-color-text-colors-100-white-medium-emp"
                  >
                    FREE Forever
                  </div>
                </div>
                <div
                  class="self-stretch flex flex-col items-start justify-start gap-[12px_0px] text-sm"
                >
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Access to All Campaigns
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Image Quiz: 2 Campaign
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Text Quiz: 2 Campaign
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Drag n Match: 2 Campaign
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Spin n Win: 2 Campaign
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Scratch n Win: 2 Campaign
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Popup: UNLIMITED
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Leaderboard
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      24/7 Support
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Forever Free and Update
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="my-0 mx-[!important] absolute top-[-0.09px] right-[31px] rounded-t-none rounded-b-lg bg-color-secondary-color-500 flex flex-row items-center justify-center py-1.5 px-4 z-[1] text-xs"
              >
                <div class="relative leading-[130%] font-semibold">
                  Recommended
                </div>
              </div>
            </div>
            <!-- pro -->
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              class="flex-1 rounded-2xl flex flex-col items-start justify-start pt-9 px-6 pb-6"
            >
              <div
                class="self-stretch flex flex-col items-start justify-end gap-[32px_0px]"
              >
                <div
                  class="self-stretch flex flex-col items-start justify-start gap-[16px_0px]"
                >
                  <div
                    class="self-stretch flex flex-row items-center justify-between gap-4"
                  >
                    <div
                      class="relative inline-block shrink-0 text-color-primary-color-900"
                    >
                      <b class="tracking-[-0.04em] leading-[110%]">$9 </b>
                      <span class="text-5xl leading-[120%]">/month</span>
                    </div>
                    <div
                      class="flex-shrink-0 relative text-sm leading-[130%] text-color-primary-color-500 text-right top-2"
                    >
                      *Billed Annually
                    </div>
                  </div>
                  <div
                    class="self-stretch relative text-base leading-[140%] text-color-text-colors-600-black-low-emp"
                  >
                    PRO
                  </div>
                </div>
                <div
                  class="self-stretch flex flex-col items-start justify-start gap-[12px_0px] text-sm text-color-text-colors-600-black-low-emp"
                >
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Access to All Campaigns
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Image Quiz: UNLIMITED
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Text Quiz: UNLIMITED
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Drag n Match: UNLIMITED
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Spin n Win: UNLIMITED
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Scratch n Win: UNLIMITED
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Popup: UNLIMITED
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Leaderboard
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      24/7 Support
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Forever Free and Update
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- go pack -->
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              class="flex-1 rounded-2xl flex flex-col items-start justify-start pt-9 px-6 pb-6"
            >
              <div
                class="self-stretch flex flex-col items-start justify-start gap-[32px_0px]"
              >
                <div
                  class="self-stretch flex flex-col items-start justify-start gap-[16px_0px]"
                >
                  <div
                    class="self-stretch relative text-color-primary-color-900"
                  >
                    <b class="tracking-[-0.04em] leading-[110%]">$12 </b>
                    <span class="text-5xl leading-[120%]">/month</span>
                  </div>
                  <div
                    class="self-stretch relative text-base leading-[140%] text-color-text-colors-600-black-low-emp"
                  >
                    Go Pack
                  </div>
                </div>
                <div
                  class="self-stretch flex flex-col items-start justify-start gap-[12px_0px] text-sm text-color-text-colors-600-black-low-emp"
                >
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Access to All Campaigns
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Image Quiz: UNLIMITED
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Text Quiz: UNLIMITED
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Drag n Match: UNLIMITED
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Spin n Win: UNLIMITED
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Scratch n Win: UNLIMITED
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Popup: UNLIMITED
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Leaderboard
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      24/7 Support
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
                  >
                    <img
                      class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                      alt=""
                      :src="listitem"
                    />
                    <div class="flex-1 relative leading-[125%]">
                      Forever Free and Update
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { listitem } from "../../../assets/getAssets";

export default {
  data() {
    return {
      listitem,
    };
  },
  props: {
    showColor: {
      type: Boolean,
      default: true,
    },
    isHeadingWhite: {
      type: Boolean,
      default: false,
    },
    isParaWhite: {
      type: Boolean,
      default: false,
    },
    isPricingPage: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
