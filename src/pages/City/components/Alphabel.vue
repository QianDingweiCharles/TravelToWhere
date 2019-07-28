<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchStart"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabel',
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false
    }
  },
  computed: {
    letters() {
      const letts = []
      for (let i in this.cities) {
        letts.push(i)
      }
      return letts
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      console.log('handleTouchMove start')
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/varibles.scss';
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.44rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
