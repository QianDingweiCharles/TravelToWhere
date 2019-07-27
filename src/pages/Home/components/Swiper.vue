<template>
  <div class="wraper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperLists " :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperLists: [
        {
          id: '001',
          imgUrl:
            '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg'
        },
        {
          id: '002',
          imgUrl:
            '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.wraper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
.wraper {
  overflow: hidden;
  width: 100%;
  height: 0;
  background-color: #eee;
  padding-bottom: 30.475%;
  .swiper-img {
    width: 100%;
  }
}
</style>
