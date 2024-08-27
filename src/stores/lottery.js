import { defineStore } from 'pinia'

export const useLotteryStore = defineStore('lottery',{
  state:()=>({
    lotteryReward:{},
    messageRewardCheck:[]
  }),
  actions:{
    LoadReward(){
      const getReward = localStorage.getItem('reward')
      if(getReward){
        this.lotteryReward = JSON.parse(getReward)
      }
    },
    RandomReward(){
      const getNumberOneReward = this.RewardNumberOne()
      const getReward = {
        rewardNumberOne: getNumberOneReward,
        rewardNearbyNumberOne: this.RewardNearByNumberOne(getNumberOneReward),
        rewardNumberTwo: this.RewardNumberTwo(),
        rewardLastTwo: this.RewardLastTwo(getNumberOneReward)
      }

      this.lotteryReward = getReward
      localStorage.setItem('reward', JSON.stringify(this.lotteryReward))   
    },
    RewardNumberOne(){
      const getNumber = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
      return getNumber
    },
    RewardNearByNumberOne(rewardNumber){
      const getNumber = []
      switch (rewardNumber) {
        case '000':
          getNumber[0] = '999'
          getNumber[1] = '001'
          break;
        case '999':
          getNumber[0] = '998'
          getNumber[1] = '000'
          break;
      
        default:
          getNumber[0] = (Number(rewardNumber) - 1).toString().padStart(3, '0')
          getNumber[1] = (Number(rewardNumber) + 1).toString().padStart(3, '0')
          break;
      }
      return getNumber
    },
    RewardNumberTwo(lotteryNumber){
      const getNumber = ['','','']
      for (let i = 0; i < getNumber.length; i++) {
        let newNumber
        do {
          newNumber = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
        } while (getNumber.includes(newNumber) || lotteryNumber === newNumber)

        getNumber[i] = newNumber
      }
      return getNumber
    },
    RewardLastTwo(rewardNumber){
      const getNumber = rewardNumber.slice(-2)  
      return getNumber
    },

    CheckReward(lotteryNumber) {
     
      const getLastNumber = this.RewardLastTwo(lotteryNumber);
      this.messageRewardCheck = [];
    
      if (lotteryNumber === this.lotteryReward.rewardNumberOne) {
        this.messageRewardCheck.push('คุณถูกรางวัลที่ 1')
      }
      if (Array.isArray(this.lotteryReward.rewardNearbyNumberOne) && 
          this.lotteryReward.rewardNearbyNumberOne.includes(lotteryNumber)) {
        this.messageRewardCheck.push('คุณถูกเลขใกล้เคียงรางวัลที่ 1')
      }
      if (Array.isArray(this.lotteryReward.rewardNumberTwo) &&
          this.lotteryReward.rewardNumberTwo.includes(lotteryNumber)) {
        this.messageRewardCheck.push('คุณถูกรางวัลที่ 2')
      }
      if (this.lotteryReward.rewardLastTwo === getLastNumber) {
        this.messageRewardCheck.push('คุณถูกรางวัลเลขท้าย 2 ตัว')
      }
      if (this.messageRewardCheck.length === 0) {
        this.messageRewardCheck.push('คุณไม่ถูกรางวัล')
      }
      console.log(this.messageRewardCheck);
    }
  }
})
