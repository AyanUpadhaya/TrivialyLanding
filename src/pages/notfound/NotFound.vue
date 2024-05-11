<template>
    <div>

        <div class="flex flex-col justify-center items-center gap-[100px]">
        <div class="flex flex-col justify-center items-center text-center">
          <h3
            class="text-black-700 font-mont text-[60px] font-extrabold uppercase leading-[130%] mb-6"
          >
            404 <br> PAGE NOT FOUND
          </h3>
         <div class="flex justify-center">
            <router-link
          to="/"
          class="max-w-max px-6 py-[20px] leading-none rounded-xl bg-black-800 flex justify-center items-center gap-2"
        >
          <span class="text-white font-mont text-xl font-normal pl-2"
            >Go Home</span
          >
        </router-link>
         </div>
        </div>

      </div>

    </div>
</template>
