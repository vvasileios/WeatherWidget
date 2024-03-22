<template>
  <div class="">
    <div class="mb-5 flex gap-2">
      <button-base :text="'Now'"></button-base>
      <button-base :text="'Today'"></button-base>
      <button-base :text="'Select Date'"></button-base>
    </div>
    <div class="mt-10 flex justify-between border-b pb-10">
      <div>
        <p class="text-5xl font-semibold">
          16 <span class="font-normal">&#176;C</span>
        </p>
        <p class="pt-3 text-sm text-gray-500">sgssdgsdgsdg</p>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-5">
      <div class="border rounded-xl py-5 px-3">
        <p class="text-xl font-semibold">18 &#176;C</p>
        <p class="text-xs text-gray-500">Feels Like</p>
      </div>
      <div class="border rounded-xl py-5 px-3">
        <p class="text-xl font-semibold">
          3.1 <span class="text-sm font-semibold">m/s</span>
        </p>
        <p class="text-xs text-gray-500">Wind</p>
      </div>
      <div class="border rounded-xl py-5 px-3">
        <p class="text-xl font-semibold">
          0 <span class="text-sm font-semibold">m/s</span>
        </p>
        <p class="text-xs text-gray-500">Wind Gust</p>
      </div>
      <div class="border rounded-xl py-5 px-3">
        <p class="text-xl font-semibold">45&#176;</p>
        <p class="text-xs text-gray-500">Wind Deg</p>
      </div>
      <div class="border rounded-xl py-5 px-3">
        <p class="text-xl font-semibold">
          85<span class="text-sm font-semibold">%</span>
        </p>
        <p class="text-xs text-gray-500">Humidity</p>
      </div>
      <div class="border rounded-xl py-5 px-3">
        <p class="text-xl font-semibold">
          0.2<span class="text-sm font-semibold">hPa</span>
        </p>
        <p class="text-xs text-gray-500">Pressure</p>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBase from "./ButtonBase.vue";
export default {
  name: "DataPanel",

  components: {
    ButtonBase,
  },
};
</script>
