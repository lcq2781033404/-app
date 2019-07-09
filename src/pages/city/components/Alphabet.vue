<template>
  <ul class="list">
    <li class="item" v-for="(value, key) in cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
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
