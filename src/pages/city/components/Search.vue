<template>
  <div>
    <div class="search">
      <input type="text" name="search" placeholder="输入城市名或拼音" class="search-input" v-model="keyword" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasList">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data: function () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasList () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (cityName) {
      this.$store.dispatch('changeCity', cityName)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        var result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {mouseWheel: true, click: true, tap: true})
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search {
    height: 0.72rem;
    padding: 0 0.1rem;
    background-color: $bgColor;
    .search-input {
      width: 100%;
      height: 0.62rem;
      line-height: 0.62rem;
      text-align: center;
      border-radius: 0.06rem;
      padding: 0 0.1rem;
      color: #666;
      box-sizing: border-box;
    }
  }
  .search-content {
    overflow: hidden;
    z-index: 1;
    position: absolute;
    top: 1.58rem;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #eee;
    .search-item {
      line-height: 0.62rem;
      padding-left: 0.2rem;
      color: #666;
      background-color: #fff;
    }
  }
</style>
