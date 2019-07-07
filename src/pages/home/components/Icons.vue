<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <img class="icon-img" :src="item.img" />
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      iconList: [
        {
          id: '001',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '002',
          img: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e98eea7ed037b04a5af0250ca8a1abd7.png',
          desc: '少林寺'
        },
        {
          id: '003',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          desc: '夏季戏水'
        },
        {
          id: '004',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          desc: '郑州方特'
        },
        {
          id: '005',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/85/77241e9427222b02.png',
          desc: '郑州园博园'
        },
        {
          id: '006',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/b2/bfbc5d66e0ab5a02.png',
          desc: '冰雪世界'
        },
        {
          id: '007',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          desc: '郑州动物园'
        },
        {
          id: '008',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
          desc: '实景演出'
        },
        {
          id: '009',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          desc: '海洋馆'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach(function (item, index) {
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
