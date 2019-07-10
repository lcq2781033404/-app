<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item in recommend" :key="item.id" :to="'/detail/' + item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommend: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title {
    line-height: 0.8rem;
    background-color: #eee;
    text-indent: 0.2rem;
  }
  .item {
    display: flex;
    overflow: hidden;
    height: 2.5rem;
    .item-img{
      height: 2rem;
      padding: 0.2rem;
    }
    .item-info {
      flex: 1;
      padding-top: 0.2rem;
      min-width: 0;
      .item-title {
        font-size: 0.32rem;
        line-height: 0.54rem;
        ellipsis();
      }
      .item-desc {
        line-height: 0.5rem;
        color: #ccc;
        font-size: 12px;
        ellipsis();
        width: 85%;
      }
      .item-button {
        line-height: 0.44rem;
        margin-top: 0.5rem;
        background-color: #ff9300;
        padding: 0 0.2rem;
        border-radius: 0.06rem;
        color: #fff;
      }
    }
  }
</style>
