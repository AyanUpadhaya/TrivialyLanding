<template>
  <div
    class="w-full relative rounded-[20px] pt-6 px-4   flex flex-col items-start justify-start pb-4 box-border gap-[56px_0px] text-center text-13xl text-color-primary-color-900 font-inter overflow-hidden"
    :class="
          showColor?'bg-color-primary-color-100':'',
          !isPricingPage?'shadow-[0px_8px_24px_rgba(0,_0,_0,_0.05)]':''
          "
    >
    <div
    data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      class="self-stretch flex flex-col items-center justify-center gap-[8px_0px]"
    >
      <div
     
        class="self-stretch flex flex-row items-center justify-start py-2 px-0"
      >
        <b class="flex-1 relative tracking-[-0.02em] leading-[115%]"
          >Trivialy Packages</b
        >
      </div>
      <div
        class="self-stretch relative text-sm leading-[130%] text-color-text-colors-600-black-low-emp max-w-[296px] text-center md:max-w-full mx-auto"
      >
        Unlock the Full Potential of Trivally: Explore Our Tailored Packages for
        Every Need.
      </div>
    </div>
    <div
    data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      class="w-full rounded-3xl  h-max flex flex-col  md:flex-row  justify-end md:justify-start md:items-start py-8 md:pb-0 px-4 box-border md:gap-[0px_40px] text-left"
      :class="
              isPricingPage ? 'bg-neutral-40' : 'bg-color-neutral-colors-50'
            "
      >
      <div
      
        class="self-stretch rounded-2xl bg-color-primary-color-900 shadow-[0px_24px_60px_rgba(58,_50,_125,_0.2)] overflow-hidden flex flex-col items-center justify-start py-[60px] px-6 relative gap-[44px_0px] text-color-neutral-colors-50 -translate-y-14"
      >
        <div
          class="self-stretch flex flex-col items-center justify-center gap-[16px_0px] z-[0]"
        >
          <div
            class="self-stretch flex flex-col items-center justify-center gap-[8px_0px]"
          >
            <b class="self-stretch relative tracking-[-0.02em] leading-[115%]"
              >$0</b
            >
            <div
              class="self-stretch relative text-sm leading-[130%] text-color-text-colors-100-white-medium-emp"
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
              <div class="flex-1 relative leading-[125%]">Popup: UNLIMITED</div>
            </div>
            <div
              class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
            >
              <img
                class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                alt=""
                :src="listitem"
              />
              <div class="flex-1 relative leading-[125%]">Leaderboard</div>
            </div>
            <div
              class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
            >
              <img
                class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                alt=""
                :src="listitem"
              />
              <div class="flex-1 relative leading-[125%]">24/7 Support</div>
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
          class="my-0 mx-[!important] absolute top-[0px] right-[12px] rounded-t-none rounded-b-lg bg-color-secondary-color-500 flex flex-row items-center justify-center py-1.5 px-4 z-[1] text-xs"
        >
          <div class="relative leading-[130%] font-semibold">Recommended</div>
        </div>
      </div>

      <div
      data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="self-stretch rounded-2xl flex flex-col items-start justify-start py-6 px-4"
      >
        <div class="flex flex-col justify-end gap-[16px_0px] w-full">
          <div
            class="self-stretch flex flex-col justify-start gap-[16px_0px] w-full"
          >
            <div
              class="self-stretch flex flex-row items-center justify-between w-full"
            >
              <div class="flex-1 relative">
                <b class="tracking-[-0.02em] leading-[115%]">
                  <span>$9</span>
                  <span class="text-[28px]"> </span>
                </b>
                <span class="text-sm leading-[130%]">/month</span>
              </div>
              <div
                class="relative md:text-sm text-xs leading-[130%] text-color-primary-color-500 text-right top-2"
              >
                *Billed Annually
              </div>
            </div>
            <div
              class="self-stretch relative text-sm leading-[130%] text-color-text-colors-600-black-low-emp"
            >
              PRO
            </div>
          </div>
          <div
            class="self-stretch flex flex-col items-start justify-start gap-[12px_0px] text-xs sm:text-sm text-color-text-colors-600-black-low-emp"
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
              <div class="flex-1 relative leading-[125%]">Popup: UNLIMITED</div>
            </div>
            <div
              class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
            >
              <img
                class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                alt=""
                :src="listitem"
              />
              <div class="flex-1 relative leading-[125%]">Leaderboard</div>
            </div>
            <div
              class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
            >
              <img
                class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                alt=""
                :src="listitem"
              />
              <div class="flex-1 relative leading-[125%]">24/7 Support</div>
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
      <div
      data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="self-stretch rounded-2xl flex flex-col items-start justify-start py-6 px-4"
      >
        <div
          class="self-stretch flex flex-col items-start justify-start gap-[16px_0px]"
        >
          <div
            class="self-stretch flex flex-col items-start justify-start gap-[16px_0px]"
          >
            <div class="self-stretch relative">
              <b>
                <span class="tracking-[-0.02em] leading-[115%]">$12</span>
                <span class="text-[40px] tracking-[-0.04em] leading-[110%]">
                </span>
              </b>
              <span class="text-sm leading-[130%]">/month</span>
            </div>
            <div
              class="self-stretch relative text-sm leading-[130%] text-color-text-colors-600-black-low-emp"
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
              <div class="flex-1 relative leading-[125%]">Popup: UNLIMITED</div>
            </div>
            <div
              class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
            >
              <img
                class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                alt=""
                :src="listitem"
              />
              <div class="flex-1 relative leading-[125%]">Leaderboard</div>
            </div>
            <div
              class="self-stretch flex flex-row items-center justify-start gap-[0px_8px]"
            >
              <img
                class="w-4 relative rounded-81xl h-4 overflow-hidden shrink-0"
                alt=""
                :src="listitem"
              />
              <div class="flex-1 relative leading-[125%]">24/7 Support</div>
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
