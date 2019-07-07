<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '001',
          url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/7a902407b45793f1613124db98740498.jpg_750x200_858aac54.jpg'
        },
        {
          id: '002',
          url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/1f69b3ab28f9962158c798a8a3f5b4b3.jpg_750x200_fb4bf7c4.jpg'
        },
        {
          id: '003',
          url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/b421363bbbb9184deacb4247eeea7485.jpg_750x200_12b42643.jpg'
        },
        {
          id: '004',
          url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active {
    background-color: #fff !important;
  }
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 26.5%;
    overflow: hidden;
    .swiper-img {
      width: 100%;
    }
  }
</style>
