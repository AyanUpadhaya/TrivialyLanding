<template>
  <div class="max-w-[1176px] mx-auto mb-[60px] lg:mb-[209px] font-inter px-4">
    <div
      class="w-full rounded-[40px] flex flex-col items-center justify-center box-border text-center font-inter px-4 pt-6 pb-4"
      :class="showColor ? 'bg-color-primary-color-100' : ''"
    >
      <div
        class="flex flex-col items-center justify-start gap-4 lg:gap-[60px] w-full"
      >
        <!-- form part -->
        <div class="w-full flex flex-col justify-center gap-4 md:gap-[18px]">
          <h3
            class="text-center tracking-[-0.02em] leading-[105%] inline-block font-bold text-[25px] xs:text-13xl lg:text-37xl py-2 lg:py-0"
            :class="
              isHeadingWhite ? 'text-white' : 'text-color-primary-color-900'
            "
          >
            Contact Us
          </h3>
          <div
            class="self-stretch text-sm md:text-xl leading-[140%] text-center max-w-[296px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-full mx-auto"
            :class="
              isParaWhite
                ? 'text-white-medium-emp'
                : 'text-sm leading-[130%] text-color-text-colors-600-black-low-emp '
            "
          >
            Dive in to find straightforward solutions, helpful tips, and make
            the most of your journey with Trivialy.
          </div>
        </div>
        <!-- grid form h-[740px] -->

        <div
          class="w-full bg-color-neutral-colors-50 grid grid-cols-1 sm:grid-cols-2 items-stretch justify-start box-border gap-6 lg:gap-[60px] text-left text-21xl"
        >
          <!--left  height-->
          <div
            class="flex-1 rounded-xl lg:rounded-3xl bg-contactInfobg bg-right-bottom bg-no-repeat bg-cover flex flex-col items-center justify-start p-4 md:p-6 lg:py-11 lg:px-10 text-color-neutral-colors-50"
          >
            <div
              class="self-stretch flex flex-col items-center gap-5 lg:gap-[60px] h-full"
            >
              <!-- heading -->
              <div
                class="self-stretch flex flex-col items-center justify-center gap-1 md:gap-[16px]"
              >
                <h3
                  class="self-stretch font-inter font-bold text-xl lg:text-[32px] leading-[115%]"
                >
                  Contact Information
                </h3>
                <div
                  class="self-stretch text-sm md:text-base leading-[140%] text-white-medium-emp"
                >
                  We love to hear from you. Our friendly team is <br />
                  always here to contact with you.
                </div>
              </div>

              <div
                class="self-stretch flex flex-col gap-5 md:gap-6 h-full font-normal"
              >
                <!-- information -->

                <div
                  class="self-stretch flex flex-col items-start justify-start gap-3 md:gap-[28px] text-base"
                >
                  <!-- number -->
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-2 md:gap-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[10px] h-[10px] md:w-5 md:h-5"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M0.5 20L1.90583 14.8641C1.03833 13.3608 0.5825 11.6566 0.583333 9.90914C0.585833 4.44582 5.03166 0 10.4941 0C13.145 0.000833331 15.6333 1.03333 17.505 2.90666C19.3758 4.77999 20.4058 7.26998 20.405 9.91831C20.4025 15.3825 15.9566 19.8283 10.4941 19.8283C8.83581 19.8275 7.20165 19.4116 5.75415 18.6216L0.5 20ZM5.99749 16.8275C7.39415 17.6566 8.72748 18.1533 10.4908 18.1541C15.0308 18.1541 18.7291 14.4591 18.7316 9.91664C18.7333 5.36499 15.0525 1.675 10.4975 1.67333C5.95415 1.67333 2.25833 5.36832 2.25666 9.90998C2.25583 11.7641 2.79916 13.1525 3.71166 14.605L2.87916 17.645L5.99749 16.8275ZM15.4866 12.2741C15.425 12.1708 15.26 12.1091 15.0116 11.985C14.7641 11.8608 13.5466 11.2616 13.3191 11.1791C13.0925 11.0966 12.9275 11.055 12.7616 11.3033C12.5966 11.5508 12.1216 12.1091 11.9775 12.2741C11.8333 12.4391 11.6883 12.46 11.4408 12.3358C11.1933 12.2116 10.395 11.9508 9.44915 11.1066C8.71331 10.45 8.21582 9.63914 8.07165 9.39081C7.92748 9.14331 8.05665 9.00915 8.17998 8.88581C8.29165 8.77498 8.42748 8.59665 8.55165 8.45165C8.67748 8.30831 8.71832 8.20498 8.80165 8.03915C8.88415 7.87415 8.84332 7.72915 8.78082 7.60498C8.71832 7.48165 8.22332 6.26249 8.01748 5.76665C7.81582 5.28415 7.61165 5.34915 7.45998 5.34165L6.98499 5.33332C6.81999 5.33332 6.55165 5.39499 6.32499 5.64332C6.09832 5.89165 5.45832 6.48999 5.45832 7.70915C5.45832 8.92831 6.34582 10.1058 6.46915 10.2708C6.59332 10.4358 8.21498 12.9375 10.6991 14.01C11.29 14.265 11.7516 14.4175 12.1108 14.5316C12.7041 14.72 13.2441 14.6933 13.6708 14.63C14.1466 14.5591 15.1358 14.0308 15.3425 13.4525C15.5491 12.8733 15.5491 12.3775 15.4866 12.2741Z"
                        fill="white"
                      />
                    </svg>
                    <div
                      class="flex-1 leading-[125%] font-inter text-base flex flex-col gap-[2px] md:gap-1"
                    >
                      <div
                        class="text-[10px] md:text-base leading-[12.5px] md:leading-[22.4px] font-semibold"
                      >
                        Phone:
                      </div>
                      <div
                        class="text-[10px] md:text-base leading-[12.5px] md:leading-[22.4px] font-normal"
                      >
                        +8801724244796
                      </div>
                    </div>
                  </div>

                  <!-- contact mail-->
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-2 md:gap-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 h-3 md:w-6 md:h-6"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M20.7646 6.42424L21.9644 5.67589C21.9877 5.78037 22 5.88884 22 6V18C22 18.8239 21.3239 19.5 20.5 19.5H4.5C3.67614 19.5 3 18.8239 3 18V6C3 5.88884 3.01231 5.78037 3.03563 5.67589L4.23538 6.42424L12.2354 11.4142L12.5 11.5793L12.7646 11.4142L20.7646 6.42424ZM21.9135 5.5H20.5H4.5H3.08648C3.29395 4.91938 3.85116 4.5 4.5 4.5H20.5C21.1488 4.5 21.7061 4.91938 21.9135 5.5ZM20.5 18.5H21V18V8V7.09788L20.235 7.576L12.5 12.4104L4.765 7.576L4 7.09788V8V18V18.5H4.5H20.5Z"
                        fill="#8789F2"
                        stroke="white"
                      />
                    </svg>
                    <div
                      class="flex-1 leading-[125%] font-inter text-base flex flex-col gap-[2px] md:gap-1"
                    >
                      <div
                        class="text-[10px] md:text-base leading-[12.5px] md:leading-[22.4px] font-semibold"
                      >
                        Email:
                      </div>
                      <div
                        class="text-[10px] md:text-base leading-[12.5px] md:leading-[22.4px] font-normal"
                      >
                        contact@netrocreative.com
                      </div>
                    </div>
                  </div>

                  <!-- office-->
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-2 md:gap-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[11px] h-[11px] md:w-[22px] md:h-[22px]"
                      viewBox="0 0 23 22"
                      fill="none"
                    >
                      <path
                        d="M6.91663 14.2083H6.45829V14.6667V18.7917H1.87496V10.3192L7.83329 6.06325L13.7916 10.3192V18.7917H9.20829V14.6667V14.2083H8.74996H6.91663ZM12.4166 17.875H12.875V17.4167V11V10.7614L12.6795 10.6245L8.09613 7.41619L7.83329 7.2322L7.57046 7.41619L2.98712 10.6245L2.79163 10.7614V11V17.4167V17.875H3.24996H5.08329H5.54163V17.4167V13.2917H10.125V17.4167V17.875H10.5833H12.4166ZM11.5 4.125H11.0416V4.58333V4.97552L10.125 4.3201V3.20833H21.125V18.7917H16.5416V17.875H19.75H20.2083V17.4167V4.58333V4.125H19.75H11.5ZM16.5416 7.79167V6.875H17.4583V7.79167H16.5416ZM16.5416 11.4583V10.5417H17.4583V11.4583H16.5416ZM16.5416 15.125V14.2083H17.4583V15.125H16.5416Z"
                        fill="#8789F2"
                        stroke="white"
                        stroke-width="0.916667"
                      />
                    </svg>
                    <div
                      class="flex-1 leading-[125%] font-inter text-base flex flex-col gap-[2px] md:gap-1"
                    >
                      <div
                        class="text-[10px] md:text-base leading-[12.5px] md:leading-[22.4px]"
                      >
                        Head Office:
                      </div>
                      <div
                        class="text-[8px] md:text-base leading-[12.5px] md:leading-[22.4px] font-normal"
                      >
                        Level 6B, Bangabandhu Sheikh Mujib Hi-Tech Park,
                        Rajshahi
                      </div>
                    </div>
                  </div>

                  <!-- location-->
                  <div
                    class="self-stretch flex flex-row items-center justify-start gap-2 md:gap-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 h-3 md:w-6 md:h-6"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M12.1056 19.1873L12.4977 19.6907L12.8927 19.1895C13.9627 17.8318 15.2298 16.0589 16.2321 14.254C17.2237 12.4684 18 10.5755 18 9C18 5.96386 15.5361 3.5 12.5 3.5C9.46386 3.5 7 5.96386 7 9C7 10.5619 7.78771 12.461 8.78304 14.2505C9.78986 16.0608 11.0564 17.8405 12.1056 19.1873ZM12.5 21.2395C12.3179 21.0266 12.0768 20.7397 11.7945 20.3919C11.1447 19.5913 10.2791 18.4706 9.41448 17.1891C8.54892 15.9062 7.69053 14.4713 7.05005 13.0417C6.40664 11.6055 6 10.2113 6 9C6 5.40614 8.90614 2.5 12.5 2.5C16.0939 2.5 19 5.40614 19 9C19 10.2113 18.5934 11.6055 17.9499 13.0417C17.3095 14.4713 16.4511 15.9062 15.5855 17.1891C14.7209 18.4706 13.8553 19.5913 13.2055 20.3919C12.9232 20.7397 12.6821 21.0266 12.5 21.2395ZM14.5 9C14.5 10.1046 13.6046 11 12.5 11C11.3954 11 10.5 10.1046 10.5 9C10.5 7.89543 11.3954 7 12.5 7C13.6046 7 14.5 7.89543 14.5 9Z"
                        stroke="white"
                      />
                    </svg>
                    <div
                      class="flex-1 leading-[125%] font-inter text-base flex flex-col gap-[2px] md:gap-1"
                    >
                      <div
                        class="text-[10px] md:text-base leading-[12.5px] md:leading-[22.4px]"
                      >
                        UK Office:
                      </div>
                      <div
                        class="text-[10px] md:text-base leading-[12.5px] md:leading-[22.4px] font-normal"
                      >
                        290737 York House Green Lane West, Garstang, Preston,
                        Lancashire, England, PR3 1NJ
                      </div>
                    </div>
                  </div>
                </div>

                <!-- socials -->
                <div class="flex items-center gap-1 md:gap-4">
                  <a href="!#">
                    <img
                      :src="facebookwhite"
                      alt=""
                      class="w-4 h-4 md:w-[35px] md:h-[36px]"
                    />
                  </a>
                  <a href="!#">
                    <img
                      :src="linkedinwhite"
                      alt=""
                      class="w-4 h-4 md:w-[35px] md:h-[36px]"
                    />
                  </a>
                  <a href="!#">
                    <img
                      :src="twitterwhite"
                      alt=""
                      class="w-4 h-4 md:w-[35px] md:h-[36px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- form -->

          <div
            class="self-stretch flex-1 flex flex-col justify-start font-inter h-full"
          >
            <form
              class="w-full flex flex-col items-end justify-start gap-2 lg:gap-[32px_0px] text-left text-base text-color-primary-color-900 font-inter"
            >
              <div
                class="self-stretch text-sm md:text-base lg:text-xl leading-[140%] text-color-text-colors-disabled"
              >
                We're here to listen, assist, and make connections.
              </div>

              <div
                class="w-full flex flex-col items-end justify-start gap-[32px]"
              >
                <div
                  class="self-stretch flex flex-col items-center justify-start gap-[16px_0px] text-black-medium-emp"
                >
                  <!-- Full Name -->
                  <div
                    class="self-stretch flex flex-col items-center justify-start gap-[8px_0px]"
                  >
                    <div
                      class="self-stretch leading-[140%] text-[10px] md:text-base"
                    >
                      Full Name
                    </div>
                    <input
                      type="text"
                      class="self-stretch rounded-xl text-[10px] md:text-base flex flex-row items-center justify-start p-3 md:p-4 placeholder:text-color-text-colors-disabled text-black-medium-emp border-[1px] border-solid border-[#C9C9CE] focus:outline-none flex-1 leading-[140%]"
                      placeholder="Enter your full name.."
                    />
                  </div>
                  <!-- email -->

                  <div
                    class="self-stretch flex flex-col items-center justify-start gap-[8px_0px]"
                  >
                    <div
                      class="self-stretch leading-[140%] text-[10px] md:text-base"
                    >
                      Email
                    </div>
                    <input
                      type="email"
                      class="self-stretch rounded-xl text-[10px] md:text-base flex flex-row items-center justify-start p-3 md:p-4 placeholder:text-color-text-colors-disabled text-black-medium-emp border-[1px] border-solid border-[#C9C9CE] focus:outline-none flex-1 leading-[140%]"
                      placeholder="Enter your full email..."
                    />
                  </div>

                  <div
                    class="self-stretch flex flex-col items-start justify-start gap-[8px_0px]"
                  >
                    <div
                      class="self-stretch leading-[140%] text-[10px] md:text-base"
                    >
                      How can we help?
                    </div>
                    <textarea
                      placeholder="Tell us about your queries.."
                      class="self-stretch text-[10px] md:text-base rounded-xl box-border h-[198px] flex flex-row items-start justify-start p-4 placeholder:text-color-text-colors-disabled text-black-medium-emp border-[1px] border-[#C9C9CE] focus:outline-none"
                    ></textarea>
                  </div>
                </div>
                <!-- button -->
                <button
                  type="button"
                  class="btn rounded-xl w-[144px] bg-color-primary-color-500 lg:hover:bg-color-primary-color-500 text-white h-14 flex flex-row items-center justify-center text-base font-semibold font-inter py-4 px-6 box-border gap-[0px_16px] text-center"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <!--  -->
      </div>
    </div>
  </div>
</template>
<script>
import {
  listitem,
  facebookwhite,
  linkedinwhite,
  twitterwhite,
} from "../../../assets/getAssets";

export default {
  data() {
    return {
      listitem,
      facebookwhite,
      linkedinwhite,
      twitterwhite,
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
    isContactPage: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
