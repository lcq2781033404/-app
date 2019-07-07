<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.img" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [
        {
          id: '001',
          img: 'http://img1.qunarzz.com/sight/p0/1804/7f/7f80af3ddefeb12a3.img.jpg_200x200_3c712d3a.jpg',
          title: '郑州方特欢乐世界',
          desc: '注重主题文化氛围和游玩体验的水世界'
        },
        {
          id: '002',
          img: 'http://img1.qunarzz.com/sight/p0/1804/7f/7f80af3ddefeb12a3.img.jpg_200x200_3c712d3a.jpg',
          title: '郑州方特欢乐世界',
          desc: '注重主题文化氛围和游玩体验的水世界'
        },
        {
          id: '003',
          img: 'http://img1.qunarzz.com/sight/p0/1804/7f/7f80af3ddefeb12a3.img.jpg_200x200_3c712d3a.jpg',
          title: '郑州方特欢乐世界',
          desc: '注重主题文化氛围和游玩体验的水世界'
        },
        {
          id: '004',
          img: 'http://img1.qunarzz.com/sight/p0/1804/7f/7f80af3ddefeb12a3.img.jpg_200x200_3c712d3a.jpg',
          title: '郑州方特欢乐世界',
          desc: '注重主题文化氛围和游玩体验的水世界'
        }
      ]
    }
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
