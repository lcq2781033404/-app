<template>
  <ul class="list">
    <li class="item" v-for="(value, key) in cities" :key="key" :ref="key" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data: function () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      var letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick: function (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart: function () {
      this.touchStatus = true
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          var touchY = e.touches[0].clientY - 79
          var index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd: function () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list {
    position: absolute;
    right: 0;
    width: 0.4rem;
    /* top: 50%;
    transform: translateY(-50%); */
    bottom: 0;
    top: 1.58rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .item {
      text-align: center;
      line-height: 0.4rem;
      color: $bgColor;
    }
  }
</style>
