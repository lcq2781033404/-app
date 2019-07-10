<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe6a4;</span>
    </div>
    <div class="header-input">
    <span class="iconfont">&#xe613;</span>
    输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header {
    height: 0.86rem;
    line-height: 0.86rem;
    display: flex;
    background-color: $bgColor;
    color: #fff;
    .header-left {
      width: 0.64rem;
      float: left;
      text-align: center;
      .back-icon{
        font-size: 0.4rem;
      }
    }
    .header-input {
      flex: 1;
      height: 0.62rem;
      line-height: 0.62rem;
      padding-left: 0.2rem;
      margin-top: 0.12rem;
      margin-left: 0.2rem;
      background-color: #fff;
      color: #ccc;
      border-radius: 0.1rem;
    }
    .header-right {
      min-width: 1.04rem;
      padding: 0 0.1rem;
      float: right;
      text-align: center;
      color: #fff;
    }
  }
</style>
