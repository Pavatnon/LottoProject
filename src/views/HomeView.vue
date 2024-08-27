<script setup>
  import {useLotteryStore} from '@/stores/lottery'
  import { onMounted, ref } from 'vue';

  const lotteryStore = useLotteryStore()
  const checkRewardModel = ref('')
  onMounted(()=>{
    lotteryStore.LoadReward()
  })


  const randomRewardHandle = () =>{
    lotteryStore.RandomReward()
  }
  const rewardCheck = () =>{
    lotteryStore.CheckReward(checkRewardModel.value)
  }

</script>

<template>
  <Layout>

    <header class="text-center">
      <h1 class="text-3xl font-bold">รางวัลล็อตเตอรี่</h1>
    </header>

    <main class="grid grid-cols-1 items-center my-4 gap-4">
      <!-- ผลรางวัล -->
      <section class="flex flex-col gap-4 w-full">
        <h2 class="text-2xl font-bold">
          ผลรการออกรางวัลล็อตเตอรี่
        </h2>
        <button @click="randomRewardHandle()" class="btn btn-outline shadow-md w-full max-w-xs">
          ดำเนินการสุ่มรางวัล
        </button>

        <table class="flex flex-col w-full gap-1 border border-gray-300 bg-gray-100 p-1 ">
          <div class="grid grid-cols-4 text-xl text-center gap-1">
            <p class="col-span-2 bg-gray-300 py-3">รางวัลที่ 1</p>
            <p class="col-span-2 bg-gray-300 py-3">{{lotteryStore.lotteryReward.rewardNumberOne}}</p>
          </div>
          <div class="grid grid-cols-4 text-xl text-center gap-1">
            <p class="col-span-2 bg-gray-300 py-3">รางวัลเลขข้างเคียงที่ 1</p>
            <p class="bg-gray-300 py-3">{{lotteryStore.lotteryReward.rewardNearbyNumberOne?.[0]}}</p>
            <p class="bg-gray-300 py-3">{{lotteryStore.lotteryReward.rewardNearbyNumberOne?.[1]}}</p>
          </div>
          <div class="grid grid-cols-4 text-xl text-center gap-1">
            <p class="bg-gray-300 py-3">รางวัลที่ 2</p>
            <p class="bg-gray-300 py-3">{{lotteryStore.lotteryReward.rewardNumberTwo?.[0]}}</p>
            <p class="bg-gray-300 py-3">{{lotteryStore.lotteryReward.rewardNumberTwo?.[1]}}</p>
            <p class="bg-gray-300 py-3">{{lotteryStore.lotteryReward.rewardNumberTwo?.[2]}}</p>
          </div>
          <div class="grid grid-cols-4 text-xl text-center gap-1">
            <p class="col-span-2 bg-gray-300 py-3">รางวัลเลขท้าย 2 ตัว</p>
            <p class="col-span-2 bg-gray-300 py-3">{{lotteryStore.lotteryReward.rewardLastTwo}}</p>
          </div>
        </table>
      </section>

      <!-- ตรวจรางวัล -->
      <section class="flex flex-col w-full">
        <div class="flex flex-col w-full gap-8 border border-gray-300 bg-gray-100 p-4 ">
          <h2 class="text-2xl font-bold">
            ตรวจรางวัลล็อตเตอรี่
          </h2>
          <div class="w-full">
            <label class="form-control w-full items-center gap-4">
              <div class="flex flex-row w-full items-center gap-4">
                <p class="text-xl font-bold">เลขล็อตเตอรี่ :</p>
                <input v-model="checkRewardModel" type="text" class="input input-bordered w-full max-w-sm" />
              </div>
            </label>
          </div>
          <button @click="rewardCheck()" class="btn btn-outline shadow-md w-full max-w-xs">ตรวจรางวัล</button>
          <!-- info -->
          <div v-if="lotteryStore.messageRewardCheck.length > 0" class="flex flex-col gap-1 w-full">
              <p v-for="info in lotteryStore.messageRewardCheck" 
                class="p-2 text-lg"
                :class="info === 'คุณไม่ถูกรางวัล'? 'bg-red-500': 'bg-green-400'"
              >
                {{ info }}
              </p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
</template>
