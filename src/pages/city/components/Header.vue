<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <span class="iconfont header-back">&#xe6a4;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header {
    position: relative;
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
