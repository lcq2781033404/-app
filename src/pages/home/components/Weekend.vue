<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item in weekend" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekend: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title {
    line-height: 0.6rem;
    text-indent: 0.2rem;
  }
  .item {
    padding-bottom: 0.2rem;
    .item-img {
      height: 2.5rem;
      padding: 0.1rem;
      width: 95%;
      margin: 0 auto;
      display: block;
    }
    .item-info {
      text-indent: 0.2rem;
      .item-title {
        line-height: 0.5rem;
        ellipsis();
        width: 80%;
      }
      .item-desc {
        line-height: 0.5rem;
        font-size: 12px;
        ellipsis();
        width: 80%;
      }
    }
  }
</style>
