<script setup>
    import { defineProps } from 'vue'

    defineProps({
        tableValue: {}
    })
</script>
<template>
    <table class="flex flex-col w-full gap-1 border border-gray-300 bg-gray-100 p-1 ">
          <div class="grid grid-cols-2 lg:grid-cols-4 text-xl text-center gap-1">
            <p class="col-span-2 bg-gray-600 py-3 font-bold text-white">รางวัลที่ 1</p>
            <p class="col-span-2 bg-gray-300 py-3 font-bold">{{tableValue.rewardNumberOne}}</p>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 text-xl text-center gap-1">
            <p class="col-span-2 bg-gray-600 py-3 font-bold text-white">รางวัลเลขข้างเคียงที่ 1</p>
            <p class="bg-gray-300 py-3 font-bold">{{tableValue.rewardNearbyNumberOne?.[0]}}</p>
            <p class="bg-gray-300 py-3 font-bold">{{tableValue.rewardNearbyNumberOne?.[1]}}</p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-4 text-xl text-center gap-1">
            <p class="bg-gray-600 py-3 font-bold text-white">รางวัลที่ 2</p>
            <p class="bg-gray-300 py-3 font-bold">{{tableValue.rewardNumberTwo?.[0]}}</p>
            <p class="bg-gray-300 py-3 font-bold">{{tableValue.rewardNumberTwo?.[1]}}</p>
            <p class="bg-gray-300 py-3 font-bold">{{tableValue.rewardNumberTwo?.[2]}}</p>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 text-xl text-center gap-1">
            <p class="col-span-2 bg-gray-600 py-3 font-bold text-white">รางวัลเลขท้าย 2 ตัว</p>
            <p class="col-span-2 bg-gray-300 py-3 font-bold">{{tableValue.rewardLastTwo}}</p>
          </div>
        </table>
</template>