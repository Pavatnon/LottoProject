<script setup>
  import {useLotteryStore} from '@/stores/lottery'
  import { onMounted, ref, watch } from 'vue';

  const lotteryStore = useLotteryStore()
  const checkRewardModel = ref('')
  const isValid = ref(false)
  
  onMounted(()=>{
    lotteryStore.LoadReward()
  })


  const isThreeDigitNumber = (number) =>{
    return typeof number === 'string' && number.length === 3 && /^[0-9]{3}$/.test(number);
  }
  watch(()=> checkRewardModel.value, (newValue, oldValue) =>{
    isValid.value = false
    
    if(isThreeDigitNumber(newValue)){
      isValid.value = true
    }

    if(newValue.length > 3){
      checkRewardModel.value = oldValue
    }
    

  },{immediate:true})

  const validateNumber = () =>{
    const number = Number(checkRewardModel.value);
  }


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
      <h1 class="text-2xl lg:text-3xl font-bold">รางวัลล็อตเตอรี่</h1>
    </header>

    <main class="grid grid-cols-1 items-center my-4 gap-4">
      <!-- ผลรางวัล -->
      <section class="flex flex-col items-center lg:items-start gap-4 w-full">
        <h2 class="text-xl text-center lg:text-2xl lg:text-start font-bold">
          ผลรการออกรางวัลล็อตเตอรี่
        </h2>
        <button @click="randomRewardHandle()" class="btn btn-outline shadow-md w-full max-w-xs">
          ดำเนินการสุ่มรางวัล
        </button>

        <LotteryTable
          :tableValue = "lotteryStore.lotteryReward"
        />
        
      </section>

      <!-- ตรวจรางวัล -->
      <section class="flex flex-col w-full">
        <div class="flex flex-col w-full gap-8 border border-gray-300 bg-gray-100 p-4 ">
          <h2 class="text-xl text-center lg:text-start lg:text-2xl font-bold">
            ตรวจรางวัลล็อตเตอรี่
          </h2>
          <div class="w-full">
            <label class="form-control w-full items-center gap-4">
              <div class="flex flex-row w-full items-center gap-4">
                <p class="text-md w-7/12 lg:text-lg lg:w-1/12 font-bold">เลขล็อตเตอรี่ :</p>
                <input v-model="checkRewardModel" placeholder="EX. (123)" type="text" class="input input-bordered w-full max-w-sm" />
              </div>
            </label>
          </div>
          <button @click="rewardCheck()" 
                  class="btn btn-outline shadow-md w-full lg:max-w-xs"
                  :disabled="!isValid"
          >
            ตรวจรางวัล
          </button>
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
