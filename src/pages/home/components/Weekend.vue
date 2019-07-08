<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
        <img class="item-img" :src="item.img" />
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
  data: function () {
    return {
      weekendList: [
        {
          id: '001',
          img: 'http://img1.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg',
          title: '郑州打卡',
          desc: '日月轮回，孕育出新的美丽'
        },
        {
          id: '002',
          img: 'http://img1.qunarzz.com/sight/source/1811/d2/017059dd59b0ee.jpg_r_640x214_497664a4.jpg',
          title: '城中碧玉万仙山',
          desc: '清幽山乡，人间仙境，世外桃源，雄壮而苍茫的红崖绝壁，妙曼而秀雅的山乡风韵，太行风光的典型代表'
        },
        {
          id: '003',
          img: 'http://img1.qunarzz.com/sight/source/1811/2c/e5e2b086fc0c60.jpg_r_640x214_811a2da7.jpg',
          title: '石刻艺术宝库',
          desc: '这里是中国石刻艺术宝库，石窟的规模大、艺术精湛，石刻艺术奇葩，是石刻艺术的典范之作。'
        }
      ]
    }
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
