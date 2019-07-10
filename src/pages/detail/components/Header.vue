<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont back-icon">&#xe6a4;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <span class="iconfont header-back">&#xe6a4;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScoll)
  },
  deactivated () {
  	/*事件解绑*/
    window.removeEventListener('scroll', this.handleScoll)
  },
  methods: {
    handleScoll () {
      var top = document.documentElement.scrollTop
      if (top > 60) {
        var opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs {
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 0.4rem;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    .back-icon {
      font-size: 0.4rem;
    }
  }
  .header-fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    height: 0.86rem;
    line-height: 0.86rem;
    text-align: center;
    color: #fff;
    font-size: 0.32rem;
    background-color: $bgColor;
    .header-back {
      position: absolute;
      left: 0.1rem;
      top: 0;
      font-size: 0.4rem;
      width: 0.64rem;
      color: #fff;
    }
  }
</style>
