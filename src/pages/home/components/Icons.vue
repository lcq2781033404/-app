<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <img class="icon-img" :src="item.imgUrl" />
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    icons: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach(function (item, index) {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons >>> .swiper-container {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    padding-top: 0.2rem;
  }
  .icons {
    .icon {
      width: 25%;
      height: 0;
      padding-bottom: 23%;
      text-align: center;
      float: left;
      .icon-img{
        width: 60%;
        margin-bottom: 0.1rem;
      }
    }
  }
</style>
