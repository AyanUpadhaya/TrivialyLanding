<template>
  <!-- small search bar -->
  <div class="w-full flex items-center gap-4">
    <div
      class="w-full rounded-xl py-3 px-5 border-[1px] border-solid border-color-neutral-colors-200"
    >
      <div class="w-full flex flex-row items-center gap-[0px_8px]">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M21.3023 19.2964H20.2489L19.8756 18.9364C21.4756 17.0697 22.3023 14.5231 21.8489 11.8164C21.2223 8.10974 18.1289 5.14974 14.3956 4.69641C8.7556 4.00307 4.00893 8.74974 4.70227 14.3897C5.1556 18.1231 8.1156 21.2164 11.8223 21.8431C14.5289 22.2964 17.0756 21.4697 18.9423 19.8697L19.3023 20.2431V21.2964L24.9689 26.9631C25.5156 27.5097 26.4089 27.5097 26.9556 26.9631C27.5023 26.4164 27.5023 25.5231 26.9556 24.9764L21.3023 19.2964ZM13.3023 19.2964C9.98227 19.2964 7.30227 16.6164 7.30227 13.2964C7.30227 9.97641 9.98227 7.29641 13.3023 7.29641C16.6223 7.29641 19.3023 9.97641 19.3023 13.2964C19.3023 16.6164 16.6223 19.2964 13.3023 19.2964Z"
              fill="#A0A0A0"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search"
          class="relative text-color-text-colors-600-black-low-emp leading-[140%] border-none outline-none focus:outline-0 w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
