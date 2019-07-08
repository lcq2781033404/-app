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
          img: 'http://img1.qunarzz.com/sight/p0/201403/10/03b24acde057acb03c1b514bd2bf638c.jpg_200x200_00cebaa5.jpg',
          title: '郑州海洋馆',
          desc: '这里特别受欢迎哟(๑‾ ꇴ ‾๑)'
        },
        {
          id: '003',
          img: 'http://img1.qunarzz.com/sight/p0/201309/12/317f9a83c526f54ac8d65eac.jpg_200x200_47220a8b.jpg',
          title: '古柏渡飞黄风景区',
          desc: '既有西北风光之雄奇，又有江南景色的秀美'
        },
        {
          id: '004',
          img: 'http://img1.qunarzz.com/sight/p0/1412/12/88ee179e9cdd4902ffecc16e12fa4e1e.water.jpg_200x200_08bf7b1e.jpg',
          title: '世纪欢乐园',
          desc: '探寻火车文化，感受迪斯尼欢乐'
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
